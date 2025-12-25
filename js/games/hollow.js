window.GAMES = window.GAMES || {};

window.GAMES.hollow = {
    id: 'hollow',
    title: 'Hollow Knight 112% 分析器',
    maxPercent: 112,

    completionMap: [
        {
            category: "Boss",
            unit: 1,
            items: [
                { 
                    key: "killedFalseKnight", 
                    name: "假骑士",
                    icon: "https://huiji-thumb.huijistatic.com/hkss/uploads/thumb/9/98/B_False_Knight.png/438px-B_False_Knight.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/假骑士"
                },
                { 
                    key: "killedBigFly", 
                    name: "格鲁兹之母",
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/9/9f/B_Gruz_Mother.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/格鲁兹之母"
                },
                { 
                    key: "killedMawlek", 
                    name: "躁郁的毛里克",
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/0/02/B_Brooding_Mawlek_2.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/躁郁的毛里克"
                },
                { 
                    key: "killedJarCollector", 
                    name: "收藏家", 
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/d/db/The_Collector_Idle.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/收藏家" 
                },
                { 
                    key: "killedMantisLord", 
                    name: "螳螂领主", 
                    icon: "https://huiji-thumb.huijistatic.com/hkss/uploads/thumb/5/52/B_Mantis_Lords_2.png/344px-B_Mantis_Lords_2.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/螳螂领主" 
                },
                { 
                    key: "killedTraitorLord", 
                    name: "叛徒领主", 
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/2/2c/B_Traitor_Lord.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/叛徒领主" 
                },
                { 
                    key: "killedMageLord", 
                    name: "灵魂大师", 
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/7/72/B_Soul_Master.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/灵魂大师" 
                },
                { 
                    key: "killedMegaJellyfish", 
                    name: "乌姆", 
                    icon: "https://huiji-thumb.huijistatic.com/hkss/uploads/thumb/4/49/B_Uumuu.png/360px-B_Uumuu.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/乌姆" 
                },
                { 
                    key: "killedInfectedKnight", 
                    name: "残破容器", 
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/5/57/Broken_Vessel_Idle.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/残破容器" 
                },
                { 
                    key: "killedMimicSpider", 
                    name: "诺斯克",
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/e/e6/Nosk_Idle.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/诺斯克" 
                },
                { 
                    key: "killedBlackKnight", 
                    name: "守望者骑士", 
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/9/99/B_Watcher_Knight_2.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/守望者骑士" 
                },
                { 
                    key: "killedDungDefender", 
                    name: "粪虫防御者", 
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/7/76/Dung_Defender_Idle.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/粪虫防御者" 
                },
                { 
                    key: "hornet1Defeated", 
                    name: "守护者大黄蜂", 
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/4/4f/B_Hornet_2.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/大黄蜂_(Boss)" 
                },
                { 
                    key: "hornetOutskirtsDefeated", 
                    name: "岗哨大黄蜂", 
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/4/4f/B_Hornet_2.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/大黄蜂_(Boss)" 
                }
            ]
        },
        {
            category: "战士之梦",
            unit: 1,
            items: [
                { key: "killedGhostAladar", name: "戈布", wiki: "https://hkss.huijiwiki.com/wiki/戈布" },
                { key: "killedGhostXero", name: "泽若", wiki: "https://hkss.huijiwiki.com/wiki/泽若" },
                { key: "killedGhostHu", name: "胡长老", wiki: "https://hkss.huijiwiki.com/wiki/胡长老" },
                { key: "killedGhostMarmu", name: "马尔穆", wiki: "https://hkss.huijiwiki.com/wiki/马尔穆" },
                { key: "killedGhostNoEyes", name: "无眼", wiki: "https://hkss.huijiwiki.com/wiki/无眼" },
                { key: "killedGhostMarkoth", name: "马科斯", wiki: "https://hkss.huijiwiki.com/wiki/马科斯" },
                { key: "killedGhostGalien", name: "加利安", wiki: "https://hkss.huijiwiki.com/wiki/加利安" }
            ]
        },
        {
            category: "守梦者",
            unit: 1,
            items: [
                { key: "lurienDefeated", name: "守望者卢瑞恩", wiki: "https://hkss.huijiwiki.com/wiki/守望者卢瑞恩" },
                { key: "monomonDefeated", name: "教师莫诺蒙", wiki: "https://hkss.huijiwiki.com/wiki/教师莫诺蒙" },
                { key: "hegemolDefeated", name: "野兽赫拉", wiki: "https://hkss.huijiwiki.com/wiki/野兽赫拉" }
            ]
        },
        {
            category: "装备",
            unit: 2,
            items: [
                { key: "hasDash", name: "蛾翼披风 | 冲刺", wiki: "https://hkss.huijiwiki.com/wiki/蛾翼披风" },
                { key: "hasWalljump", name: "螳螂爪 | 攀墙跳", wiki: "https://hkss.huijiwiki.com/wiki/螳螂爪" },
                { key: "hasDoubleJump", name: "帝王之翼 | 二段跳", wiki: "https://hkss.huijiwiki.com/wiki/帝王之翼" },
                { key: "hasSuperDash", name: "水晶之心 | 超冲", wiki: "https://hkss.huijiwiki.com/wiki/水晶之心" },
                { key: "hasShadowDash", name: "暗影披风 | 黑冲", wiki: "https://hkss.huijiwiki.com/wiki/暗影披风" },
                { key: "hasAcidArmour", name: "伊思玛的眼泪 | 酸泳", wiki: "https://hkss.huijiwiki.com/wiki/伊思玛的眼泪" },
                { key: "hasKingsBrand", name: "王之印记 | 进深渊", wiki: "https://hkss.huijiwiki.com/wiki/王之印记" }
            ]
        },
        // 法术
        {
            category: "法术",
            unit: 1,       // 每级占 1%
            key: "fireballLevel",
            max: 2,
            items: [
                { name: "复仇之魂 | 白波", wiki: "https://hkss.huijiwiki.com/wiki/复仇之魂" },
                { name: "暗影之魂 | 黑波", wiki: "https://hkss.huijiwiki.com/wiki/暗影之魂" }
            ]
        },
        {
            category: "法术",
            unit: 1,
            key: "screamLevel",
            max: 2,
            items: [
                { name: "嚎叫幽灵 | 白吼", wiki: "https://hkss.huijiwiki.com/wiki/嚎叫幽灵" },
                { name: "深渊尖啸 | 黑吼", wiki: "https://hkss.huijiwiki.com/wiki/深渊尖啸" }
            ]
        },
        {
            category: "法术",
            unit: 1,
            key: "quakeLevel",
            max: 2,
            items: [
                { name: "荒芜俯冲 | 白砸", wiki: "https://hkss.huijiwiki.com/wiki/荒芜俯冲" },
                { name: "黑暗降临 | 黑砸", wiki: "https://hkss.huijiwiki.com/wiki/黑暗降临" }
            ]
        },
        {
            category: "面具",
            unit: 1,
            max: 4,
            key: "maxHealthBase",
            items: [
                { name: "+1", wiki: "https://hkss.huijiwiki.com/wiki/面具碎片" },
                { name: "+2", wiki: "https://hkss.huijiwiki.com/wiki/面具碎片" },
                { name: "+3", wiki: "https://hkss.huijiwiki.com/wiki/面具碎片" },
                { name: "+4", wiki: "https://hkss.huijiwiki.com/wiki/面具碎片" }
            ],
            transform(value) {
                return value - 5;
            },
        },
        {
            category: "容器",
            unit: 1,
            max: 3,
            key: "MPReserveMax",
            items: [
                { name: "+1", wiki: "https://hkss.huijiwiki.com/wiki/容器碎片" },
                { name: "+2", wiki: "https://hkss.huijiwiki.com/wiki/容器碎片" },
                { name: "+3", wiki: "https://hkss.huijiwiki.com/wiki/容器碎片" }
            ],
            transform(value) {
                return value / 33;
            },
        },
        {
            category: "骨钉升级",
            unit: 1,  // 每升级占 1%
            max: 4,
            key: "nailSmithUpgrades",
            items: [
                { name: "+1", wiki: "https://hkss.huijiwiki.com/wiki/骨钉" },
                { name: "+2", wiki: "https://hkss.huijiwiki.com/wiki/骨钉" },
                { name: "+3", wiki: "https://hkss.huijiwiki.com/wiki/骨钉" },
                { name: "+4", wiki: "https://hkss.huijiwiki.com/wiki/骨钉" }
            ]
        },
        {
            category: "骨钉技艺",
            unit: 1,
            items: [
                { key: "hasDashSlash", name: "强力劈砍", wiki: "https://hkss.huijiwiki.com/wiki/强力劈砍" },
                { key: "hasCyclone", name: "旋风劈砍", wiki: "https://hkss.huijiwiki.com/wiki/旋风劈砍" },
                { key: "hasUpwardSlash", name: "冲刺劈砍", wiki: "https://hkss.huijiwiki.com/wiki/冲刺劈砍" }
            ]
        },
        {
            category: "护符",
            unit: 1,
            items: [
                { key: "gotCharm_1", name: "蜂群集结", wiki: "https://hkss.huijiwiki.com/wiki/蜂群集结" },
                { key: "gotCharm_2", name: "任性的指南针", wiki: "https://hkss.huijiwiki.com/wiki/任性的指南针" },
                { key: "gotCharm_3", name: "幼虫之歌", wiki: "https://hkss.huijiwiki.com/wiki/幼虫之歌" },
                { key: "gotCharm_4", name: "坚硬外壳", wiki: "https://hkss.huijiwiki.com/wiki/坚硬外壳" },
                { key: "gotCharm_5", name: "巴德尔之壳", wiki: "https://hkss.huijiwiki.com/wiki/巴德尔之壳" },
                { key: "gotCharm_6", name: "亡者之怒", wiki: "https://hkss.huijiwiki.com/wiki/亡者之怒" },
                { key: "gotCharm_7", name: "快速聚集", wiki: "https://hkss.huijiwiki.com/wiki/快速聚集" },
                { key: "gotCharm_8", name: "生命血之心", wiki: "https://hkss.huijiwiki.com/wiki/生命血之心" },
                { key: "gotCharm_9", name: "生命血核心", wiki: "https://hkss.huijiwiki.com/wiki/生命血核心" },
                { key: "gotCharm_10", name: "防御者纹章", wiki: "https://hkss.huijiwiki.com/wiki/防御者纹章" },
                { key: "gotCharm_11", name: "吸虫之巢", wiki: "https://hkss.huijiwiki.com/wiki/吸虫之巢" },
                { key: "gotCharm_12", name: "苦痛荆棘", wiki: "https://hkss.huijiwiki.com/wiki/苦痛荆棘" },
                { key: "gotCharm_13", name: "骄傲印记", wiki: "https://hkss.huijiwiki.com/wiki/骄傲印记" },
                { key: "gotCharm_14", name: "稳定之体", wiki: "https://hkss.huijiwiki.com/wiki/稳定之体" },
                { key: "gotCharm_15", name: "沉重之击", wiki: "https://hkss.huijiwiki.com/wiki/沉重之击" },
                { key: "gotCharm_16", name: "锋利之影", wiki: "https://hkss.huijiwiki.com/wiki/锋利之影" },
                { key: "gotCharm_17", name: "蘑菇孢子", wiki: "https://hkss.huijiwiki.com/wiki/蘑菇孢子" },
                { key: "gotCharm_18", name: "修长之钉", wiki: "https://hkss.huijiwiki.com/wiki/修长之钉" },
                { key: "gotCharm_19", name: "萨满之石", wiki: "https://hkss.huijiwiki.com/wiki/萨满之石" },
                { key: "gotCharm_20", name: "灵魂捕手", wiki: "https://hkss.huijiwiki.com/wiki/灵魂捕手" },
                { key: "gotCharm_21", name: "噬魂者", wiki: "https://hkss.huijiwiki.com/wiki/噬魂者" },
                { key: "gotCharm_22", name: "发光子宫", wiki: "https://hkss.huijiwiki.com/wiki/发光子宫" },
                { key: "gotCharm_23", name: "易碎心脏", wiki: "https://hkss.huijiwiki.com/wiki/易碎心脏" },
                { key: "gotCharm_24", name: "易碎贪婪", wiki: "https://hkss.huijiwiki.com/wiki/易碎贪婪" },
                { key: "gotCharm_25", name: "易碎力量", wiki: "https://hkss.huijiwiki.com/wiki/易碎力量" },
                { key: "gotCharm_26", name: "骨钉大师的荣耀", wiki: "https://hkss.huijiwiki.com/wiki/骨钉大师的荣耀" },
                { key: "gotCharm_27", name: "乔尼的祝福", wiki: "https://hkss.huijiwiki.com/wiki/乔尼的祝福" },
                { key: "gotCharm_28", name: "乌恩之形", wiki: "https://hkss.huijiwiki.com/wiki/乌恩之形" },
                { key: "gotCharm_29", name: "蜂巢之血", wiki: "https://hkss.huijiwiki.com/wiki/蜂巢之血" },
                { key: "gotCharm_30", name: "舞梦者", wiki: "https://hkss.huijiwiki.com/wiki/舞梦者" },
                { key: "gotCharm_31", name: "冲刺大师", wiki: "https://hkss.huijiwiki.com/wiki/冲刺大师" },
                { key: "gotCharm_32", name: "快速劈砍", wiki: "https://hkss.huijiwiki.com/wiki/快速劈砍" },
                { key: "gotCharm_33", name: "法术扭曲者", wiki: "https://hkss.huijiwiki.com/wiki/法术扭曲者" },
                { key: "gotCharm_34", name: "深度聚集", wiki: "https://hkss.huijiwiki.com/wiki/深度聚集" },
                { key: "gotCharm_35", name: "蜕变挽歌", wiki: "https://hkss.huijiwiki.com/wiki/蜕变挽歌" },
                { key: "gotCharm_36", name: "国王之魂", wiki: "https://hkss.huijiwiki.com/wiki/国王之魂" },
                { key: "gotCharm_37", name: "飞毛腿", wiki: "https://hkss.huijiwiki.com/wiki/飞毛腿" },
                { key: "gotCharm_38", name: "梦之盾", wiki: "https://hkss.huijiwiki.com/wiki/梦之盾" },
                { key: "gotCharm_39", name: "编织者之歌", wiki: "https://hkss.huijiwiki.com/wiki/编织者之歌" },
                { key: "gotCharm_40", name: "格林之子", wiki: "https://hkss.huijiwiki.com/wiki/格林之子" }
            ]
        },
        {
            category: "梦之钉",
            unit: 1,
            items: [
                { key: "hasDreamNail", name: "获得梦之钉", wiki: "https://hkss.huijiwiki.com/wiki/梦之钉" },
                { key: "dreamNailUpgraded", name: "觉醒梦之钉", wiki: "https://hkss.huijiwiki.com/wiki/梦之钉" },
                { key: "mothDeparted", name: "聆听先知的遗言", wiki: "https://hkss.huijiwiki.com/wiki/先知" }
            ]
        },
        {
            category: "愚人竞技场",
            unit: 1,
            items: [
                { key: "colosseumBronzeCompleted", name: "勇士的试炼", wiki: "https://hkss.huijiwiki.com/wiki/愚人斗兽场#.E5.8B.87.E5.A3.AB.E7.9A.84.E8.AF.95.E7.82.BC" },
                { key: "colosseumSilverCompleted", name: "征服者的试炼", wiki: "https://hkss.huijiwiki.com/wiki/愚人斗兽场#.E5.BE.81.E6.9C.8D.E8.80.85.E7.9A.84.E8.AF.95.E7.82.BC" },
                { key: "colosseumGoldCompleted", name: "愚人的试炼", wiki: "https://hkss.huijiwiki.com/wiki/愚人斗兽场#.E6.84.9A.E4.BA.BA.E7.9A.84.E8.AF.95.E7.82.BC" }
            ]
        },
        {
            category: "格林剧团",
            mutualExclusive: ["killedNightmareGrimm", "destroyedNightmareLantern"],
            unit: 1,
            items: [
                { key: "killedGrimm", name: "击败格林团长", wiki: "https://hkss.huijiwiki.com/wiki/格林" },
                { key: "killedNightmareGrimm", name: "击败梦魇之王格林", wiki: "https://hkss.huijiwiki.com/wiki/梦魇之王" },
                { key: "destroyedNightmareLantern", name: "摧毁梦魇之灯", wiki: "https://hkss.huijiwiki.com/wiki/放逐" },
            ]
        },
        {
            category: "蜂巢",
            unit: 1,
            items: [
                { key: "killedHiveKnight", name: "击败蜂巢骑士", wiki: "https://hkss.huijiwiki.com/wiki/蜂巢骑士" }
            ]
        },
        {
            category: "神居",
            unit: 1,
            items: [
                { key: "hasGodfinder", name: "神明调谐器", wiki: "https://hkss.huijiwiki.com/wiki/神明调谐器" },
                { key: "bossDoorStateTier1.completed", name: "一门 | 大师万神殿", wiki: "https://hkss.huijiwiki.com/wiki/大师万神殿" },
                { key: "bossDoorStateTier2.completed", name: "二门 | 艺术家万神殿", wiki: "https://hkss.huijiwiki.com/wiki/艺术家万神殿" },
                { key: "bossDoorStateTier3.completed", name: "三门 | 贤者万神殿", wiki: "https://hkss.huijiwiki.com/wiki/贤者万神殿" },
                { key: "bossDoorStateTier4.completed", name: "四门 | 骑士万神殿", wiki: "https://hkss.huijiwiki.com/wiki/骑士万神殿" }
            ]
        }
    ],

    specialCheck(item, save) {
        if (item.name === '国王之魂') {
            return save.gotQueenFragment && save.gotKingFragment;
        }
        return null; // 使用默认逻辑
    }
};
