window.GAMES = window.GAMES || {};

window.GAMES.hollow = {
    id: 'hollow',
    title: 'Hollow Knight 112% 分析器',
    maxPercent: 112,

    modifiableItems: [
        {
            name: "吉欧 (Geo)",
            type: "number",
            getValue: (save) => save.geo || 0,
            setValue: (save, val) => save.geo = parseInt(val)
        },
        {
            name: "苍白矿石 (Pale Ore)",
            type: "number",
            getValue: (save) => save.ore || 0,
            setValue: (save, val) => save.ore = parseInt(val)
        },
        {
            name: "简单钥匙 (Simple Keys)",
            type: "number",
            getValue: (save) => save.simpleKeys || 0,
            setValue: (save, val) => save.simpleKeys = parseInt(val)
        },
        {
            name: "腐臭蛋 (Rancid Eggs)",
            type: "number",
            getValue: (save) => save.rancidEggs || 0,
            setValue: (save, val) => save.rancidEggs = parseInt(val)
        },
        {
            name: "剧团仪式",
            type: "boolean",
            trueText: "完成",
            falseText: "未完成",
            preventManualTrue: true,
            desc: "回退完成剧团仪式的操作<br>存档状态恢复至仪式未完成的状态<br><b>格林之子</b>也会降至等级3<br><span style='color: #e74c3c'>此操作不可逆，仅支持回退</span>",
            getValue: (save) => save.killedNightmareGrimm && save.grimmChildLevel == 4,
            setValue: (save, val) => {
                if (!val) {
                    save.killedNightmareGrimm = false;
                    save.grimmChildLevel = 3;
                    save.troupeInTown = true;
                    save.divineInTown = true;
                    save.flamesCollected = 0;
                    // Ensure Banishment flags are cleared just in case (though they shouldn't be set)
                    save.destroyedNightmareLantern = false;
                    save.nymmInTown = false;
                }
            }
        },
        {
            name: "放逐剧团",
            type: "boolean",
            trueText: "完成",
            falseText: "未完成",
            preventManualTrue: true,
            desc: "回退放逐剧团的操作<br>存档状态恢复至未放逐剧团的状态<br><b>无忧旋律</b>也会被恢复为<b>格林之子</b><br><span style='color: #e74c3c'>此操作不可逆，仅支持回退</span>",
            getValue: (save) => save.destroyedNightmareLantern && save.grimmChildLevel == 5,
            setValue: (save, val) => {
                if (!val) {
                    save.troupeInTown = true;
                    save.divineInTown = true;
                    save.gotBrummsFlame = false;
                    save.brummBrokeBrazier = false;
                    save.destroyedNightmareLantern = false;
                    save.grimmChildLevel = 3;
                    save.nymmInTown = false;
                    save.nymmSpoken = false;
                    save.flamesCollected = 0;
                }
            }
        }
    ],

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
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/2/26/Dung_Defender_2.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/粪虫防御者" 
                },
                { 
                    key: "hornet1Defeated", 
                    name: "守护者大黄蜂", 
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/4/4f/B_Hornet_2.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/%E5%AE%88%E6%8A%A4%E8%80%85%E5%A4%A7%E9%BB%84%E8%9C%82" 
                },
                { 
                    key: "hornetOutskirtsDefeated", 
                    name: "岗哨大黄蜂", 
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/4/4f/B_Hornet_2.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/%E5%B2%97%E5%93%A8%E5%A4%A7%E9%BB%84%E8%9C%82" 
                }
            ]
        },
        {
            category: "战士之梦",
            unit: 1,
            items: [
                { 
                    key: "killedGhostAladar", 
                    name: "戈布", 
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/b/be/Gorb_without_Essence.png", 
                    wiki: "https://hkss.huijiwiki.com/wiki/戈布" 
                },
                { 
                    key: "killedGhostXero", 
                    name: "泽若", 
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/a/a8/Xero_without_Essence.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/泽若" 
                },
                { 
                    key: "killedGhostHu", 
                    name: "胡长老", 
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/8/8f/Elder_Hu_Idle.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/胡长老" 
                },
                { 
                    key: "killedGhostMarmu", 
                    name: "马尔穆", 
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/8/84/Marmu_without_Essence.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/马尔穆" 
                },
                { 
                    key: "killedGhostNoEyes", 
                    name: "无眼", 
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/3/37/No_Eyes_Idle.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/无眼" 
                },
                { 
                    key: "killedGhostMarkoth", 
                    name: "马科斯", 
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/1/10/Markoth_without_Essence.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/马科斯" 
                },
                { 
                    key: "killedGhostGalien", 
                    name: "加利安", 
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/8/89/Galien_without_Essence.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/加利安" 
                }
            ]
        },
        {
            category: "守梦者",
            unit: 1,
            items: [
                { 
                    key: "lurienDefeated", 
                    name: "守望者卢瑞恩", 
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/5/5f/Lurien_Limbs.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/守望者卢瑞恩" 
                },
                { 
                    key: "monomonDefeated", 
                    name: "教师莫诺蒙", 
                    icon: "https://huiji-thumb.huijistatic.com/hkss/uploads/thumb/3/39/Monomon_Body.png/228px-Monomon_Body.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/教师莫诺蒙" 
                },
                { 
                    key: "hegemolDefeated", 
                    name: "野兽赫拉", 
                    icon: "https://huiji-thumb.huijistatic.com/hkss/uploads/thumb/b/bc/B_Herrah.png/137px-B_Herrah.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/野兽赫拉" 
                }
            ]
        },
        {
            category: "装备",
            unit: 2,
            items: [
                { 
                    key: "hasDash", 
                    name: "蛾翼披风", 
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/a/a2/Icon_HK_Mothwing_Cloak.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/蛾翼披风" 
                },
                { 
                    key: "hasShadowDash", 
                    name: "暗影披风", 
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/7/75/Icon_HK_Shade_Cloak.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/暗影披风" 
                },
                { 
                    key: "hasWalljump", 
                    name: "螳螂爪", 
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/b/bf/Icon_HK_Mantis_Claw.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/螳螂爪" 
                },
                { 
                    key: "hasSuperDash", 
                    name: "水晶之心", 
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/e/e8/Icon_HK_Crystal_Heart.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/水晶之心" 
                },
                { 
                    key: "hasAcidArmour", 
                    name: "伊思玛的眼泪", 
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/2/2e/Icon_HK_Ismas_Tear.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/伊思玛的眼泪" 
                },
                { 
                    key: "hasDoubleJump", 
                    name: "帝王之翼", 
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/9/9b/Icon_HK_Monarch_Wings.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/帝王之翼" 
                },
                { 
                    key: "hasKingsBrand", 
                    name: "王之印记", 
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/e/ec/Kings_Brand_Inventory.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/王之印记" 
                }
            ]
        },
        {
            category: "法术",
            unit: 1,
            key: "fireballLevel",
            max: 2,
            items: [
                { 
                    key: "fireballLevelWhite",
                    name: "复仇之魂 | 白波", 
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/a/ab/Icon_HK_Vengeful_Spirit.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/复仇之魂" 
                },
                { 
                    key: "fireballLevelBlack",
                    name: "暗影之魂 | 黑波", 
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/e/ef/Icon_HK_Shade_Soul.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/暗影之魂" 
                }
            ]
        },
        {
            category: "法术",
            unit: 1,
            key: "screamLevel",
            max: 2,
            items: [
                { 
                    key: "screamLevelWhite",
                    name: "嚎叫幽灵 | 白吼", 
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/1/16/Icon_HK_Howling_Wraiths.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/嚎叫幽灵" 
                },
                { 
                    key: "screamLevelBlack",
                    name: "深渊尖啸 | 黑吼", 
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/b/bf/Icon_HK_Abyss_Shriek.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/深渊尖啸" 
                }
            ]
        },
        {
            category: "法术",
            unit: 1,
            key: "quakeLevel",
            max: 2,
            items: [
                { 
                    key: "quakeLevelWhite",
                    name: "荒芜俯冲 | 白砸", 
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/c/c3/Icon_HK_Desolate_Dive.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/荒芜俯冲" 
                },
                { 
                    key: "quakeLevelBlack",
                    name: "黑暗降临 | 黑砸", 
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/a/a1/Icon_HK_Descending_Dark.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/黑暗降临" 
                }
            ]
        },
        {
            category: "面具",
            unit: 1,
            max: 4,
            key: "maxHealthBase",
            items: [
                { name: "+1", icon: "https://huiji-public.huijistatic.com/hkss/uploads/2/20/Ancient_Mask.png", wiki: "https://hkss.huijiwiki.com/wiki/面具碎片" },
                { name: "+2", icon: "https://huiji-public.huijistatic.com/hkss/uploads/2/20/Ancient_Mask.png", wiki: "https://hkss.huijiwiki.com/wiki/面具碎片" },
                { name: "+3", icon: "https://huiji-public.huijistatic.com/hkss/uploads/2/20/Ancient_Mask.png", wiki: "https://hkss.huijiwiki.com/wiki/面具碎片" },
                { name: "+4", icon: "https://huiji-public.huijistatic.com/hkss/uploads/2/20/Ancient_Mask.png", wiki: "https://hkss.huijiwiki.com/wiki/面具碎片" }
            ],
            transform(value) {
                return value - 5;
            },
        },
        {
            category: "面具碎片",
            unit: 0,
            items: [
                // === NPC ===
                { 
                    name: "斯莱商店", 
                    key: "slyShellFrag1",
                    desc: "花费150吉欧从德特茅斯斯莱的商店中购买，需要唤醒斯莱",
                    locationImage: "https://huiji-public.huijistatic.com/hkss/uploads/4/41/Mapshot_HK_Sly_02.png",
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/6/69/Mask_Shard.png",
                    unit: 0
                },
                { 
                    name: "斯莱商店", 
                    key: "slyShellFrag2",
                    desc: "花费500吉欧从德特茅斯斯莱的商店中购买，需要唤醒斯莱",
                    locationImage: "https://huiji-public.huijistatic.com/hkss/uploads/4/41/Mapshot_HK_Sly_02.png",
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/6/69/Mask_Shard.png",
                    unit: 0
                },
                { 
                    name: "斯莱商店", 
                    key: "slyShellFrag3",
                    desc: "花费800吉欧从德特茅斯斯莱的商店中购买，需要店主的钥匙",
                    locationImage: "https://huiji-public.huijistatic.com/hkss/uploads/4/41/Mapshot_HK_Sly_02.png",
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/6/69/Mask_Shard.png",
                    unit: 0
                },
                { 
                    name: "斯莱商店", 
                    key: "slyShellFrag4",
                    desc: "花费1500吉欧从德特茅斯斯莱的商店中购买，需要店主的钥匙",
                    locationImage: "https://huiji-public.huijistatic.com/hkss/uploads/4/41/Mapshot_HK_Sly_02.png",
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/6/69/Mask_Shard.png",
                    unit: 0
                },
                {
                    name: "先知给予", 
                    key: "",
                    desc: "由安息之地的先知给予，需要收集1500精华",
                    locationImage: "https://huiji-public.huijistatic.com/hkss/uploads/e/e3/Mapshot_HK_Vessel_Fragment_07.png",
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/6/69/Mask_Shard.png",
                    unit: 0
                },

                // === Scene Data ===
                { 
                    name: "毛里克巢穴", 
                    desc: "遗忘十字路左部，杀死躁郁的毛里克的奖励",
                    locationImage: "https://huiji-public.huijistatic.com/hkss/uploads/b/bc/Mapshot_HK_Mask_Shard_01.png",
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/6/69/Mask_Shard.png",
                    sceneCheck: { scene: "Crossroads_13", id: "Heart Piece", type: "bool" },
                    unit: 0
                },
                { 
                    name: "虫爷爷赠予", 
                    desc: "由虫爷爷赠予，需要营救5只幼虫",
                    locationImage: "https://huiji-public.huijistatic.com/hkss/uploads/4/4b/Mapshot_HK_Mask_Shard_02.png",
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/6/69/Mask_Shard.png",
                    sceneCheck: { scene: "Crossroads_38", id: "Heart Piece", type: "bool" },
                    unit: 0
                },
                { 
                    name: "遗忘十字路", 
                    desc: "遗忘十字路，假骑士下方有很多戈姆处，推荐先获取螳螂爪，或使用下劈",
                    locationImage: "https://huiji-public.huijistatic.com/hkss/uploads/d/db/Mapshot_HK_Mask_Shard_03.png",
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/6/69/Mask_Shard.png",
                    sceneCheck: { scene: "Crossroads_09", id: "Heart Piece", type: "bool" },
                    unit: 0
                },
                { 
                    name: "布蕾塔房间", 
                    desc: "德特茅斯布蕾塔的屋子里，需要在真菌荒地救出布蕾塔",
                    locationImage: "https://huiji-public.huijistatic.com/hkss/uploads/f/f1/Mapshot_HK_Mask_Shard_05.png",
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/6/69/Mask_Shard.png",
                    sceneCheck: { scene: "Room_Bretta", id: "Heart Piece", type: "bool" },
                    unit: 0
                },
                { 
                    name: "王后驿站", 
                    desc: "王后驿站右部，需要螳螂爪",
                    locationImage: "https://huiji-public.huijistatic.com/hkss/uploads/4/49/Mapshot_HK_Mask_Shard_04.png",
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/6/69/Mask_Shard.png",
                    sceneCheck: { scene: "Fungus2_01", id: "Heart Piece", type: "bool" },
                    unit: 0
                },
                { 
                    name: "石之庇护所", 
                    desc: "苍绿之径的石之庇护所，推荐先获取光蝇灯笼",
                    locationImage: "https://huiji-public.huijistatic.com/hkss/uploads/b/bb/Mapshot_HK_Mask_Shard_06.png",
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/6/69/Mask_Shard.png",
                    sceneCheck: { scene: "Fungus1_36", id: "Heart Piece", type: "bool" },
                    unit: 0
                },
                { 
                    name: "皇家下水道", 
                    desc: "皇家下水道左上部，游到左边的房间主道下",
                    locationImage: "https://huiji-public.huijistatic.com/hkss/uploads/c/ce/Mapshot_HK_Mask_Shard_07.png",
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/6/69/Mask_Shard.png",
                    sceneCheck: { scene: "Waterways_04b", id: "Heart Piece", type: "bool" },
                    unit: 0
                },
                { 
                    name: "水晶山峰", 
                    desc: "水晶山峰，击败暴怒守卫的奖励，需要帝王之翼",
                    locationImage: "https://huiji-public.huijistatic.com/hkss/uploads/9/9d/Mapshot_HK_Mask_Shard_09.png",
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/6/69/Mask_Shard.png",
                    sceneCheck: { scene: "Mines_32", id: "Heart Piece", type: "bool" },
                    unit: 0
                },
                { 
                    name: "深邃巢穴", 
                    desc: "通过真菌核心进入深邃巢穴，在螳螂领主附近，需要帝王之翼",
                    locationImage: "https://huiji-public.huijistatic.com/hkss/uploads/a/a3/Mapshot_HK_Mask_Shard_08.png",
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/6/69/Mask_Shard.png",
                    sceneCheck: { scene: "Fungus2_25", id: "Heart Piece", type: "bool" },
                    unit: 0
                },
                { 
                    name: "蜂巢", 
                    desc: "在蜂巢的一堵墙后，需要引蜂巢守卫撞碎墙壁",
                    locationImage: "https://huiji-public.huijistatic.com/hkss/uploads/a/a1/Mapshot_HK_Mask_Shard_10.png",
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/6/69/Mask_Shard.png",
                    sceneCheck: { scene: "Hive_04", id: "Heart Piece", type: "bool" },
                    unit: 0
                },
                { 
                    name: "送花任务", 
                    desc: "由安息之地的灰色哀悼者给予，需要完成送娇嫩的花的任务",
                    locationImage: "https://huiji-public.huijistatic.com/hkss/uploads/3/3b/Mapshot_HK_Mask_Shard_11.png",
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/6/69/Mask_Shard.png",
                    sceneCheck: { scene: "Room_Mansion", id: "Heart Piece", type: "bool" },
                    unit: 0
                },
            ]
        },
        {
            category: "容器",
            unit: 1,
            max: 3,
            key: "MPReserveMax",
            items: [
                { name: "+1", icon: "https://huiji-public.huijistatic.com/hkss/uploads/4/4c/Soul_Vessel.png", wiki: "https://hkss.huijiwiki.com/wiki/容器碎片" },
                { name: "+2", icon: "https://huiji-public.huijistatic.com/hkss/uploads/4/4c/Soul_Vessel.png", wiki: "https://hkss.huijiwiki.com/wiki/容器碎片" },
                { name: "+3", icon: "https://huiji-public.huijistatic.com/hkss/uploads/4/4c/Soul_Vessel.png", wiki: "https://hkss.huijiwiki.com/wiki/容器碎片" }
            ],
            transform(value) {
                return value / 33;
            },
        },
        {
            category: "容器碎片",
            unit: 0,
            items: [
                // === NPC ===
                { 
                    name: "斯莱商店", 
                    key: "slyVesselFrag1",
                    desc: "花费550吉欧从德特茅斯斯莱的商店中购买，需要唤醒斯莱",
                    locationImage: "https://huiji-public.huijistatic.com/hkss/uploads/4/41/Mapshot_HK_Sly_02.png",
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/2/29/Vessel_Fragment.png",
                    unit: 0
                },
                { 
                    name: "斯莱商店", 
                    key: "slyVesselFrag2",
                    desc: "花费900吉欧从德特茅斯斯莱的商店中购买，需要店主的钥匙",
                    locationImage: "https://huiji-public.huijistatic.com/hkss/uploads/4/41/Mapshot_HK_Sly_02.png",
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/2/29/Vessel_Fragment.png",
                    unit: 0
                },
                { 
                    name: "先知给予", 
                    key: "",
                    desc: "由安息之地的先知给予，需要收集700点梦境精华",
                    locationImage: "https://huiji-public.huijistatic.com/hkss/uploads/1/18/Mapshot_HK_Seer_01.png",
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/2/29/Vessel_Fragment.png",
                    unit: 0
                },
                { 
                    name: "鹿角虫巢穴", 
                    key: "vesselFragStagNest",
                    desc: "鹿角虫巢穴入口处，解锁所有鹿角虫站后前往",
                    locationImage: "https://huiji-thumb.huijistatic.com/hkss/uploads/thumb/0/0a/Mapshot_HK_Vessel_Fragment_05.png/225px-Mapshot_HK_Vessel_Fragment_05.png",
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/2/29/Vessel_Fragment.png",
                    unit: 0
                },
                // === 场景收集 ===
                { 
                    name: "苍绿之径", 
                    desc: "苍绿之径中，通往王后花园但无法从这侧打开的入口附近",
                    locationImage: "https://huiji-public.huijistatic.com/hkss/uploads/1/17/Mapshot_HK_Vessel_Fragment_01.png",
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/2/29/Vessel_Fragment.png",
                    sceneCheck: { scene: "Fungus1_13", id: "Vessel Fragment", type: "bool" },
                    unit: 0
                },
                { 
                    name: "遗忘十字路", 
                    desc: "遗忘十字路电梯左边，需要在泪水之城解锁电梯",
                    locationImage: "https://huiji-public.huijistatic.com/hkss/uploads/f/fb/Mapshot_HK_Vessel_Fragment_02.png",
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/2/29/Vessel_Fragment.png",
                    sceneCheck: { scene: "Crossroads_37", id: "Vessel Fragment", type: "bool" },
                    unit: 0
                },
                { 
                    name: "国王驿站", 
                    desc: "国王驿站上方的电梯旁，通过遭遇战后",
                    locationImage: "https://huiji-public.huijistatic.com/hkss/uploads/0/0f/Mapshot_HK_Vessel_Fragment_03.png",
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/2/29/Vessel_Fragment.png",
                    sceneCheck: { scene: "Ruins2_09", id: "Vessel Fragment", type: "bool" },
                    unit: 0
                },
                { 
                    name: "深邃巢穴", 
                    desc: "深邃巢穴可使用的电车上方",
                    locationImage: "https://huiji-public.huijistatic.com/hkss/uploads/5/58/Mapshot_HK_Vessel_Fragment_04.png",
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/2/29/Vessel_Fragment.png",
                    sceneCheck: { scene: "Deepnest_38", id: "Vessel Fragment", type: "bool" },
                    unit: 0
                },
                { 
                    name: "古老盆地", 
                    desc: "向古老盆地喷泉中投入3000吉欧获得",
                    locationImage: "https://huiji-public.huijistatic.com/hkss/uploads/4/4d/Mapshot_HK_Vessel_Fragment_06.png",
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/2/29/Vessel_Fragment.png",
                    sceneCheck: { scene: "Abyss_04", id: "Vessel Fragment", type: "bool" },
                    unit: 0
                },
            ]
        },
        {
            category: "骨钉升级",
            unit: 1,  // 每升级占 1%
            max: 4,
            key: "nailSmithUpgrades",
            items: [
                { 
                    name: "+1", 
                    icon: "https://huiji-thumb.huijistatic.com/hkss/uploads/thumb/0/0e/Nail_2_Sharpened_Nail.png/75px-Nail_2_Sharpened_Nail.png", 
                    wiki: "https://hkss.huijiwiki.com/wiki/骨钉" 
                },
                { 
                    name: "+2", 
                    icon: "https://huiji-thumb.huijistatic.com/hkss/uploads/thumb/2/29/Nail_3_Channelled_Nail.png/75px-Nail_3_Channelled_Nail.png", 
                    wiki: "https://hkss.huijiwiki.com/wiki/骨钉" 
                },
                { 
                    name: "+3", 
                    icon: "https://huiji-thumb.huijistatic.com/hkss/uploads/thumb/e/e4/Nail_4_Coiled_Nail.png/75px-Nail_4_Coiled_Nail.png", 
                    wiki: "https://hkss.huijiwiki.com/wiki/骨钉" 
                },
                { 
                    name: "+4", 
                    icon: "https://huiji-thumb.huijistatic.com/hkss/uploads/thumb/4/4a/Nail_5_Pure_Nail.png/75px-Nail_5_Pure_Nail.png", 
                    wiki: "https://hkss.huijiwiki.com/wiki/骨钉" 
                }   
            ]
        },
        {
            category: "骨钉技艺",
            unit: 1,
            items: [
                { 
                    key: "hasDashSlash", 
                    name: "强力劈砍", 
                    icon: "https://huiji-thumb.huijistatic.com/hkss/uploads/thumb/a/a7/Icon_HK_Great_Slash_Art.png/438px-Icon_HK_Great_Slash_Art.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/强力劈砍" 
                },
                { 
                    key: "hasCyclone", 
                    name: "旋风劈砍", 
                    icon: "https://huiji-thumb.huijistatic.com/hkss/uploads/thumb/f/f3/Icon_HK_Cyclone_Slash_Art.png/438px-Icon_HK_Cyclone_Slash_Art.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/旋风劈砍" 
                },
                { 
                    key: "hasUpwardSlash", 
                    name: "冲刺劈砍", 
                    icon: "https://huiji-thumb.huijistatic.com/hkss/uploads/thumb/3/3a/Icon_HK_Dash_Slash_Art.png/438px-Icon_HK_Dash_Slash_Art.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/冲刺劈砍" 
                }
            ]
        },
        {
            category: "护符",
            unit: 1,
            items: [
                { 
                    key: "gotCharm_1", name: "蜂群集结", 
                    icon: "https://cdn.wikimg.net/en/hkwiki/images/8/8a/Gathering_Swarm.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/蜂群集结" 
                },
                { 
                    key: "gotCharm_2", name: "任性的指南针", 
                    icon: "https://cdn.wikimg.net/en/hkwiki/images/7/7d/Wayward_Compass.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/任性的指南针" 
                },
                { 
                    key: "gotCharm_3", name: "幼虫之歌", 
                    icon: "https://cdn.wikimg.net/en/hkwiki/images/7/78/Grubsong.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/幼虫之歌" 
                },
                { 
                    key: "gotCharm_4", name: "坚硬外壳", 
                    icon: "https://cdn.wikimg.net/en/hkwiki/images/f/f2/Stalwart_Shell.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/坚硬外壳" 
                },
                { 
                    key: "gotCharm_5", name: "巴德尔之壳", 
                    icon: "https://cdn.wikimg.net/en/hkwiki/images/2/21/Baldur_Shell.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/巴德尔之壳" },
                { 
                    key: "gotCharm_6", name: "亡者之怒", 
                    icon: "https://cdn.wikimg.net/en/hkwiki/images/4/4f/Fury_of_the_Fallen.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/亡者之怒" },
                { 
                    key: "gotCharm_7", name: "快速聚集", 
                    icon: "https://cdn.wikimg.net/en/hkwiki/images/6/6a/Quick_Focus.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/快速聚集" },
                { 
                    key: "gotCharm_8", name: "生命血之心", 
                    icon: "https://cdn.wikimg.net/en/hkwiki/images/7/7c/Lifeblood_Heart.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/生命血之心" },
                { 
                    key: "gotCharm_9", name: "生命血核心", 
                    icon: "https://cdn.wikimg.net/en/hkwiki/images/8/81/Lifeblood_Core.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/生命血核心" },
                { 
                    key: "gotCharm_10", name: "防御者纹章", 
                    icon: "https://cdn.wikimg.net/en/hkwiki/images/5/56/Defender%27s_Crest.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/防御者纹章" },
                { 
                    key: "gotCharm_11", name: "吸虫之巢", 
                    icon: "https://cdn.wikimg.net/en/hkwiki/images/7/79/Flukenest.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/吸虫之巢" },
                { 
                    key: "gotCharm_12", name: "苦痛荆棘", 
                    icon: "https://cdn.wikimg.net/en/hkwiki/images/8/8f/Thorns_of_Agony.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/苦痛荆棘" },
                { 
                    key: "gotCharm_13", name: "骄傲印记", 
                    icon: "https://cdn.wikimg.net/en/hkwiki/images/6/69/Mark_of_Pride.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/骄傲印记" },
                { 
                    key: "gotCharm_14", name: "稳定之体", 
                    icon: "https://cdn.wikimg.net/en/hkwiki/images/f/f5/Steady_Body.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/稳定之体" },
                { 
                    key: "gotCharm_15", name: "沉重之击", 
                    icon: "https://cdn.wikimg.net/en/hkwiki/images/f/f6/Heavy_Blow.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/沉重之击" },
                { 
                    key: "gotCharm_16", name: "锋利之影", 
                    icon: "https://cdn.wikimg.net/en/hkwiki/images/1/13/Sharp_Shadow.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/锋利之影" },
                { 
                    key: "gotCharm_17", name: "蘑菇孢子", 
                    icon: "https://cdn.wikimg.net/en/hkwiki/images/7/78/Spore_Shroom.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/蘑菇孢子" },
                { 
                    key: "gotCharm_18", name: "修长之钉", 
                    icon: "https://cdn.wikimg.net/en/hkwiki/images/d/d1/Longnail.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/修长之钉" },
                { 
                    key: "gotCharm_19", name: "萨满之石", 
                    icon: "https://cdn.wikimg.net/en/hkwiki/images/5/5e/Shaman_Stone.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/萨满之石" },
                { 
                    key: "gotCharm_20", name: "灵魂捕手", 
                    icon: "https://cdn.wikimg.net/en/hkwiki/images/c/ca/Soul_Catcher.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/灵魂捕手" },
                { 
                    key: "gotCharm_21", name: "噬魂者", 
                    icon: "https://cdn.wikimg.net/en/hkwiki/images/6/6c/Soul_Eater.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/噬魂者" },
                { 
                    key: "gotCharm_22", name: "发光子宫", 
                    icon: "https://cdn.wikimg.net/en/hkwiki/images/c/c6/Glowing_Womb.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/发光子宫" },
                {
                    type: "group",
                    items: [
                        { 
                            name: "易碎心脏", 
                            customCheck: (save) => save.gotCharm_23,
                            icon: "https://cdn.wikimg.net/en/hkwiki/images/1/13/Fragile_Heart.png",
                            wiki: "https://hkss.huijiwiki.com/wiki/易碎心脏"
                        },
                        {
                            key: "fragileHealth_unbreakable", name: "坚固心脏",
                            icon: "https://cdn.wikimg.net/en/hkwiki/images/1/15/Unbreakable_Heart.png",
                            wiki: "https://hkss.huijiwiki.com/wiki/易碎心脏"
                        }
                    ]
                },
                {
                    type: "group",
                    items: [
                        { 
                            name: "易碎贪婪", 
                            customCheck: (save) => save.gotCharm_24,
                            icon: "https://cdn.wikimg.net/en/hkwiki/images/b/b6/Fragile_Greed.png",
                            wiki: "https://hkss.huijiwiki.com/wiki/易碎贪婪"
                        },
                        {
                            key: "fragileGreed_unbreakable", name: "坚固贪婪",
                            icon: "https://cdn.wikimg.net/en/hkwiki/images/2/2a/Unbreakable_Greed.png",
                            wiki: "https://hkss.huijiwiki.com/wiki/易碎贪婪"
                        }
                    ]
                },
                {
                    type: "group",
                    items: [
                        { 
                            name: "易碎力量", 
                            customCheck: (save) => save.gotCharm_25,
                            icon: "https://cdn.wikimg.net/en/hkwiki/images/7/7b/Fragile_Strength.png",
                            wiki: "https://hkss.huijiwiki.com/wiki/易碎力量"
                        },
                        {
                            key: "fragileStrength_unbreakable", name: "坚固力量",
                            icon: "https://cdn.wikimg.net/en/hkwiki/images/a/ac/Unbreakable_Strength.png",
                            wiki: "https://hkss.huijiwiki.com/wiki/易碎力量"
                        }
                    ]
                },
                { 
                    key: "gotCharm_26", name: "骨钉大师的荣耀", 
                    icon: "https://cdn.wikimg.net/en/hkwiki/images/0/0f/Nailmaster%27s_Glory.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/骨钉大师的荣耀" },
                { 
                    key: "gotCharm_27", name: "乔尼的祝福", 
                    icon: "https://cdn.wikimg.net/en/hkwiki/images/6/67/Joni%27s_Blessing.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/乔尼的祝福" },
                { 
                    key: "gotCharm_28", name: "乌恩之形", 
                    icon: "https://cdn.wikimg.net/en/hkwiki/images/b/b4/Shape_of_Unn.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/乌恩之形" },
                { 
                    key: "gotCharm_29", name: "蜂巢之血", 
                    icon: "https://cdn.wikimg.net/en/hkwiki/images/e/eb/Hiveblood.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/蜂巢之血" },
                { 
                    key: "gotCharm_30", name: "舞梦者", 
                    icon: "https://cdn.wikimg.net/en/hkwiki/images/9/94/Dream_Wielder.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/舞梦者" },
                { 
                    key: "gotCharm_31", name: "冲刺大师", 
                    icon: "https://cdn.wikimg.net/en/hkwiki/images/7/70/Dashmaster.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/冲刺大师" },
                { 
                    key: "gotCharm_32", name: "快速劈砍", 
                    icon: "https://cdn.wikimg.net/en/hkwiki/images/5/5f/Quick_Slash.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/快速劈砍" },
                { 
                    key: "gotCharm_33", name: "法术扭曲者", 
                    icon: "https://cdn.wikimg.net/en/hkwiki/images/3/33/Spell_Twister.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/法术扭曲者" },
                { 
                    key: "gotCharm_34", name: "深度聚集", 
                    icon: "https://cdn.wikimg.net/en/hkwiki/images/e/ea/Deep_Focus.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/深度聚集" },
                { 
                    key: "gotCharm_35", name: "蜕变挽歌", 
                    icon: "https://cdn.wikimg.net/en/hkwiki/images/b/bd/Grubberfly%27s_Elegy.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/蜕变挽歌" },
                {
                    type: "group",
                    items: [
                        { 
                            name: "国王之魂", 
                            customCheck: (save) => save.gotQueenFragment && save.gotKingFragment && !save.gotShadeCharm,
                            icon: "https://cdn.wikimg.net/en/hkwiki/images/3/34/Kingsoul.png",
                            wiki: "https://hkss.huijiwiki.com/wiki/国王之魂" },
                        {
                            key: "gotShadeCharm", name: "虚空之心",
                            icon: "https://cdn.wikimg.net/en/hkwiki/images/b/bb/Void_Heart.png",
                            wiki: "https://hkss.huijiwiki.com/wiki/虚空之心" }
                    ]
                },
                { 
                    key: "gotCharm_37", name: "飞毛腿", 
                    icon: "https://cdn.wikimg.net/en/hkwiki/images/e/e9/Sprintmaster.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/飞毛腿" },
                { 
                    key: "gotCharm_38", name: "梦之盾", 
                    icon: "https://cdn.wikimg.net/en/hkwiki/images/4/47/Dreamshield.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/梦之盾" },
                { 
                    key: "gotCharm_39", name: "编织者之歌", 
                    icon: "https://cdn.wikimg.net/en/hkwiki/images/2/26/Weaversong.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/编织者之歌" },
                {
                    type: "group",
                    items: [
                        { 
                            name: "格林之子", 
                            customCheck: (save) => save.grimmChildLevel != 5 && save.gotCharm_40,
                            icon: "https://cdn.wikimg.net/en/hkwiki/images/9/91/Grimmchild.png",
                            wiki: "https://hkss.huijiwiki.com/wiki/格林之子" 
                        },
                        {
                            name: "无忧旋律",
                            customCheck: (save) => save.grimmChildLevel === 5 && save.gotCharm_40,
                            icon: "https://cdn.wikimg.net/en/hkwiki/images/c/c4/Carefree_Melody.png",
                            wiki: "https://hkss.huijiwiki.com/wiki/无忧旋律"
                        }
                    ]
                }
            ]
        },
        {
            category: "梦之钉",
            unit: 1,
            items: [
                { 
                    key: "hasDreamNail", 
                    name: "获得梦之钉", 
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/a/a2/Icon_HK_Dream_Nail.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/梦之钉" 
                },
                { 
                    key: "dreamNailUpgraded", 
                    name: "觉醒梦之钉", 
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/b/b0/Icon_HK_Awoken_Dream_Nail.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/梦之钉" 
                },
                { 
                    key: "mothDeparted", 
                    name: "聆听先知的遗言", 
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/e/ee/Seer.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/先知" 
                }
            ]
        },
        {
            category: "愚人竞技场",
            unit: 1,
            items: [
                { 
                    key: "colosseumBronzeCompleted", 
                    name: "勇士的试炼", 
                    icon: "https://huiji-thumb.huijistatic.com/hkss/uploads/thumb/b/b0/Trial_of_the_Warrior.png/150px-Trial_of_the_Warrior.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/%E5%8B%87%E5%A3%AB%E7%9A%84%E8%AF%95%E7%82%BC" },
                { 
                    key: "colosseumSilverCompleted", 
                    name: "征服者的试炼", 
                    icon: "https://huiji-thumb.huijistatic.com/hkss/uploads/thumb/0/05/Trial_of_the_Conqueror.png/150px-Trial_of_the_Conqueror.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/%E5%BE%81%E6%9C%8D%E8%80%85%E7%9A%84%E8%AF%95%E7%82%BC" },
                { 
                    key: "colosseumGoldCompleted", 
                    name: "愚人的试炼", 
                    icon: "https://huiji-thumb.huijistatic.com/hkss/uploads/thumb/c/ca/Trial_of_the_Fool.png/150px-Trial_of_the_Fool.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/%E6%84%9A%E4%BA%BA%E7%9A%84%E8%AF%95%E7%82%BC" }
            ]
        },
        {
            category: "格林剧团",
            mutualExclusive: ["killedNightmareGrimm", "destroyedNightmareLantern"],
            unit: 1,
            items: [
                { 
                    key: "killedGrimm", 
                    name: "格林", 
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/b/ba/Grimm_Idle.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/格林" 
                },
                { 
                    key: "killedNightmareGrimm", 
                    name: "梦魇之王格林", 
                    icon: "https://huiji-thumb.huijistatic.com/hkss/uploads/thumb/9/95/Nightmare_King_without_Essence.png/276px-Nightmare_King_without_Essence.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/梦魇之王格林" 
                },
                { 
                    key: "destroyedNightmareLantern", 
                    name: "摧毁梦魇之灯", 
                    icon: "https://pic-1326566629.cos.ap-shanghai.myqcloud.com/wiki%5CThe_Lamp_of_Nightmares",
                    wiki: "https://hkss.huijiwiki.com/wiki/%E6%A0%BC%E6%9E%97%E5%89%A7%E5%9B%A2" 
                },
            ]
        },
        {
            category: "蜂巢",
            unit: 1,
            items: [
                { 
                    key: "killedHiveKnight", 
                    name: "蜂巢骑士", 
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/3/3b/B_Hive_Knight.png", 
                    wiki: "https://hkss.huijiwiki.com/wiki/蜂巢骑士" 
                }
            ]
        },
        {
            category: "神居",
            unit: 1,
            items: [
                { 
                    key: "hasGodfinder", 
                    name: "神明调谐器", 
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/9/92/Godtuner.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/神明调谐器" 
                },
                { 
                    key: "bossDoorStateTier1.completed", 
                    name: "大师万神殿", 
                    icon: "https://huiji-thumb.huijistatic.com/hkss/uploads/thumb/6/6b/Pantheon_of_the_Master.png/300px-Pantheon_of_the_Master.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/大师万神殿" 
                },
                { 
                    key: "bossDoorStateTier2.completed", 
                    name: "艺术家万神殿", 
                    icon: "https://huiji-thumb.huijistatic.com/hkss/uploads/thumb/1/1a/Pantheon_of_the_Artist.png/300px-Pantheon_of_the_Artist.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/艺术家万神殿" 
                },
                { 
                    key: "bossDoorStateTier3.completed", 
                    name: "贤者万神殿", 
                    icon: "https://huiji-thumb.huijistatic.com/hkss/uploads/thumb/a/ad/Pantheon_of_the_Sage.png/300px-Pantheon_of_the_Sage.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/贤者万神殿" 
                },
                { 
                    key: "bossDoorStateTier4.completed", 
                    name: "骑士万神殿", 
                    icon: "https://huiji-thumb.huijistatic.com/hkss/uploads/thumb/e/e4/Pantheon_of_the_Knight.png/300px-Pantheon_of_the_Knight.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/骑士万神殿" 
                }
            ]
        }
    ]
};
