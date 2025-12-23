window.GAMES.silksong = {
    id: 'silksong',
    title: 'Silksong 100% 分析器',
    maxPercent: 100,

    completionMap: [
        {
            // Tools
            category: "红色工具",
            unit: 1,
            items: []
        },
        {
            category: "蓝色工具",
            unit: 1,
            items: []
        },
        {
            category: "黄色工具",
            unit: 1,
            items: []
        },
        {
            category: "工具袋升级",
            unit: 1,
            max: 4,
            key: "ToolPouchUpgrades",
            items: ["+1", "+2", "+3", "+4"]
        },
        {
            category: "制作匣升级",
            unit: 1,
            max: 4,
            key: "ToolKitUpgrades",
            items: ["+1", "+2", "+3", "+4"]
        },
        {
            category: "丝技",
            unit: 1,
            items: []
        },
        {
            category: "丝之心",
            unit: 1,
            key: "silkRegenMax",
            max: 3,
            items: ["+1", "+2", "+3"]
        },
        {
            category: "纹章",
            unit: 1,
            items: [
                { name: "野兽", checkCreasts: (creastsMap) => creastsMap["White Flower"]?.IsUnlocked },
                { name: "收割者", checkCreasts: (creastsMap) => creastsMap["White Flower"]?.IsUnlocked },
                { name: "漫游者", checkCreasts: (creastsMap) => creastsMap["White Flower"]?.IsUnlocked },
                { name: "建筑师", checkCreasts: (creastsMap) => creastsMap["White Flower"]?.IsUnlocked },
                { name: "巫妪", checkCreasts: (creastsMap) => creastsMap["White Flower"]?.IsUnlocked },
                { name: "萨满", checkCreasts: (creastsMap) => creastsMap["Spell"]?.IsUnlocked },
            ]
        },
        {
            category: "能力",
            unit: 1,
            items: [
                { key: "hasNeedolin", name: "织忆弦针" },
                { key: "hasDash", name: "疾风步" },
                { key: "hasWalljump", name: "蛛攀术" },
                { key: "hasHarpoonDash", name: "飞针冲刺" },
                { key: "hasSuperJump", name: "灵丝升腾" },
            ]
        },
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
            category: "灵丝轴",
            unit: 1,
            max: 9,
            key: "silkMax",
            items: ["+1", "+2", "+3", "+4", "+5", "+6", "+7", "+8", "+9"],
            transform(value) {
                return value - 9;
            },
        },
        {
            category: "织针磨砺",
            unit: 1,
            max: 4,
            key: "nailUpgrades",
            items: ["+1", "+2", "+3", "+4"],
        },
        {
            category: "特殊内容",
            unit: 1,
            items: [
                { name: "白绽花", checkCollectables: (collectablesMap) => collectablesMap["White Flower"]?.Amount > 0 }
            ]
        }
    ]
};

