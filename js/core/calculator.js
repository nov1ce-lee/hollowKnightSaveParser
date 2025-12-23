function calculateCompletion(save, gameConfig) {
    let total = 0;
    let missing = [];

    gameConfig.completionMap.forEach(section => {
        const unit = section.unit;

        if (section.max) {
            let value = save[section.key] || 0;
            if (section.transform) value = section.transform(value);

            section.items.forEach((name, idx) => {
                const done = value > idx;
                if (done) total += unit;
                else missing.push({ category: section.category, name, percent: unit });
            });

        } else {
            section.items.forEach(item => {
                let done = null;

                if (gameConfig.specialCheck) {
                    done = gameConfig.specialCheck(item, save);
                }

                if (done === null) {
                    const value = getNestedValue(save, item.key);
                    done = !!value;
                }

                if (done) total += unit;
                else missing.push({ category: section.category, name: item.name, percent: unit });
            });
        }
    });

    return { total, missing };
}
