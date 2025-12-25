window.GAMES = window.GAMES || {};

window.GAMES.silksong = {
    id: 'silksong',
    title: 'Silksong 100% 分析器',
    maxPercent: 100,

    completionMap: [
        {
            category: "黄色工具",
            unit: 1,
            items: [
                { name: "罗盘", checkTools: (toolsMap) => toolsMap["Compass"]?.IsUnlocked },
                { name: "碎壳坠", checkTools: (toolsMap) => toolsMap["Bone Necklace"]?.IsUnlocked },
                { name: "磁石胸针", checkTools: (toolsMap) => toolsMap["Rosary Magnet"]?.IsUnlocked },
                { name: "负重环带", checkTools: (toolsMap) => toolsMap["Weighted Anklet"]?.IsUnlocked },
                { name: "棘刺手环", checkTools: (toolsMap) => toolsMap["Barbed Wire"]?.IsUnlocked },
                { name: "亡虫囊/壳囊", checkTools: (toolsMap) => 
                    toolsMap["Dead Mans Purse"]?.IsUnlocked || toolsMap["Silk Snare"]?.IsUnlocked },
                { name: "磁石骰", checkTools: (toolsMap) => toolsMap["Magnetite Dice"]?.IsUnlocked },
                { name: "迅捷脊锁", checkTools: (toolsMap) => toolsMap["Scuttlebrace"]?.IsUnlocked },
                { name: "登极握爪", checkTools: (toolsMap) => toolsMap["Wallcling"]?.IsUnlocked },
                { name: "蛛丝弦", checkTools: (toolsMap) => toolsMap["Musician Charm"]?.IsUnlocked },
                { name: "丝速脚环", checkTools: (toolsMap) => toolsMap["Sprintmaster"]?.IsUnlocked },
                { name: "窃者印记", checkTools: (toolsMap) => toolsMap["Thief Charm"]?.IsUnlocked },
            ]
        },
        {
            category: "红色工具",
            unit: 1,
            items: [
                { name: "直针", checkTools: (toolsMap) => toolsMap["Straight Pin"]?.IsUnlocked },
                { name: "三重镖", checkTools: (toolsMap) => toolsMap["Tri Pin"]?.IsUnlocked },
                { name: "蛰刺碎片", checkTools: (toolsMap) => toolsMap["Sting Shard"]?.IsUnlocked },
                { name: "钉刺", checkTools: (toolsMap) => toolsMap["Tack"]?.IsUnlocked },
                { name: "长针", checkTools: (toolsMap) => toolsMap["Longneedle"]?.IsUnlocked },
                { name: "弧爪/曲镰", checkTools: (toolsMap) => 
                    toolsMap["Curve Claws"]?.IsUnlocked || toolsMap["Extractor"]?.IsUnlocked },
                { name: "投掷环", checkTools: (toolsMap) => toolsMap["Shakra Ring"]?.IsUnlocked },
                { name: "爆燃囊", checkTools: (toolsMap) => toolsMap["Pimpilo"]?.IsUnlocked },
                { name: "螺切刃", checkTools: (toolsMap) => toolsMap["Conch Drill"]?.IsUnlocked },
                { name: "丝弹", checkTools: (toolsMap) => toolsMap["WebShot Architect"]?.IsUnlocked },
                { name: "掘洞钻", checkTools: (toolsMap) => toolsMap["Screw Attack"]?.IsUnlocked },
                { name: "机轮刃", checkTools: (toolsMap) => toolsMap["Cogwork Saw"]?.IsUnlocked },
                { name: "齿轮蜂", checkTools: (toolsMap) => toolsMap["Cogwork Flier"]?.IsUnlocked },
                { name: "念珠炮", checkTools: (toolsMap) => toolsMap["Rosary Cannon"]?.IsUnlocked },
                { name: "电枢球", checkTools: (toolsMap) => toolsMap["Lightning Rod"]?.IsUnlocked },
                { name: "燧石板", checkTools: (toolsMap) => toolsMap["Flintstone"]?.IsUnlocked },
                { name: "跳蚤秘酿", checkTools: (toolsMap) => toolsMap["Flea Brew"]?.IsUnlocked },
                { name: "生质液瓶", checkTools: (toolsMap) => toolsMap["Lifeblood Syringe"]?.IsUnlocked },
            ]
        },
        {
            category: "蓝色工具",
            unit: 1,
            items: [
                { name: "德鲁伊之眼/双瞳", checkTools: (toolsMap) => 
                    toolsMap["Mosscreep Tool 1"]?.IsUnlocked || toolsMap["Mosscreep Tool 2"]?.IsUnlocked },
                { name: "熔岩钟", checkTools: (toolsMap) => toolsMap["Lava Charm"]?.IsUnlocked },
                { name: "护佑钟", checkTools: (toolsMap) => toolsMap["Bell Bind"]?.IsUnlocked },
                { name: "花芯囊", checkTools: (toolsMap) => toolsMap["Poison Pouch"]?.IsUnlocked },
                { name: "碎面甲", checkTools: (toolsMap) => toolsMap["Fractured Mask"]?.IsUnlocked },
                { name: "多重缚丝器", checkTools: (toolsMap) => toolsMap["Multibind"]?.IsUnlocked },
                { name: "织光仪", checkTools: (toolsMap) => toolsMap["White Ring"]?.IsUnlocked },
                { name: "锯齿环", checkTools: (toolsMap) => toolsMap["Brolly Spike"]?.IsUnlocked },
                { name: "注丝套针", checkTools: (toolsMap) => toolsMap["Quickbind"]?.IsUnlocked },
                { name: "储丝延展器", checkTools: (toolsMap) => toolsMap["Spool Extender"]?.IsUnlocked },
                { name: "储备缚丝", checkTools: (toolsMap) => toolsMap["Reserve Bind"]?.IsUnlocked },
                { name: "爪镜/双生爪镜", checkTools: (toolsMap) => 
                    toolsMap["Dazzle Bind"]?.IsUnlocked || toolsMap["Dazzle Bind Upgraded"]?.IsUnlocked},
                { name: "记忆晶石", checkTools: (toolsMap) => toolsMap["Revenge Crystal"]?.IsUnlocked },
                { name: "撬赃钩", checkTools: (toolsMap) => toolsMap["Thief Claw"]?.IsUnlocked },
                { name: "伏特丝", checkTools: (toolsMap) => toolsMap["Zap Imbuement"]?.IsUnlocked },
                { name: "速射索", checkTools: (toolsMap) => toolsMap["Quick Sling"]?.IsUnlocked },
                { name: "净界花环", checkTools: (toolsMap) => toolsMap["Maggot Charm"]?.IsUnlocked },
                { name: "长爪", checkTools: (toolsMap) => toolsMap["Harpoon"]?.IsUnlocked },
                { name: "灵火提灯", checkTools: (toolsMap) => toolsMap["Wisp Lantern"]?.IsUnlocked },
                { name: "蚤母卵", checkTools: (toolsMap) => toolsMap["Flea Charm"]?.IsUnlocked },
                { name: "针徽", checkTools: (toolsMap) => toolsMap["Pinstress Tool"]?.IsUnlocked },
            ]
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
            items: [
                { name: "丝之矛", checkTools: (toolsMap) => toolsMap["Silk Spear"]?.IsUnlocked },
                { name: "灵丝风暴", checkTools: (toolsMap) => toolsMap["Thread Sphere"]?.IsUnlocked },
                { name: "十字绣", checkTools: (toolsMap) => toolsMap["Parry"]?.IsUnlocked },
                { name: "丝刃镖", checkTools: (toolsMap) => toolsMap["Silk Charge"]?.IsUnlocked },
                { name: "符文之怒", checkTools: (toolsMap) => toolsMap["Silk Bomb"]?.IsUnlocked },
                { name: "苍白之爪", checkTools: (toolsMap) => toolsMap["Silk Boss Needle"]?.IsUnlocked },
            ]
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
                { name: "野兽", checkCreasts: (creastsMap) => creastsMap["Warrior"]?.IsUnlocked },
                { name: "收割者", checkCreasts: (creastsMap) => creastsMap["Reaper"]?.IsUnlocked },
                { name: "漫游者", checkCreasts: (creastsMap) => creastsMap["Wanderer"]?.IsUnlocked },
                { name: "建筑师", checkCreasts: (creastsMap) => creastsMap["Toolmaster"]?.IsUnlocked },
                { name: "巫妪", checkCreasts: (creastsMap) => creastsMap["Witch"]?.IsUnlocked },
                { name: "萨满", checkCreasts: (creastsMap) => creastsMap["Spell"]?.IsUnlocked },
            ]
        },
        {
            category: "能力",
            unit: 1,
            items: [
                { key: "hasDash", name: "疾风步" },
                { key: "hasWalljump", name: "蛛攀术" },
                { key: "hasHarpoonDash", name: "飞针冲刺" },
                { key: "hasSuperJump", name: "灵丝升腾" },
                { key: "hasChargeSlash", name: "蓄力斩" },
                { key: "hasNeedolin", name: "织忆弦针" },
                { key: "HasBoundCrestUpgrader", name: "绑定纹章升级器" },
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
