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
                { name: "罗盘", checkTools: (toolsMap) => toolsMap["Compass"]?.IsUnlocked, wiki: "https://hkss.huijiwiki.com/wiki/罗盘" },
                { name: "碎壳坠", checkTools: (toolsMap) => toolsMap["Bone Necklace"]?.IsUnlocked, wiki: "https://hkss.huijiwiki.com/wiki/碎壳坠" },
                { name: "磁石胸针", checkTools: (toolsMap) => toolsMap["Rosary Magnet"]?.IsUnlocked, wiki: "https://hkss.huijiwiki.com/wiki/磁石胸针" },
                { name: "负重环带", checkTools: (toolsMap) => toolsMap["Weighted Anklet"]?.IsUnlocked, wiki: "https://hkss.huijiwiki.com/wiki/负重环带" },
                { name: "棘刺手环", checkTools: (toolsMap) => toolsMap["Barbed Wire"]?.IsUnlocked, wiki: "https://hkss.huijiwiki.com/wiki/棘刺手环" },
                { name: "亡虫囊/壳囊", checkTools: (toolsMap) => 
                    toolsMap["Dead Mans Purse"]?.IsUnlocked || toolsMap["Silk Snare"]?.IsUnlocked, wiki: "https://hkss.huijiwiki.com/wiki/亡虫囊" },
                { name: "磁石骰", checkTools: (toolsMap) => toolsMap["Magnetite Dice"]?.IsUnlocked, wiki: "https://hkss.huijiwiki.com/wiki/磁石骰" },
                { name: "迅捷脊锁", checkTools: (toolsMap) => toolsMap["Scuttlebrace"]?.IsUnlocked, wiki: "https://hkss.huijiwiki.com/wiki/迅捷脊锁" },
                { name: "登极握爪", checkTools: (toolsMap) => toolsMap["Wallcling"]?.IsUnlocked, wiki: "https://hkss.huijiwiki.com/wiki/登极握爪" },
                { name: "蛛丝弦", checkTools: (toolsMap) => toolsMap["Musician Charm"]?.IsUnlocked, wiki: "https://hkss.huijiwiki.com/wiki/蛛丝弦" },
                { name: "丝速脚环", checkTools: (toolsMap) => toolsMap["Sprintmaster"]?.IsUnlocked, wiki: "https://hkss.huijiwiki.com/wiki/丝速脚环" },
                { name: "窃者印记", checkTools: (toolsMap) => toolsMap["Thief Charm"]?.IsUnlocked, wiki: "https://hkss.huijiwiki.com/wiki/窃者印记" },
            ]
        },
        {
            category: "红色工具",
            unit: 1,
            items: [
                { name: "直针", checkTools: (toolsMap) => toolsMap["Straight Pin"]?.IsUnlocked, wiki: "https://hkss.huijiwiki.com/wiki/直针" },
                { name: "三重镖", checkTools: (toolsMap) => toolsMap["Tri Pin"]?.IsUnlocked, wiki: "https://hkss.huijiwiki.com/wiki/三重镖" },
                { name: "蛰刺碎片", checkTools: (toolsMap) => toolsMap["Sting Shard"]?.IsUnlocked, wiki: "https://hkss.huijiwiki.com/wiki/蛰刺碎片" },
                { name: "钉刺", checkTools: (toolsMap) => toolsMap["Tack"]?.IsUnlocked, wiki: "https://hkss.huijiwiki.com/wiki/钉刺" },
                { name: "长针", checkTools: (toolsMap) => toolsMap["Longneedle"]?.IsUnlocked, wiki: "https://hkss.huijiwiki.com/wiki/长针" },
                { name: "弧爪/曲镰", checkTools: (toolsMap) => 
                    toolsMap["Curve Claws"]?.IsUnlocked || toolsMap["Extractor"]?.IsUnlocked, wiki: "https://hkss.huijiwiki.com/wiki/弧爪" },
                { name: "投掷环", checkTools: (toolsMap) => toolsMap["Shakra Ring"]?.IsUnlocked, wiki: "https://hkss.huijiwiki.com/wiki/投掷环" },
                { name: "爆燃囊", checkTools: (toolsMap) => toolsMap["Pimpilo"]?.IsUnlocked, wiki: "https://hkss.huijiwiki.com/wiki/爆燃囊" },
                { name: "螺切刃", checkTools: (toolsMap) => toolsMap["Conch Drill"]?.IsUnlocked, wiki: "https://hkss.huijiwiki.com/wiki/螺切刃" },
                { name: "丝弹", checkTools: (toolsMap) => toolsMap["WebShot Architect"]?.IsUnlocked, wiki: "https://hkss.huijiwiki.com/wiki/丝弹" },
                { name: "掘洞钻", checkTools: (toolsMap) => toolsMap["Screw Attack"]?.IsUnlocked, wiki: "https://hkss.huijiwiki.com/wiki/掘洞钻" },
                { name: "机轮刃", checkTools: (toolsMap) => toolsMap["Cogwork Saw"]?.IsUnlocked, wiki: "https://hkss.huijiwiki.com/wiki/机轮刃" },
                { name: "齿轮蜂", checkTools: (toolsMap) => toolsMap["Cogwork Flier"]?.IsUnlocked, wiki: "https://hkss.huijiwiki.com/wiki/齿轮蜂" },
                { name: "念珠炮", checkTools: (toolsMap) => toolsMap["Rosary Cannon"]?.IsUnlocked, wiki: "https://hkss.huijiwiki.com/wiki/念珠炮" },
                { name: "电枢球", checkTools: (toolsMap) => toolsMap["Lightning Rod"]?.IsUnlocked, wiki: "https://hkss.huijiwiki.com/wiki/电枢球" },
                { name: "燧石板", checkTools: (toolsMap) => toolsMap["Flintstone"]?.IsUnlocked, wiki: "https://hkss.huijiwiki.com/wiki/燧石板" },
                { name: "跳蚤秘酿", checkTools: (toolsMap) => toolsMap["Flea Brew"]?.IsUnlocked, wiki: "https://hkss.huijiwiki.com/wiki/跳蚤秘酿" },
                { name: "生质液瓶", checkTools: (toolsMap) => toolsMap["Lifeblood Syringe"]?.IsUnlocked, wiki: "https://hkss.huijiwiki.com/wiki/生质液瓶" },
            ]
        },
        {
            category: "蓝色工具",
            unit: 1,
            items: [
                { name: "德鲁伊之眼/双瞳", checkTools: (toolsMap) => 
                    toolsMap["Mosscreep Tool 1"]?.IsUnlocked || toolsMap["Mosscreep Tool 2"]?.IsUnlocked, wiki: "https://hkss.huijiwiki.com/wiki/德鲁伊之眼" },
                { name: "熔岩钟", checkTools: (toolsMap) => toolsMap["Lava Charm"]?.IsUnlocked, wiki: "https://hkss.huijiwiki.com/wiki/熔岩钟" },
                { name: "护佑钟", checkTools: (toolsMap) => toolsMap["Bell Bind"]?.IsUnlocked, wiki: "https://hkss.huijiwiki.com/wiki/护佑钟" },
                { name: "花芯囊", checkTools: (toolsMap) => toolsMap["Poison Pouch"]?.IsUnlocked, wiki: "https://hkss.huijiwiki.com/wiki/花芯囊" },
                { name: "碎面甲", checkTools: (toolsMap) => toolsMap["Fractured Mask"]?.IsUnlocked, wiki: "https://hkss.huijiwiki.com/wiki/碎面甲" },
                { name: "多重缚丝器", checkTools: (toolsMap) => toolsMap["Multibind"]?.IsUnlocked, wiki: "https://hkss.huijiwiki.com/wiki/多重缚丝器" },
                { name: "织光仪", checkTools: (toolsMap) => toolsMap["White Ring"]?.IsUnlocked, wiki: "https://hkss.huijiwiki.com/wiki/织光仪" },
                { name: "锯齿环", checkTools: (toolsMap) => toolsMap["Brolly Spike"]?.IsUnlocked, wiki: "https://hkss.huijiwiki.com/wiki/锯齿环" },
                { name: "注丝套针", checkTools: (toolsMap) => toolsMap["Quickbind"]?.IsUnlocked, wiki: "https://hkss.huijiwiki.com/wiki/注丝套针" },
                { name: "储丝延展器", checkTools: (toolsMap) => toolsMap["Spool Extender"]?.IsUnlocked, wiki: "https://hkss.huijiwiki.com/wiki/储丝延展器" },
                { name: "储备缚丝", checkTools: (toolsMap) => toolsMap["Reserve Bind"]?.IsUnlocked, wiki: "https://hkss.huijiwiki.com/wiki/储备缚丝" },
                { name: "爪镜/双生爪镜", checkTools: (toolsMap) => 
                    toolsMap["Dazzle Bind"]?.IsUnlocked || toolsMap["Dazzle Bind Upgraded"]?.IsUnlocked, wiki: "https://hkss.huijiwiki.com/wiki/爪镜" },
                { name: "记忆晶石", checkTools: (toolsMap) => toolsMap["Revenge Crystal"]?.IsUnlocked, wiki: "https://hkss.huijiwiki.com/wiki/记忆晶石" },
                { name: "撬赃钩", checkTools: (toolsMap) => toolsMap["Thief Claw"]?.IsUnlocked, wiki: "https://hkss.huijiwiki.com/wiki/撬赃钩" },
                { name: "伏特丝", checkTools: (toolsMap) => toolsMap["Zap Imbuement"]?.IsUnlocked, wiki: "https://hkss.huijiwiki.com/wiki/伏特丝" },
                { name: "速射索", checkTools: (toolsMap) => toolsMap["Quick Sling"]?.IsUnlocked, wiki: "https://hkss.huijiwiki.com/wiki/速射索" },
                { name: "净界花环", checkTools: (toolsMap) => toolsMap["Maggot Charm"]?.IsUnlocked, wiki: "https://hkss.huijiwiki.com/wiki/净界花环" },
                { name: "长爪", checkTools: (toolsMap) => toolsMap["Harpoon"]?.IsUnlocked, wiki: "https://hkss.huijiwiki.com/wiki/长爪" },
                { name: "灵火提灯", checkTools: (toolsMap) => toolsMap["Wisp Lantern"]?.IsUnlocked, wiki: "https://hkss.huijiwiki.com/wiki/灵火提灯" },
                { name: "蚤母卵", checkTools: (toolsMap) => toolsMap["Flea Charm"]?.IsUnlocked, wiki: "https://hkss.huijiwiki.com/wiki/蚤母卵" },
                { name: "针徽", checkTools: (toolsMap) => toolsMap["Pinstress Tool"]?.IsUnlocked, wiki: "https://hkss.huijiwiki.com/wiki/针徽" },
            ]
        },
        {
            category: "工具袋升级",
            unit: 1,
            max: 4,
            key: "ToolPouchUpgrades",
            items: [
                { name: "+1", wiki: "https://hkss.huijiwiki.com/wiki/工具袋" },
                { name: "+2", wiki: "https://hkss.huijiwiki.com/wiki/工具袋" },
                { name: "+3", wiki: "https://hkss.huijiwiki.com/wiki/工具袋" },
                { name: "+4", wiki: "https://hkss.huijiwiki.com/wiki/工具袋" }
            ]
        },
        {
            category: "制作匣升级",
            unit: 1,
            max: 4,
            key: "ToolKitUpgrades",
            items: [
                { name: "+1", wiki: "https://hkss.huijiwiki.com/wiki/制作匣" },
                { name: "+2", wiki: "https://hkss.huijiwiki.com/wiki/制作匣" },
                { name: "+3", wiki: "https://hkss.huijiwiki.com/wiki/制作匣" },
                { name: "+4", wiki: "https://hkss.huijiwiki.com/wiki/制作匣" }
            ]
        },
        {
            category: "丝技",
            unit: 1,
            items: [
                { name: "丝之矛", checkTools: (toolsMap) => toolsMap["Silk Spear"]?.IsUnlocked, wiki: "https://hkss.huijiwiki.com/wiki/丝之矛" },
                { name: "灵丝风暴", checkTools: (toolsMap) => toolsMap["Thread Sphere"]?.IsUnlocked, wiki: "https://hkss.huijiwiki.com/wiki/灵丝风暴" },
                { name: "十字绣", checkTools: (toolsMap) => toolsMap["Parry"]?.IsUnlocked, wiki: "https://hkss.huijiwiki.com/wiki/十字绣" },
                { name: "丝刃镖", checkTools: (toolsMap) => toolsMap["Silk Charge"]?.IsUnlocked, wiki: "https://hkss.huijiwiki.com/wiki/丝刃镖" },
                { name: "符文之怒", checkTools: (toolsMap) => toolsMap["Silk Bomb"]?.IsUnlocked, wiki: "https://hkss.huijiwiki.com/wiki/符文之怒" },
                { name: "苍白之爪", checkTools: (toolsMap) => toolsMap["Silk Boss Needle"]?.IsUnlocked, wiki: "https://hkss.huijiwiki.com/wiki/苍白之爪" },
            ]
        },
        {
            category: "丝之心",
            unit: 1,
            key: "silkRegenMax",
            max: 3,
            items: [
                { name: "+1", wiki: "https://hkss.huijiwiki.com/wiki/丝之心" },
                { name: "+2", wiki: "https://hkss.huijiwiki.com/wiki/丝之心" },
                { name: "+3", wiki: "https://hkss.huijiwiki.com/wiki/丝之心" }
            ]
        },
        {
            category: "纹章",
            unit: 1,
            items: [
                { name: "野兽纹章", checkCreasts: (creastsMap) => creastsMap["Warrior"]?.IsUnlocked, wiki: "https://hkss.huijiwiki.com/wiki/野兽纹章" },
                { name: "收割者纹章", checkCreasts: (creastsMap) => creastsMap["Reaper"]?.IsUnlocked, wiki: "https://hkss.huijiwiki.com/wiki/收割者纹章" },
                { name: "漫游者纹章", checkCreasts: (creastsMap) => creastsMap["Wanderer"]?.IsUnlocked, wiki: "https://hkss.huijiwiki.com/wiki/漫游者纹章" },
                { name: "建筑师纹章", checkCreasts: (creastsMap) => creastsMap["Toolmaster"]?.IsUnlocked, wiki: "https://hkss.huijiwiki.com/wiki/建筑师纹章" },
                { name: "巫妪纹章", checkCreasts: (creastsMap) => creastsMap["Witch"]?.IsUnlocked, wiki: "https://hkss.huijiwiki.com/wiki/巫妪纹章" },
                { name: "萨满纹章", checkCreasts: (creastsMap) => creastsMap["Spell"]?.IsUnlocked, wiki: "https://hkss.huijiwiki.com/wiki/萨满纹章" },
            ]
        },
        {
            category: "能力",
            unit: 1,
            items: [
                { key: "hasDash", name: "疾风步", wiki: "https://hkss.huijiwiki.com/wiki/疾风步" },
                { key: "hasWalljump", name: "蛛攀术", wiki: "https://hkss.huijiwiki.com/wiki/蛛攀术" },
                { key: "hasHarpoonDash", name: "飞针冲刺", wiki: "https://hkss.huijiwiki.com/wiki/飞针冲刺" },
                { key: "hasSuperJump", name: "灵丝升腾", wiki: "https://hkss.huijiwiki.com/wiki/灵丝升腾" },
                { key: "hasChargeSlash", name: "蓄力斩", wiki: "https://hkss.huijiwiki.com/wiki/蓄力斩" },
                { key: "hasNeedolin", name: "织忆弦针", wiki: "https://hkss.huijiwiki.com/wiki/织忆弦针" },
                { key: "HasBoundCrestUpgrader", name: "风铃瑶", wiki: "https://hkss.huijiwiki.com/wiki/%E9%A3%8E%E7%81%B5%E8%B0%A3" },
            ]
        },
        {
            category: "面甲",
            unit: 1,
            max: 5,
            key: "maxHealthBase",
            items: [
                { name: "+1", wiki: "https://hkss.huijiwiki.com/wiki/面甲" },
                { name: "+2", wiki: "https://hkss.huijiwiki.com/wiki/面甲" },
                { name: "+3", wiki: "https://hkss.huijiwiki.com/wiki/面甲" },
                { name: "+4", wiki: "https://hkss.huijiwiki.com/wiki/面甲" },
                { name: "+5", wiki: "https://hkss.huijiwiki.com/wiki/面甲" }
            ],
            transform(value) {
                return value - 5;
            },
        },
        {
            category: "灵丝轴",
            unit: 1,
            max: 9,
            key: "silkMax",
            items: [
                { name: "+1", wiki: "https://hkss.huijiwiki.com/wiki/灵丝轴" },
                { name: "+2", wiki: "https://hkss.huijiwiki.com/wiki/灵丝轴" },
                { name: "+3", wiki: "https://hkss.huijiwiki.com/wiki/灵丝轴" },
                { name: "+4", wiki: "https://hkss.huijiwiki.com/wiki/灵丝轴" },
                { name: "+5", wiki: "https://hkss.huijiwiki.com/wiki/灵丝轴" },
                { name: "+6", wiki: "https://hkss.huijiwiki.com/wiki/灵丝轴" },
                { name: "+7", wiki: "https://hkss.huijiwiki.com/wiki/灵丝轴" },
                { name: "+8", wiki: "https://hkss.huijiwiki.com/wiki/灵丝轴" },
                { name: "+9", wiki: "https://hkss.huijiwiki.com/wiki/灵丝轴" }
            ],
            transform(value) {
                return value - 9;
            },
        },
        {
            category: "织针磨砺",
            unit: 1,
            max: 4,
            key: "nailUpgrades",
            items: [
                { name: "+1", wiki: "https://hkss.huijiwiki.com/wiki/织针" },
                { name: "+2", wiki: "https://hkss.huijiwiki.com/wiki/织针" },
                { name: "+3", wiki: "https://hkss.huijiwiki.com/wiki/织针" },
                { name: "+4", wiki: "https://hkss.huijiwiki.com/wiki/织针" }
            ],
        },
        {
            category: "特殊内容",
            unit: 1,
            items: [
                { name: "永绽花", checkCollectables: (collectablesMap) => collectablesMap["White Flower"]?.Amount > 0, wiki: "https://hkss.huijiwiki.com/wiki/永绽花" },
            ]
        }
    ]
};
