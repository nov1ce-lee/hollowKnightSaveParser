function calculateCompletion(save) {
    let total = 0;
    let missing = [];

    completionMap.forEach(section => {
        section.items.forEach(item => {
            if (save[item.key]) {
                total += section.unit;
            } else {
                missing.push({
                    category: section.category,
                    name: item.name,
                    percent: section.unit
                });
            }
        });
    });

    return { total, missing };
}
