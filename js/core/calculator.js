(function(window) {
    const SaveCalculator = {
        calculateCompletion: function(save, gameConfig, fullJson) {
            let total = 0;
            let missing = [];
            let detailedSections = [];

            if (!window.CoreUtils) {
                console.error("CoreUtils not found!");
                return { total, missing, detailedSections };
            }

            const { getNestedValue, buildMap } = window.CoreUtils;

            // Preprocess sceneData if available
            let sceneDataMap = null;
            if (fullJson && fullJson.sceneData) {
                const persistentBools = fullJson.sceneData.persistentBools;
                // Handle both nested serializedList and direct array
                const boolList = (persistentBools && persistentBools.serializedList) ? persistentBools.serializedList : persistentBools;
                
                if (Array.isArray(boolList)) {
                    sceneDataMap = new Map();
                    boolList.forEach(item => {
                        // Support both lowercase and PascalCase keys
                        const sceneName = item.sceneName || item.SceneName;
                        const id = item.id || item.ID;
                        if (sceneName && id) {
                            const key = `${sceneName}|${id}`;
                            sceneDataMap.set(key, item);
                        }
                    });
                }
            }

            const checkSceneData = (checkConfig) => {
                if (!sceneDataMap || !checkConfig) return false;
                const key = `${checkConfig.scene}|${checkConfig.id}`;
                const item = sceneDataMap.get(key);
                if (!item) return false;
                
                // Value checks
                const val = item.value !== undefined ? item.value : item.Value;
                if (checkConfig.type === 'bool') {
                    return val === true; // explicitly true
                }
                return !!val;
            };

            gameConfig.completionMap.forEach(section => {
                const unit = section.unit;
                const sectionResult = {
                    category: section.category,
                    isLevel: !!section.max,
                    items: []
                };

                // ===== 等级型 section (Modified for Mixed Content) =====
                if (section.max) {
                    let value = save[section.key] || 0;
                    if (section.transform) value = section.transform(value);

                    let levelIndex = 0; // Track index for level-based items separately

                    section.items.forEach((itemEntry) => {
                        const isObject = typeof itemEntry === 'object' && itemEntry !== null;
                        const itemName = isObject ? itemEntry.name : itemEntry;
                        const itemWiki = isObject ? itemEntry.wiki : null;
                        const itemIcon = isObject ? itemEntry.icon : null;
                        const itemDesc = isObject ? itemEntry.desc : null;
                        
                        // Determine unit: prefer item.unit, fallback to section.unit
                        let itemUnit = (isObject && itemEntry.unit !== undefined) ? itemEntry.unit : unit;
                        if (itemUnit === undefined) itemUnit = 0; // Default fallback

                        let done = false;

                        // Check for custom logic first (Mixed Content Support)
                        if (isObject && (itemEntry.sceneCheck || itemEntry.check || itemEntry.checkTools || itemEntry.checkCollectables)) {
                            if (itemEntry.sceneCheck) {
                                done = checkSceneData(itemEntry.sceneCheck);
                            } else if (itemEntry.check) {
                                done = itemEntry.check(save);
                            } else if (itemEntry.checkTools) {
                                done = itemEntry.checkTools(save.Tools ? buildMap(save.Tools.savedData) : {});
                            } else if (itemEntry.checkCollectables) {
                                done = itemEntry.checkCollectables(save.Collectables ? buildMap(save.Collectables.savedData) : {});
                            }
                        } else {
                            // Standard Level Item (Fallback to index comparison)
                            done = value > levelIndex;
                            levelIndex++;
                        }
                        
                        const resultItem = {
                            name: itemName,
                            done: done,
                            wiki: itemWiki,
                            icon: itemIcon,
                            desc: itemDesc,
                            ...((isObject) ? itemEntry : {})
                        };
                        // Ensure done is explicitly set
                        resultItem.done = done;

                        sectionResult.items.push(resultItem);

                        if (done) {
                            total += itemUnit;
                        } else {
                            if (itemUnit > 0) {
                                missing.push({
                                    category: section.category,
                                    name: itemName,
                                    wiki: itemWiki,
                                    icon: itemIcon,
                                    percent: itemUnit
                                });
                            }
                        }
                    });
                    
                    detailedSections.push(sectionResult);
                    return;
                }

                // ===== 非等级型（布尔 / Collectables / 特殊）=====
                const collectablesMap = save.Collectables ? 
                    buildMap(save.Collectables.savedData) : null;

                const creastsMap = save.ToolEquips ? 
                    buildMap(save.ToolEquips.savedData) : null;

                const toolsMap = save.Tools ? 
                    buildMap(save.Tools.savedData) : null;

                if ((!Array.isArray(section.items) || section.items.length === 0)) {
                    // console.info('Skip unfinished section:', section.category);
                    return;
                }

                section.items.forEach(item => {
                    // === 处理 Group 类型 ===
                    if (item.type === 'group') {
                        const subResults = item.items.map(subItem => {
                            let subDone;
                            if (subItem.sceneCheck) subDone = checkSceneData(subItem.sceneCheck);
                            else if (subItem.customCheck) subDone = subItem.customCheck(save);
                            else if (subItem.checkCollectables) subDone = subItem.checkCollectables(collectablesMap, save);
                            else if (subItem.checkCreasts) subDone = subItem.checkCreasts(creastsMap, save);
                            else if (subItem.checkTools) subDone = subItem.checkTools(toolsMap, save);
                            
                            if (subDone === undefined && subItem.key) {
                                subDone = !!getNestedValue(save, subItem.key);
                            }
                            
                            return { ...subItem, done: !!subDone };
                        });

                        const anyDone = subResults.some(r => r.done);
                        
                        sectionResult.items.push({
                            type: 'group',
                            items: subResults,
                            anyDone: anyDone
                        });
                        
                        const groupUnit = item.unit !== undefined ? item.unit : unit;

                        if (anyDone) {
                            total += groupUnit;
                        } else {
                            if (groupUnit > 0) {
                                missing.push({
                                    category: section.category,
                                    name: subResults.map(r => r.name).join('/'),
                                    wiki: subResults[0].wiki,
                                    icon: subResults[0].icon,
                                    percent: groupUnit
                                });
                            }
                        }
                        return;
                    }

                    let done;

                    // 1️⃣ item 自定义检查（优先级最高）
                    if (item.sceneCheck) {
                        done = checkSceneData(item.sceneCheck);
                    } else if (item.customCheck) {
                        done = item.customCheck(save);
                    } else if (item.checkCollectables) {
                        done = item.checkCollectables(collectablesMap, save);
                    } else if (item.checkCreasts) {
                        done = item.checkCreasts(creastsMap, save);
                    } else if (item.checkTools) {
                        done = item.checkTools(toolsMap, save);
                    }

                    // 2️⃣ 游戏级特殊规则（如 国王之魂）
                    else if (gameConfig.specialCheck) {
                        const result = gameConfig.specialCheck(item, save);
                        if (result !== null && result !== undefined) {
                            done = result;
                        }
                    }

                    // 3️⃣ 默认布尔读取
                    if (done === undefined) {
                        done = !!getNestedValue(save, item.key);
                    }

                    let finalIcon = item.icon;
                    if (item.getIcon && typeof item.getIcon === 'function') {
                        finalIcon = item.getIcon(save);
                    }

                    sectionResult.items.push({
                        ...item, // Pass through all original properties (icon, wiki, etc.)
                        icon: finalIcon,
                        name: item.name,
                        done: !!done
                    });

                    const itemUnit = item.unit !== undefined ? item.unit : unit;

                    if (done) {
                        total += itemUnit;
                    } else {
                        if (itemUnit > 0) {
                            missing.push({
                                ...item, // Pass through here as well
                                icon: finalIcon,
                                category: section.category,
                                name: item.name,
                                percent: itemUnit
                            });
                        }
                    }
                });

                detailedSections.push(sectionResult);
            });

            return { total, missing, detailedSections };
        }
    };

    window.SaveCalculator = SaveCalculator;
})(window);
