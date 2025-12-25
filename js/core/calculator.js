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

                    section.items.forEach((name, idx) => {
                        const done = value > idx;
                        
                        sectionResult.items.push({
                            name: name,
                            done: done
                        });

                        if (done) {
                            total += unit;
                        } else {
                            missing.push({
                                category: section.category,
                                name,
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

                    sectionResult.items.push({
                        name: item.name,
                        done: !!done
                    });

                    if (done) {
                        total += unit;
                    } else {
                        missing.push({
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
