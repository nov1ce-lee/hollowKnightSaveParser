(function(window) {
    const SaveCalculator = {
        calculateCompletion: function(save, gameConfig) {
            let total = 0;
            let missing = [];
            let detailedSections = [];

            if (!window.CoreUtils) {
                console.error("CoreUtils not found!");
                return { total, missing, detailedSections };
            }

            const { getNestedValue, buildMap } = window.CoreUtils;

            gameConfig.completionMap.forEach(section => {
                const unit = section.unit;
                const sectionResult = {
                    category: section.category,
                    isLevel: !!section.max,
                    items: []
                };

                // ===== 等级型 section =====
                if (section.max) {
                    let value = save[section.key] || 0;
                    if (section.transform) value = section.transform(value);

                    section.items.forEach((itemEntry, idx) => {
                        const itemName = typeof itemEntry === 'string' ? itemEntry : itemEntry.name;
                        const itemWiki = typeof itemEntry === 'string' ? null : itemEntry.wiki;
                        const itemIcon = typeof itemEntry === 'string' ? null : itemEntry.icon;
                        
                        const done = value > idx;
                        
                        const resultItem = {
                            name: itemName,
                            done: done,
                            wiki: itemWiki,
                            icon: itemIcon
                        };

                        sectionResult.items.push(resultItem);

                        if (done) {
                            total += unit;
                        } else {
                            missing.push({
                                category: section.category,
                                name: itemName,
                                wiki: itemWiki,
                                icon: itemIcon,
                                percent: unit
                            });
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
                    console.info('Skip unfinished section:', section.category);
                    return;
                }

                section.items.forEach(item => {
                    // === 处理 Group 类型 ===
                    if (item.type === 'group') {
                        const subResults = item.items.map(subItem => {
                            let subDone;
                            if (subItem.checkCollectables) subDone = subItem.checkCollectables(collectablesMap, save);
                            else if (subItem.checkCreasts) subDone = subItem.checkCreasts(creastsMap, save);
                            else if (subItem.checkTools) subDone = subItem.checkTools(toolsMap, save);
                            else if (gameConfig.specialCheck) {
                                const res = gameConfig.specialCheck(subItem, save);
                                if (res !== null && res !== undefined) subDone = res;
                            }
                            
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

                        if (anyDone) {
                            total += unit;
                        } else {
                            missing.push({
                                category: section.category,
                                name: subResults.map(r => r.name).join('/'),
                                wiki: subResults[0].wiki,
                                icon: subResults[0].icon,
                                percent: unit
                            });
                        }
                        return;
                    }

                    let done;

                    // 1️⃣ item 自定义检查（优先级最高）
                    if (item.checkCollectables) {
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

                    if (done) {
                        total += unit;
                    } else {
                        missing.push({
                            ...item, // Pass through here as well
                            icon: finalIcon,
                            category: section.category,
                            name: item.name,
                            percent: unit
                        });
                    }
                });

                detailedSections.push(sectionResult);
            });

            return { total, missing, detailedSections };
        }
    };

    window.SaveCalculator = SaveCalculator;
})(window);
