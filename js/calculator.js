function calculateCompletion(save) {
    let total = 0;
    let missing = [];

    completionMap.forEach(section => {
        if (section.items) {
            // 每个 item 对应布尔或等级
            section.items.forEach((item, idx) => {
                const value = save[section.key];  // 例如 nailSmithUpgrades
                const done = value > idx;         // 前 N 个完成
                if (done) {
                    total += section.unit;
                } else {
                    missing.push({
                        category: section.category,
                        name: item,
                        percent: section.unit
                    });
                }
            });
        } else {
            // 布尔类型
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
