const completionMap = [
    {
        category: "Boss",
        unit: 1,
        items: [
            { key: "killedFalseKnight", name: "假骑士" },
            { key: "killedBigFly", name: "格鲁兹之母" },
            { key: "killedMawlek", name: "躁郁的毛里克" },
            { key: "killedJarCollector", name: "收藏家" },
            { key: "killedMantisLord", name: "螳螂领主" },
            { key: "killedTraitorLord", name: "叛徒领主" },
            { key: "killedMageLord", name: "灵魂大师" },
            { key: "killedMegaJellyfish", name: "乌姆" },
            { key: "killedInfectedKnight", name: "残破容器" },
            { key: "killedMimicSpider", name: "诺斯克" },
            { key: "killedBlackKnight", name: "守望者骑士" },
            { key: "killedDungDefender", name: "粪虫防御者" },
            { key: "hornet1Defeated", name: "守护者大黄蜂" },
            { key: "hornetOutskirtsDefeated", name: "岗哨大黄蜂" }
        ]
    },
    {
        category: "战士之梦",
        unit: 1,
        items: [
            { key: "killedGhostAladar", name: "击败戈布" },
            { key: "killedGhostXero", name: "击败泽若" },
            { key: "killedGhostHu", name: "击败胡长老" },
            { key: "killedGhostMarmu", name: "击败马尔穆" },
            { key: "killedGhostNoEyes", name: "击败无眼" },
            { key: "killedGhostMarkoth", name: "击败马科斯" },
            { key: "killedGhostGalien", name: "击败加利安" }
        ]
    },
    {
        category: "守梦者",
        unit: 1,
        items: [
            { key: "lurienDefeated", name: "守望者卢瑞恩" },
            { key: "monomonDefeated", name: "教师莫诺蒙" },
            { key: "hegemolDefeated", name: "野兽赫拉" }
        ]
    },
    {
        category: "装备",
        unit: 2,
        items: [
            { key: "hasDash", name: "蛾翼披风" },
            { key: "hasWalljump", name: "螳螂爪" },
            { key: "hasDoubleJump", name: "帝王之翼" },
            { key: "hasSuperDash", name: "水晶之心" },
            { key: "hasShadowDash", name: "暗影披风" },
            { key: "hasAcidArmour", name: "伊思玛的眼泪" },
            { key: "hasKingsBrand", name: "王之印记" }
        ]
    },
    // 法术
    {
        category: "法术",
        unit: 1,       // 每级占 1%
        key: "fireballLevel",
        max: 2,
        items: ["复仇之魂", "暗影之魂"]  // 对应等级 1, 2
    },
    {
        category: "法术",
        unit: 1,
        key: "screamLevel",
        max: 2,
        items: ["嚎叫幽灵", "深渊尖啸"]
    },
    {
        category: "法术",
        unit: 1,
        key: "quakeLevel",
        max: 2,
        items: ["荒芜俯冲", "黑暗降临"]
    },
    {
        category: "面具",
        unit: 1,
        max: 4,
        key: "maxHealthBase",
        items: ["+1", "+2", "+3", "+4"]
    },
    {
        category: "容器",
        unit: 1,
        max: 3,
        key: "MPReserveMax",
        items: ["+1", "+2", "+3"]
    },
    {
        category: "骨钉升级",
        unit: 1,  // 每升级占 1%
        max: 4,
        key: "nailSmithUpgrades",
        items: ["+1", "+2", "+3", "+4"]
    },
    {
        category: "骨钉技艺",
        unit: 1,
        items: [
            { key: "hasDashSlash", name: "强力劈砍" },
            { key: "hasCyclone", name: "旋风劈砍" },
            { key: "hasUpwardSlash", name: "冲刺劈砍" }
        ]
    },
    {
        category: "护符",
        unit: 1,
        items: [
            { key: "gotCharm_1", name: "蜂群集结" },
            { key: "gotCharm_2", name: "任性的指南针" },
            { key: "gotCharm_3", name: "幼虫之歌" },
            { key: "gotCharm_4", name: "坚硬外壳" },
            { key: "gotCharm_5", name: "巴德尔之壳" },
            { key: "gotCharm_6", name: "亡者之怒" },
            { key: "gotCharm_7", name: "快速聚集" },
            { key: "gotCharm_8", name: "生命血之心" },
            { key: "gotCharm_9", name: "生命血核心" },
            { key: "gotCharm_10", name: "防御者纹章" },
            { key: "gotCharm_11", name: "吸虫之巢" },
            { key: "gotCharm_12", name: "苦痛荆棘" },
            { key: "gotCharm_13", name: "骄傲印记" },
            { key: "gotCharm_14", name: "稳定之体" },
            { key: "gotCharm_15", name: "沉重之击" },
            { key: "gotCharm_16", name: "锋利之影" },
            { key: "gotCharm_17", name: "蘑菇孢子" },
            { key: "gotCharm_18", name: "修长之钉" },
            { key: "gotCharm_19", name: "萨满之石" },
            { key: "gotCharm_20", name: "灵魂捕手" },
            { key: "gotCharm_21", name: "噬魂者" },
            { key: "gotCharm_22", name: "发光子宫" },
            { key: "gotCharm_23", name: "易碎心脏" },
            { key: "gotCharm_24", name: "易碎贪婪" },
            { key: "gotCharm_25", name: "易碎力量" },
            { key: "gotCharm_26", name: "骨钉大师的荣耀" },
            { key: "gotCharm_27", name: "乔尼的祝福" },
            { key: "gotCharm_28", name: "乌恩之形" },
            { key: "gotCharm_29", name: "蜂巢之血" },
            { key: "gotCharm_30", name: "舞梦者" },
            { key: "gotCharm_31", name: "冲刺大师" },
            { key: "gotCharm_32", name: "快速劈砍" },
            { key: "gotCharm_33", name: "法术扭曲者" },
            { key: "gotCharm_34", name: "深度聚集" },
            { key: "gotCharm_35", name: "蜕变挽歌" },
            { key: "gotCharm_36", name: "国王之魂" },
            { key: "gotCharm_37", name: "飞毛腿" },
            { key: "gotCharm_38", name: "梦之盾" },
            { key: "gotCharm_39", name: "编织者之歌" },
            { key: "gotCharm_40", name: "格林之子" }
        ]
    },
    {
        category: "梦之钉",
        unit: 1,
        items: [
            { key: "hasDreamNail", name: "获得梦之钉" },
            { key: "dreamNailUpgraded", name: "觉醒梦之钉" },
            { key: "mothDeparted", name: "聆听先知的遗言" }
        ]
    },
    {
        category: "愚人竞技场",
        unit: 1,
        items: [
            { key: "colosseumBronzeCompleted", name: "勇士的试炼" },
            { key: "colosseumSilverCompleted", name: "征服者的试炼" },
            { key: "colosseumGoldCompleted", name: "愚人的试炼" }
        ]
    },
    {
        category: "格林剧团",
        mutualExclusive: ["killedNightmareGrimm", "destroyedNightmareLantern"],
        unit: 1,
        items: [
            { key: "killedGrimm", name: "击败格林团长" },
            { key: "killedNightmareGrimm", name: "击败梦魇之王格林" },
            { key: "destroyedNightmareLantern", name: "摧毁梦魇之灯" },
        ]
    },
    {
        category: "蜂巢",
        unit: 1,
        items: [
            { key: "killedHiveKnight", name: "击败蜂巢骑士" }
        ]
    },
    {
        category: "神居",
        unit: 1,
        items: [
            { key: "hasGodfinder", name: "神明调谐器" },
            { key: "bossDoorStateTier1.completed", name: "大师万神殿" },
            { key: "bossDoorStateTier2.completed", name: "艺术家万神殿" },
            { key: "bossDoorStateTier3.completed", name: "贤者万神殿" },
            { key: "bossDoorStateTier4.completed", name: "骑士万神殿" }
        ]
    },
];
