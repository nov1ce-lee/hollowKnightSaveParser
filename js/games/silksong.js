window.GAMES.silksong = {
    id: 'silksong',
    title: 'Silksong 100% 分析器',
    maxPercent: 100,

    completionMap: [
        {
            category: "面具",
            unit: 1,
            max: 5,
            key: "maxHealthBase",
            items: ["+1", "+2", "+3", "+4", "+5"],
            transform(value) {
                return value - 5;
            },
        },
        {
            category: "丝轴",
            unit: 1,
            max: 9,
            key: "silkMax",
            items: ["+1", "+2", "+3", "+4", "+5", "+6", "+7", "+8", "+9"],
            transform(value) {
                return value - 9;
            },
        },
        {
            category: "特殊能力",
            unit: 1,
            items: [
                { key: "hasNeedolin", name: "织忆弦针" },
                { key: "hasDash", name: "冲刺" },
                { key: "hasWalljump", name: "攀墙" },
                { key: "hasHarpoonDash", name: "飞针冲刺" },
                { key: "hasSuperJump", name: "二段跳" },
            ]
        }
    ]
};
