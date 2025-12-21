function calculateCompletion(save) {
    let total = 0;
    let missing = [];

    completionMap.forEach(section => {
        if (section.max) {
            // 等级型技能处理
            section.items.forEach((itemName, idx) => {
                const value = save[section.key] || 0;
                const done = value > idx;
                if (done) {
                    total += section.unit;
                } else {
                    missing.push({
                        category: section.category,
                        name: itemName,
                        percent: section.unit
                    });
                }
            });
        } else {
            // 布尔项处理
            section.items.forEach(item => {
                const done = save[item.key];
                if (done) total += section.unit;
                else missing.push({
                    category: section.category,
                    name: item.name,
                    percent: section.unit
                });
            });
        }
    });

    return { total, missing };
}
