function calculateCompletion(save) {
    let total = 0;
    let missing = [];

    completionMap.forEach(section => {
        if (section.max) {
            // 等级型技能处理
            section.items.forEach((itemName, idx) => {
                value = save[section.key] || 0;
                if (section.category == '面具') {
                    value -= 5
                } else if (section.category == '容器') {
                    value /= 33
                }
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
                if (item.name == '国王之魂') {
                    done = save['gotQueenFragment'] && save['gotKingFragment'];
                } else {
                    const value = getNestedValue(save, item.key);
                    done = !!value;  // true/false
                }
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

function getNestedValue(obj, path) {
    return path.split('.').reduce((o, key) => (o ? o[key] : undefined), obj);
}
