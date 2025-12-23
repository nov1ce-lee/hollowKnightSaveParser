function calculateCompletion(save, gameConfig) {
    let total = 0;
    let missing = [];

    gameConfig.completionMap.forEach(section => {
        const unit = section.unit;

        // ===== 等级型 section =====
        if (section.max) {
            let value = save[section.key] || 0;
            if (section.transform) value = section.transform(value);

            section.items.forEach((name, idx) => {
                const done = value > idx;

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
            return;
        }

        // ===== 非等级型（布尔 / Collectables / 特殊）=====

        const collectablesMap = save.Collectables ? 
            buildMap(save.Collectables.savedData) : null;

        const creastsMap = save.ToolEquips ? 
            buildMap(save.ToolEquips.savedData) : null;

        if ((!Array.isArray(section.items) ||section.items.length === 0)) {
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
    });


    return { total, missing };
}

function buildCollectablesMap(savedData) {
    const map = {};
    savedData.forEach(item => {
        map[item.Name] = item.Data;
    });
    return map;
}

function buildMap(savedData) {
    const map = {};
    savedData.forEach(item => {
        map[item.Name] = item.Data;
    });
    return map;
}
