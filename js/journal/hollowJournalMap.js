(function(window) {
    window.JOURNAL_MAPS = window.JOURNAL_MAPS || {};
    
    // Helper to generate Huiji Wiki URL
    const getWiki = (name) => name ? `https://hkss.huijiwiki.com/wiki/${name}` : "";
    
    // Helper to generate Huiji Icon URL (using a generic search or placeholder if specific URL unknown)
    // Ideally we would have exact URLs, but for now we'll use a placeholder or rely on the name matching a file.
    // Since we can't guess the exact hash in the URL (e.g. /b/bc/...), we might have to leave icon blank or use a default.
    // However, the renderer might handle missing icons gracefully.
    
    window.JOURNAL_MAPS.hollow = {
        entries: [
            // Crossroads
            { name: "小爬虫", killedKey: "killedCrawler", killsKey: "killsCrawler", wiki: getWiki("小爬虫"), icon: "https://huiji-public.huijistatic.com/hkss/uploads/5/5b/B_Crawlid.png" },
            { name: "复仇蝇", killedKey: "killedBuzzer", killsKey: "killsBuzzer", wiki: getWiki("复仇蝇"), icon: "https://huiji-public.huijistatic.com/hkss/uploads/f/fc/Vengefly_Idle.png" },
            { name: "提克提克", killedKey: "killedBouncer", killsKey: "killsBouncer", wiki: getWiki("提克提克"), icon: "https://huiji-public.huijistatic.com/hkss/uploads/9/91/B_Tiktik.png" },
            // { name: "攀爬者", killedKey: "killedClimber", killsKey: "killsClimber", wiki: getWiki("攀爬者"), icon: "" },
            { name: "蛆虫", killedKey: "killedWorm", killsKey: "killsWorm", wiki: getWiki("蛆虫"), icon: "https://huiji-public.huijistatic.com/hkss/uploads/5/53/B_Maggot.png" },
            { name: "阿斯皮德猎人", killedKey: "killedSpitter", killsKey: "killsSpitter", wiki: getWiki("阿斯皮德猎人"), icon: "https://huiji-public.huijistatic.com/hkss/uploads/0/0a/Aspid_Hunter_Idle.png" },
            { name: "阿斯皮德之母", killedKey: "killedHatcher", killsKey: "killsHatcher", wiki: getWiki("阿斯皮德之母"), icon: "https://huiji-public.huijistatic.com/hkss/uploads/c/ce/Aspid_Mother_Idle.png" },
            { name: "阿斯皮德幼体", killedKey: "killedHatchling", killsKey: "killsHatchling", wiki: getWiki("阿斯皮德幼体"), icon: "https://huiji-public.huijistatic.com/hkss/uploads/4/41/B_Aspid_Hatchling.png" },
            
            // Husks
            { name: "游荡躯壳", killedKey: "killedZombieRunner", killsKey: "killsZombieRunner", wiki: getWiki("游荡躯壳"), icon: "https://huiji-public.huijistatic.com/hkss/uploads/e/ec/B_Wandering_Husk.png" },
            { name: "有角躯壳", killedKey: "killedZombieHornhead", killsKey: "killsZombieHornhead", wiki: getWiki("有角躯壳"), icon: "https://huiji-public.huijistatic.com/hkss/uploads/c/cf/B_Husk_Hornhead.png" },
            { name: "跳跃躯壳", killedKey: "killedZombieLeaper", killsKey: "killsZombieLeaper", wiki: getWiki("跳跃躯壳"), icon: "https://huiji-public.huijistatic.com/hkss/uploads/4/4d/B_Leaping_Husk.png" },
            { name: "躯壳恶霸", killedKey: "killedZombieBarger", killsKey: "killsZombieBarger", wiki: getWiki("躯壳恶霸"), icon: "https://huiji-public.huijistatic.com/hkss/uploads/6/6a/B_Husk_Bully.png" },
            { name: "躯壳战士", killedKey: "killedZombieShield", killsKey: "killsZombieShield", wiki: getWiki("躯壳战士"), icon: "https://huiji-public.huijistatic.com/hkss/uploads/6/69/B_Husk_Warrior.png" },
            { name: "躯壳守卫", killedKey: "killedZombieGuard", killsKey: "killsZombieGuard", wiki: getWiki("躯壳守卫"), icon: "https://huiji-public.huijistatic.com/hkss/uploads/1/1b/B_Husk_Guard.png" },
            
            // Bosses / Minibosses
            { name: "复仇蝇之王", killedKey: "killedBigBuzzer", killsKey: "killsBigBuzzer", wiki: getWiki("复仇蝇之王"), icon: "https://huiji-public.huijistatic.com/hkss/uploads/4/41/B_Vengefly_King.png" },
            { name: "格鲁兹之母", killedKey: "killedBigFly", killsKey: "killsBigFly", wiki: getWiki("格鲁兹之母"), icon: "https://huiji-public.huijistatic.com/hkss/uploads/9/9f/B_Gruz_Mother.png" },
            { name: "躁郁的毛里克", killedKey: "killedMawlek", killsKey: "killsMawlek", wiki: getWiki("躁郁的毛里克"), icon: "https://huiji-public.huijistatic.com/hkss/uploads/0/02/B_Brooding_Mawlek_2.png" },
            { name: "假骑士", killedKey: "killedFalseKnight", killsKey: "killsFalseKnight", wiki: getWiki("假骑士"), icon: "https://huiji-public.huijistatic.com/hkss/uploads/9/98/B_False_Knight.png" },
            
            // Greenpath / Fungal
            { name: "巴德尔", killedKey: "killedRoller", killsKey: "killsRoller", wiki: getWiki("巴德尔"), icon: "https://huiji-public.huijistatic.com/hkss/uploads/4/4c/B_Baldur.png" },
            { name: "巴德尔长老", killedKey: "killedBlocker", killsKey: "killsBlocker", wiki: getWiki("巴德尔长老"), icon: "https://huiji-public.huijistatic.com/hkss/uploads/5/52/B_Elder_Baldur.png" },
            // { name: "", killedKey: "", killsKey: "", wiki: getWiki(""), icon: "" },

            { name: "斯奎特", killedKey: "killedMosquito", killsKey: "killsMosquito", wiki: getWiki("斯奎特"), icon: "https://huiji-public.huijistatic.com/hkss/uploads/0/05/B_Squit.png" },
            { name: "奥波", killedKey: "killedBlobFlyer", killsKey: "killsBlobFlyer", wiki: getWiki("奥波"), icon: "https://huiji-public.huijistatic.com/hkss/uploads/1/13/B_Obble.png" },
            // { name: "真菌躯壳", killedKey: "killedFungifiedZombie", killsKey: "killsFungifiedZombie", wiki: getWiki("真菌躯壳"), icon: "https://huiji-public.huijistatic.com/hkss/uploads/1/1a/B_Fungified_Husk.png" },
            { name: "古尔卡", killedKey: "killedPlantShooter", killsKey: "killsPlantShooter", wiki: getWiki("古尔卡"), icon: "https://huiji-public.huijistatic.com/hkss/uploads/4/4d/B_Gulka.png" },
            { name: "苔藓冲锋者", killedKey: "killedMossCharger", killsKey: "killsMossCharger", wiki: getWiki("苔藓冲锋者"), icon: "https://huiji-public.huijistatic.com/hkss/uploads/5/56/B_Moss_Charger.png" },
            { name: "大型苔藓冲锋者", killedKey: "killedMegaMossCharger", killsKey: "killsMegaMossCharger", wiki: getWiki("大型苔藓冲锋者"), icon: "https://huiji-thumb.huijistatic.com/hkss/uploads/thumb/6/63/B_Massive_Moss_Charger.png/438px-B_Massive_Moss_Charger.png" },
            { name: "捕蠢草", killedKey: "killedSnapperTrap", killsKey: "killsSnapperTrap", wiki: getWiki("捕蠢草"), icon: "https://huiji-public.huijistatic.com/hkss/uploads/c/ce/B_Fool_Eater.png" },
            { name: "苔藓骑士", killedKey: "killedMossKnight", killsKey: "killsMossKnight", wiki: getWiki("苔藓骑士"), icon: "https://huiji-public.huijistatic.com/hkss/uploads/1/19/B_Moss_Knight.png" },
            { name: "苔藓流浪者", killedKey: "killedMossKnightFat", killsKey: "killsMossKnightFat", wiki: getWiki("苔藓流浪者"), icon: "https://huiji-public.huijistatic.com/hkss/uploads/8/86/B_Mossy_Vagabond.png" },
            // { name: "", killedKey: "killedGrassHopper", killsKey: "killsGrassHopper", wiki: getWiki(""), icon: "" },
            { name: "杜兰达", killedKey: "killedAcidFlyer", killsKey: "killsAcidFlyer", wiki: getWiki("杜兰达"), icon: "https://huiji-public.huijistatic.com/hkss/uploads/9/95/B_Duranda.png" },
            { name: "杜兰多", killedKey: "killedAcidWalker", killsKey: "killsAcidWalker", wiki: getWiki("杜兰多"), icon: "https://huiji-public.huijistatic.com/hkss/uploads/6/68/B_Durandoo.png" },
            // { name: "", killedKey: "killedMossFlyer", killsKey: "killsMossFlyer", wiki: getWiki(""), icon: "" },
            // { name: "", killedKey: "killedMossWalker", killsKey: "killsMossWalker", wiki: getWiki(""), icon: "" },
            
            // Fog Canyon / Wastes
            { name: "肥波", killedKey: "killedLazyFlyer", killsKey: "killsLazyFlyer", wiki: getWiki("肥波"), icon: "https://huiji-public.huijistatic.com/hkss/uploads/1/13/B_Boofly.png" },
            // { name: "", killedKey: "killedZapBug", killsKey: "killsZapBug", wiki: getWiki(""), icon: "" },
            { name: "乌玛", killedKey: "killedJellyfish", killsKey: "killsJellyfish", wiki: getWiki("乌玛"), icon: "https://huiji-public.huijistatic.com/hkss/uploads/8/88/B_Uoma.png" },
            { name: "欧玛", killedKey: "killedJellyCrawler", killsKey: "killsJellyCrawler", wiki: getWiki("欧玛"), icon: "https://huiji-public.huijistatic.com/hkss/uploads/7/7e/B_Ooma.png" },
            { name: "乌姆", killedKey: "killedMegaJellyfish", killsKey: "killsMegaJellyfish", wiki: getWiki("乌姆"), icon: "https://huiji-public.huijistatic.com/hkss/uploads/4/49/B_Uumuu.png" },
            { name: "小真菌球", killedKey: "killedFungoonBaby", killsKey: "killsFungoonBaby", wiki: getWiki("小真菌球"), icon: "https://huiji-public.huijistatic.com/hkss/uploads/b/b9/B_Fungling.png" },
            // { name: "", killedKey: "killedFungusFlyer", killsKey: "killsFungusFlyer", wiki: getWiki(""), icon: "" },
            // { name: "真菌爬虫", killedKey: "killedFungCrawler", killsKey: "killsFungCrawler", wiki: getWiki("真菌爬虫"), icon: "" },
            { name: "小蘑菇", killedKey: "killedMushroomBaby", killsKey: "killsMushroomBaby", wiki: getWiki("小蘑菇"), icon: "https://huiji-public.huijistatic.com/hkss/uploads/9/9a/B_Shrumeling.png" },
            // { name: "", killedKey: "killedMushroomRoller", killsKey: "killsMushroomRoller", wiki: getWiki("蘑菇躯壳"), icon: "" },
            // { name: "蘑菇战士", killedKey: "killedMushroomBrawler", killsKey: "killsMushroomBrawler", wiki: getWiki("蘑菇战士"), icon: "https://huiji-public.huijistatic.com/hkss/uploads/c/ce/B_Shrumal_Warrior.png" },
            { name: "蘑菇巨怪", killedKey: "killedMushroomTurret", killsKey: "killsMushroomTurret", wiki: getWiki("蘑菇巨怪"), icon: "https://huiji-public.huijistatic.com/hkss/uploads/c/c8/B_Shrumal_Ogre.png" },

            { name: "螳螂青年", killedKey: "killedMantisFlyerChild", killsKey: "killsMantisFlyerChild", wiki: getWiki("螳螂青年"), icon: "https://huiji-public.huijistatic.com/hkss/uploads/6/6f/B_Mantis_Youth.png" },
            { name: "螳螂战士", killedKey: "killedMantis", killsKey: "killsMantis", wiki: getWiki("螳螂战士"), icon: "https://huiji-public.huijistatic.com/hkss/uploads/a/ae/B_Mantis_Warrior.png" },
            { name: "螳螂领主", killedKey: "killedMantisLord", killsKey: "killsMantisLord", wiki: getWiki("螳螂领主"), icon: "https://huiji-public.huijistatic.com/hkss/uploads/5/52/B_Mantis_Lords_2.png" },
            
            { name: "多刺躯壳", killedKey: "killedGardenZombie", killsKey: "killsGardenZombie", wiki: getWiki("多刺躯壳"), icon: "https://huiji-public.huijistatic.com/hkss/uploads/6/6c/B_Spiny_Husk.png" },
            { name: "螳螂叛徒", killedKey: "killedHeavyMantis", killsKey: "killsHeavyMantis", wiki: getWiki("螳螂叛徒"), icon: "https://huiji-public.huijistatic.com/hkss/uploads/b/b6/Mantis_Traitor_in_Game.png" },
            { name: "螳螂佩特拉", killedKey: "killedMantisHeavyFlyer", killsKey: "killsMantisHeavyFlyer", wiki: getWiki("螳螂佩特拉"), icon: "https://huiji-public.huijistatic.com/hkss/uploads/a/ae/B_Mantis_Petra.png" },
            { name: "叛徒领主", killedKey: "killedTraitorLord", killsKey: "killsTraitorLord", wiki: getWiki("叛徒领主"), icon: "https://huiji-public.huijistatic.com/hkss/uploads/2/2c/B_Traitor_Lord.png" },

            // City of Tears
            { name: "守望者骑士", killedKey: "killedBlackKnight", killsKey: "killsBlackKnight", wiki: getWiki("守望者骑士"), icon: "https://huiji-public.huijistatic.com/hkss/uploads/9/99/B_Watcher_Knight_2.png" },
            { name: "躯壳哨兵", killedKey: "killedSentry", killsKey: "killsSentry", wiki: getWiki("躯壳哨兵"), icon: "https://huiji-public.huijistatic.com/hkss/uploads/2/26/B_Husk_Sentry.png" },
            { name: "重型哨兵", killedKey: "killedSentryFat", killsKey: "killsSentryFat", wiki: getWiki("重型哨兵"), icon: "https://huiji-public.huijistatic.com/hkss/uploads/5/55/Heavy_Sentry_Idle.png" },
            { name: "有翼哨兵", killedKey: "killedFlyingSentrySword", killsKey: "killsFlyingSentrySword", wiki: getWiki("有翼哨兵"), icon: "https://huiji-public.huijistatic.com/hkss/uploads/7/7e/Winged_Sentry_Idle.png" },
            { name: "长矛哨兵", killedKey: "killedFlyingSentryJavelin", killsKey: "killsFlyingSentryJavelin", wiki: getWiki("长矛哨兵"), icon: "https://huiji-public.huijistatic.com/hkss/uploads/c/cf/Lance_Sentry_Idle.png" },
            { name: "大型躯壳哨兵", killedKey: "killedGreatShieldZombie", killsKey: "killsGreatShieldZombie", wiki: getWiki("巨型躯壳哨兵"), icon: "https://huiji-public.huijistatic.com/hkss/uploads/6/63/B_Great_Husk_Sentry.png" },
            { name: "躯壳公子", killedKey: "killedRoyalDandy", killsKey: "killsRoyalDandy", wiki: getWiki("躯壳公子"), icon: "https://huiji-public.huijistatic.com/hkss/uploads/1/1b/B_Husk_Dandy.png" },
            { name: "怯懦躯壳", killedKey: "killedRoyalCoward", killsKey: "killsRoyalCoward", wiki: getWiki("怯懦躯壳"), icon: "https://huiji-public.huijistatic.com/hkss/uploads/5/5b/B_Cowardly_Husk.png" },
            { name: "暴食躯壳", killedKey: "killedRoyalPlumper", killsKey: "killsRoyalPlumper", wiki: getWiki("暴食躯壳"), icon: "https://huiji-public.huijistatic.com/hkss/uploads/9/91/Gluttonous_Husk_Idle.png" },
            { name: "华丽躯壳", killedKey: "killedGorgeousHusk", killsKey: "killsGorgeousHusk", wiki: getWiki("华丽躯壳"), icon: "https://huiji-public.huijistatic.com/hkss/uploads/e/ec/Gorgeous_Husk_Idle.png" },
            { name: "收藏家", killedKey: "killedJarCollector", killsKey: "killsJarCollector", wiki: getWiki("收藏家"), icon: "https://huiji-public.huijistatic.com/hkss/uploads/d/db/The_Collector_Idle.png" },
            
            { name: "错误", killedKey: "killedMageBlob", killsKey: "killsMageBlob", wiki: getWiki("错误"), icon: "https://huiji-public.huijistatic.com/hkss/uploads/9/9d/B_Mistake.png" },
            { name: "愚蠢", killedKey: "killedMageBalloon", killsKey: "killsMageBalloon", wiki: getWiki("愚蠢"), icon: "https://huiji-public.huijistatic.com/hkss/uploads/2/25/B_Folly.png" },
            { name: "灵魂大师", killedKey: "killedMageLord", killsKey: "killsMageLord", wiki: getWiki("灵魂大师"), icon: "https://huiji-public.huijistatic.com/hkss/uploads/7/72/B_Soul_Master.png" },   
            { name: "灵魂扭曲者", killedKey: "killedMage", killsKey: "killsMage", wiki: getWiki("灵魂扭曲者"), icon: "https://huiji-public.huijistatic.com/hkss/uploads/2/23/Soul_Twister_Idle.png" },
            { name: "灵魂战士", killedKey: "killedMageKnight", killsKey: "killsMageKnight", wiki: getWiki("灵魂战士"), icon: "https://huiji-public.huijistatic.com/hkss/uploads/e/eb/Soul_Warrior_Idle.png" },
            
            { name: "臭蛋口袋", killedKey: "killedEggSac", killsKey: "killsEggSac", wiki: getWiki("臭蛋口袋"), icon: "https://huiji-public.huijistatic.com/hkss/uploads/6/69/B_Bluggsac.png" },
            { name: "呼噗", killedKey: "killedInflater", killsKey: "killsInflater", wiki: getWiki("呼噗"), icon: "https://huiji-public.huijistatic.com/hkss/uploads/5/59/B_Hwurmp.png" },
            { name: "翻身怪", killedKey: "killedFlipHopper", killsKey: "killsFlipHopper", wiki: getWiki("翻身怪"), icon: "https://huiji-public.huijistatic.com/hkss/uploads/b/b4/B_Pilflip.png" },
            { name: "吸虫怪", killedKey: "killedFlukeman", killsKey: "killsFlukeman", wiki: getWiki("吸虫怪"), icon: "https://huiji-public.huijistatic.com/hkss/uploads/f/f3/B_Flukemon.png" },
            { name: "吸虫幼雏", killedKey: "killedFlukefly", killsKey: "killsFlukefly", wiki: getWiki("吸虫幼雏"), icon: "https://huiji-public.huijistatic.com/hkss/uploads/9/92/B_Flukefey.png" },
            { name: "贪食吸虫", killedKey: "killedFatFluke", killsKey: "killsFatFluke", wiki: getWiki("贪食吸虫"), icon: "https://huiji-public.huijistatic.com/hkss/uploads/6/61/B_Flukemunga.png" },
            { name: "吸虫之母", killedKey: "killedFlukeMother", killsKey: "killsFlukeMother", wiki: getWiki("吸虫之母"), icon: "https://huiji-public.huijistatic.com/hkss/uploads/1/1b/B_Flukemarm.png" },
            { name: "粪虫防御者", killedKey: "killedDungDefender", killsKey: "killsDungDefender", wiki: getWiki("粪虫防御者"), icon: "https://huiji-public.huijistatic.com/hkss/uploads/2/26/Dung_Defender_2.png" },
            
            { name: "晶刺螨", killedKey: "killedCrystalCrawler", killsKey: "killsCrystalCrawler", wiki: getWiki("晶刺螨"), icon: "https://huiji-public.huijistatic.com/hkss/uploads/b/ba/B_Shardmite.png" },
            { name: "亮背虫", killedKey: "killedMinesCrawler", killsKey: "killsMinesCrawler", wiki: getWiki("亮背虫"), icon: "https://huiji-public.huijistatic.com/hkss/uploads/4/42/B_Glimback.png" },
            { name: "水晶猎手", killedKey: "killedCrystalFlyer", killsKey: "killsCrystalFlyer", wiki: getWiki("水晶猎手"), icon: "https://huiji-public.huijistatic.com/hkss/uploads/7/7b/B_Crystal_Hunter.png" },
            { name: "水晶爬虫", killedKey: "killedLaserBug", killsKey: "killsLaserBug", wiki: getWiki("水晶爬虫"), icon: "https://huiji-public.huijistatic.com/hkss/uploads/6/6e/B_Crystal_Crawler.png" },
            { name: "结晶躯壳", killedKey: "killedBeamMiner", killsKey: "killsBeamMiner", wiki: getWiki("结晶躯壳"), icon: "https://huiji-public.huijistatic.com/hkss/uploads/e/e0/Crystallised_Husk_Idle.png" },
            { name: "躯壳矿工", killedKey: "killedZombieMiner", killsKey: "killsZombieMiner", wiki: getWiki("躯壳矿工"), icon: "https://huiji-public.huijistatic.com/hkss/uploads/e/ec/B_Husk_Miner.png" },
            { name: "暴怒守卫", killedKey: "killedMegaBeamMiner", killsKey: "killsMegaBeamMiner", wiki: getWiki("暴怒守卫"), icon: "https://huiji-public.huijistatic.com/hkss/uploads/0/02/B_Crystal_Guardian.png" },
            
            { name: "愤怒复仇蝇", killedKey: "killedAngryBuzzer", killsKey: "killsAngryBuzzer", wiki: getWiki("愤怒复仇蝇"), icon: "https://huiji-public.huijistatic.com/hkss/uploads/4/4d/Furious_Vengefly_Idle.png" },
            // { name: "", killedKey: "killedBurstingBouncer", killsKey: "killsBurstingBouncer", wiki: getWiki(""), icon: "" },
            // { name: "", killedKey: "killedBurstingZombie", killsKey: "killsBurstingZombie", wiki: getWiki(""), icon: "" },
            { name: "流涎躯壳", killedKey: "killedSpittingZombie", killsKey: "killsSpittingZombie", wiki: getWiki("喷吐躯壳"), icon: "https://huiji-public.huijistatic.com/hkss/uploads/a/a6/Slobbering_Husk_Idle.png" },
            { name: "刻尘者", killedKey: "killedBabyCentipede", killsKey: "killsBabyCentipede", wiki: getWiki("刻尘者"), icon: "https://huiji-public.huijistatic.com/hkss/uploads/0/02/B_Dirtcarver.png" },
            { name: "刻尘孵化者", killedKey: "killedCentipedeHatcher", killsKey: "killsCentipedeHatcher", wiki: getWiki("刻尘孵化者"), icon: "https://huiji-public.huijistatic.com/hkss/uploads/5/5f/B_Carver_Hatcher.png" },
            { name: "加皮德", killedKey: "killedBigCentipede", killsKey: "killsBigCentipede", wiki: getWiki("加皮德"), icon: "https://huiji-thumb.huijistatic.com/hkss/uploads/thumb/e/e9/B_Garpede.png/167px-B_Garpede.png" },
            { name: "尸体爬虫", killedKey: "killedSpiderCorpse", killsKey: "killsSpiderCorpse", wiki: getWiki("尸体爬虫"), icon: "https://huiji-public.huijistatic.com/hkss/uploads/8/8c/B_Corpse_Creeper_2.png" },

            { name: "深巢幼蛛", killedKey: "killedMiniSpider", killsKey: "killsMiniSpider", wiki: getWiki("深巢幼蛛"), icon: "https://huiji-public.huijistatic.com/hkss/uploads/a/a5/B_Deepling.png" },
            { name: "深巢猎手", killedKey: "killedShootSpider", killsKey: "killsShootSpider", wiki: getWiki("深巢猎手"), icon: "https://huiji-public.huijistatic.com/hkss/uploads/1/18/B_Deephunter.png" },
            { name: "小型编织者", killedKey: "killedSpiderFlyer", killsKey: "killsSpiderFlyer", wiki: getWiki("小型编织者"), icon: "https://huiji-public.huijistatic.com/hkss/uploads/5/5b/B_Little_Weaver.png" },
            { name: "潜行信徒", killedKey: "killedSlashSpider", killsKey: "killsSlashSpider", wiki: getWiki("潜行信徒"), icon: "https://huiji-public.huijistatic.com/hkss/uploads/a/a5/Stalking_Devout_Idle.png" },
            { name: "诺斯克", killedKey: "killedMimicSpider", killsKey: "killsMimicSpider", wiki: getWiki("诺斯克"), icon: "https://huiji-public.huijistatic.com/hkss/uploads/e/e6/Nosk_Idle.png" },

            { name: "小蜜蜂", killedKey: "killedBeeHatchling", killsKey: "killsBeeHatchling", wiki: getWiki("小蜜蜂"), icon: "https://huiji-public.huijistatic.com/hkss/uploads/1/13/B_Hiveling.png" },
            { name: "蜂巢士兵", killedKey: "killedBeeStinger", killsKey: "killsBeeStinger", wiki: getWiki("蜂巢士兵"), icon: "https://huiji-public.huijistatic.com/hkss/uploads/6/6e/B_Hive_Soldier.png" },
            { name: "蜂巢守卫", killedKey: "killedBigBee", killsKey: "killsBigBee", wiki: getWiki("蜂巢守卫"), icon: "https://huiji-public.huijistatic.com/hkss/uploads/5/5b/Hive_Guardian_Idle.png" },
            { name: "蜂巢躯壳", killedKey: "killedZombieHive", killsKey: "killsZombieHive", wiki: getWiki("蜂巢躯壳"), icon: "https://huiji-public.huijistatic.com/hkss/uploads/e/e5/Husk_Hive_Idle.png" },
            { name: "蜂巢骑士", killedKey: "killedHiveKnight", killsKey: "killsHiveKnight", wiki: getWiki("蜂巢骑士"), icon: "https://huiji-public.huijistatic.com/hkss/uploads/3/3b/B_Hive_Knight.png" },

            // { name: "", killedKey: "killedBlowFly", killsKey: "killsBlowFly", wiki: getWiki(""), icon: "" },
            // { name: "落尾", killedKey: "killedCeilingDropper", killsKey: "killsCeilingDropper", wiki: getWiki("落尾"), icon: "" },
            { name: "跳虫", killedKey: "killedHopper", killsKey: "killsHopper", wiki: getWiki("跳虫"), icon: "https://huiji-public.huijistatic.com/hkss/uploads/1/12/Hopper_in_Game.png" },
            { name: "大跳虫", killedKey: "killedGiantHopper", killsKey: "killsGiantHopper", wiki: getWiki("大跳虫"), icon: "https://huiji-public.huijistatic.com/hkss/uploads/6/66/B_Great_Hopper.png" },

            { name: "幼虫模仿者", killedKey: "killedGrubMimic", killsKey: "killsGrubMimic", wiki: getWiki("幼虫模仿者"), icon: "https://huiji-public.huijistatic.com/hkss/uploads/5/54/B_Grub_Mimic.png" },
            { name: "小型毛里克", killedKey: "killedLesserMawlek", killsKey: "killsLesserMawlek", wiki: getWiki("小型毛里克"), icon: "https://huiji-public.huijistatic.com/hkss/uploads/9/90/B_Lesser_Mawlek.png" },
            { name: "毛鲁克", killedKey: "killedMawlekTurret", killsKey: "killsMawlekTurret", wiki: getWiki("毛鲁克"), icon: "https://huiji-public.huijistatic.com/hkss/uploads/0/02/B_Mawlek.png" },
            { name: "光籽", killedKey: "killedOrangeScuttler", killsKey: "killsOrangeScuttler", wiki: getWiki("光籽"), icon: "https://huiji-public.huijistatic.com/hkss/uploads/1/15/B_Lightseed.png" },
            { name: "生命籽", killedKey: "killedHealthScuttler", killsKey: "killsHealthScuttler", wiki: getWiki("生命籽"), icon: "https://huiji-public.huijistatic.com/hkss/uploads/1/14/B_Lifeseed.png" },
            { name: "面具鸟", killedKey: "killedPigeon", killsKey: "killsPigeon", wiki: getWiki("面具鸟"), icon: "https://huiji-public.huijistatic.com/hkss/uploads/2/2a/B_Maskfly.png" },
            
            
            { name: "暗影爬虫", killedKey: "killedAbyssCrawler", killsKey: "killsAbyssCrawler", wiki: getWiki("暗影爬虫"), icon: "https://huiji-public.huijistatic.com/hkss/uploads/b/bf/B_Shadow_Creeper.png" },
            { name: "原始阿斯皮德", killedKey: "killedSuperSpitter", killsKey: "killsSuperSpitter", wiki: getWiki("原始阿斯皮德"), icon: "https://huiji-public.huijistatic.com/hkss/uploads/a/a8/B_Primal_Aspid.png" },
            
            { name: "大黄蜂", killedKey: "killedHornet", killsKey: "killsHornet", wiki: getWiki("大黄蜂"), icon: "https://huiji-public.huijistatic.com/hkss/uploads/4/4f/B_Hornet_2.png" },
            { name: "翅膀傀儡", killedKey: "killedPalaceFly", killsKey: "killsPalaceFly", wiki: getWiki("翅膀傀儡"), icon: "https://huiji-public.huijistatic.com/hkss/uploads/c/c7/B_Wingmould.png" },
            { name: "国王傀儡", killedKey: "killedRoyalGuard", killsKey: "killsRoyalGuard", wiki: getWiki("国王傀儡"), icon: "https://huiji-public.huijistatic.com/hkss/uploads/5/50/B_Kingsmould.png" },
            { name: "皇室家臣", killedKey: "killedMummy", killsKey: "killsMummy", wiki: getWiki("皇室家臣"), icon: "https://huiji-public.huijistatic.com/hkss/uploads/8/87/B_Royal_Retainer.png" },
            { name: "感染气球", killedKey: "killedOrangeBalloon", killsKey: "killsOrangeBalloon", wiki: getWiki("感染气球"), icon: "https://huiji-public.huijistatic.com/hkss/uploads/f/fc/B_Infected_Balloon.png" },
            { name: "同胞", killedKey: "killedSibling", killsKey: "killsSibling", wiki: getWiki("同胞"), icon: "https://huiji-public.huijistatic.com/hkss/uploads/d/da/Sibling_3.png" },
            { name: "虚空卷须", killedKey: "killedAbyssTendril", killsKey: "killsAbyssTendril", wiki: getWiki("虚空卷须"), icon: "https://huiji-public.huijistatic.com/hkss/uploads/b/b3/B_Void_Tendrils.png" },
            { name: "残破容器", killedKey: "killedInfectedKnight", killsKey: "killsInfectedKnight", wiki: getWiki("残破容器"), icon: "https://huiji-public.huijistatic.com/hkss/uploads/5/57/Broken_Vessel_Idle.png" },

            { name: "奥波路波", killedKey: "killedOblobble", killsKey: "killsOblobble", wiki: getWiki("奥波路波"), icon: "https://huiji-public.huijistatic.com/hkss/uploads/0/09/B_Oblobble.png" },
            { name: "战斗奥波", killedKey: "killedBlobble", killsKey: "killsBlobble", wiki: getWiki("战斗奥波"), icon: "https://huiji-public.huijistatic.com/hkss/uploads/9/9a/B_Battle_Obble.png" },
            { name: "死亡鲁多", killedKey: "killedColMosquito", killsKey: "killsColMosquito", wiki: getWiki("死亡鲁多"), icon: "https://huiji-public.huijistatic.com/hkss/uploads/4/47/B_Death_Loodle.png" },
            { name: "尖刺巴德尔", killedKey: "killedColRoller", killsKey: "killsColRoller", wiki: getWiki("尖刺巴德尔"), icon: "https://huiji-public.huijistatic.com/hkss/uploads/5/5e/B_Sharp_Baldur.png" },
            { name: "有翼愚人", killedKey: "killedColFlyingSentry", killsKey: "killsColFlyingSentry", wiki: getWiki("有翼愚人"), icon: "https://huiji-public.huijistatic.com/hkss/uploads/a/ad/B_Winged_Fool.png" },
            { name: "强壮愚人", killedKey: "killedColMiner", killsKey: "killsColMiner", wiki: getWiki("强壮愚人"), icon: "https://huiji-public.huijistatic.com/hkss/uploads/2/2a/Sturdy_Fool_Idle.png" },
            { name: "重装愚人 ", killedKey: "killedColWorm", killsKey: "killsColWorm", wiki: getWiki("重装愚人 "), icon: "https://huiji-public.huijistatic.com/hkss/uploads/e/ed/Heavy_Fool_Idle.png" },
            { name: "带盾愚人", killedKey: "killedColShield", killsKey: "killsColShield", wiki: getWiki("带盾愚人"), icon: "https://huiji-public.huijistatic.com/hkss/uploads/4/40/Shielded_Fool_Idle.png" },
            { name: "装甲斯奎特", killedKey: "killedColHopper", killsKey: "killsColHopper", wiki: getWiki("装甲斯奎特"), icon: "https://huiji-public.huijistatic.com/hkss/uploads/2/2c/B_Armoured_Squit.png" },
            { name: "闪电扭曲者", killedKey: "killedElectricMage", killsKey: "killsElectricMage", wiki: getWiki("闪电扭曲者"), icon: "https://huiji-public.huijistatic.com/hkss/uploads/5/53/B_Volt_Twister.png" },
            { name: "神之驯服者", killedKey: "killedLobsterLancer", killsKey: "killsLobsterLancer", wiki: getWiki("神之驯服者"), icon: "https://huiji-thumb.huijistatic.com/hkss/uploads/thumb/d/d3/B_God_Tamer.png/438px-B_God_Tamer.png" },
            { name: "苍白潜伏者", killedKey: "killedWhiteRoyal", killsKey: "killsWhiteRoyal", wiki: getWiki("苍白潜伏者"), icon: "https://huiji-public.huijistatic.com/hkss/uploads/b/b7/Pale_Lurker_Idle.png" },

            { name: "戈布", killedKey: "killedGhostAladar", killsKey: "killsGhostAladar", wiki: getWiki("戈布"), icon: "https://huiji-public.huijistatic.com/hkss/uploads/b/be/Gorb_without_Essence.png" },
            { name: "泽若", killedKey: "killedGhostXero", killsKey: "killsGhostXero", wiki: getWiki("泽若"), icon: "https://huiji-public.huijistatic.com/hkss/uploads/a/a8/Xero_without_Essence.png" },
            { name: "胡长老", killedKey: "killedGhostHu", killsKey: "killsGhostHu", wiki: getWiki("胡长老"), icon: "https://huiji-public.huijistatic.com/hkss/uploads/8/8f/Elder_Hu_Idle.png" },
            { name: "马尔穆", killedKey: "killedGhostMarmu", killsKey: "killsGhostMarmu", wiki: getWiki("马尔穆"), icon: "https://huiji-public.huijistatic.com/hkss/uploads/8/84/Marmu_without_Essence.png" },
            { name: "无眼", killedKey: "killedGhostNoEyes", killsKey: "killsGhostNoEyes", wiki: getWiki("无眼"), icon: "https://huiji-public.huijistatic.com/hkss/uploads/3/37/No_Eyes_Idle.png" },
            { name: "马科斯", killedKey: "killedGhostMarkoth", killsKey: "killsGhostMarkoth", wiki: getWiki("马科斯"), icon: "https://huiji-public.huijistatic.com/hkss/uploads/1/10/Markoth_without_Essence.png" },
            { name: "加利安", killedKey: "killedGhostGalien", killsKey: "killsGhostGalien", wiki: getWiki("加利安"), icon: "https://huiji-public.huijistatic.com/hkss/uploads/8/89/Galien_without_Essence.png" },
            
            // { name: "", killedKey: "killedFatFluke", killsKey: "killsFatFluke", wiki: getWiki(""), icon: "" },
            // { name: "", killedKey: "killedPaleLurker", killsKey: "killsPaleLurker", wiki: getWiki(""), icon: "" },
        ]
    };
})(window);
