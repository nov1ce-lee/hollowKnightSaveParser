window.GAMES = window.GAMES || {};

window.GAMES.silksong = {
    id: 'silksong',
    title: 'Silksong 100% 分析器',
    maxPercent: 100,

    // Modifiable Items Configuration
    modifiableItems: [
        {
            name: "念珠",
            type: "number",
            getValue: (save) => save.geo || 0,
            setValue: (save, val) => save.geo = parseInt(val)
        },
        {
            name: "甲壳碎片",
            type: "number",
            getValue: (save) => save.ShellShards || 0,
            setValue: (save, val) => save.ShellShards = parseInt(val)
        },
        {
            name: "壳囊",
            type: "boolean",
            trueText: "已获取",
            falseText: "未获取",
            desc: "在非钢魂模式下<br>获取<b>钢魂模式下</b>特有的<b>壳囊</b><br>会在背包中额外多出壳囊",
            getValue: (save) => save.Tools?.savedData?.find(t => t.Name === "Shell Satchel")?.Data?.IsUnlocked,
            setValue: (save, val) => {
                const toolName = "Shell Satchel";
                if (!save.Tools?.savedData) return;
                
                let item = save.Tools.savedData.find(t => t.Name === toolName);
                if (val) {
                    if (!item) {
                        save.Tools.savedData.push({
                            "Name": toolName,
                            "Data": {
                                "IsUnlocked": true,
                                "IsHidden": false,
                                "HasBeenSeen": true,
                                "HasBeenSelected": false,
                                "AmountLeft": 0
                            }
                        });
                    } else {
                        if (!item.Data) item.Data = {};
                        item.Data.IsUnlocked = true;
                    }
                } else {
                    if (item && item.Data) item.Data.IsUnlocked = false;
                }
            }
        },
        {
            name: "丝弹 (雪山版)",
            type: "boolean",
            trueText: "已获取",
            falseText: "未获取",
            desc: "可额外获取<b>雪山</b>自己修复的丝弹",
            getValue: (save) => save.Tools?.savedData?.find(t => t.Name === "WebShot Weaver")?.Data?.IsUnlocked,
            setValue: (save, val) => {
                const toolName = "WebShot Weaver";
                if (!save.Tools?.savedData) return;
                
                let item = save.Tools.savedData.find(t => t.Name === toolName);
                if (val) {
                    if (!item) {
                        save.Tools.savedData.push({
                            "Name": toolName,
                            "Data": {
                                "IsUnlocked": true,
                                "IsHidden": false,
                                "HasBeenSeen": true,
                                "HasBeenSelected": false,
                                "AmountLeft": 0
                            }
                        });
                    } else {
                        if (!item.Data) item.Data = {};
                        item.Data.IsUnlocked = true;
                    }
                } else {
                    if (item && item.Data) item.Data.IsUnlocked = false;
                }
            }
        },
        {
            name: "丝弹 (建筑师版)",
            type: "boolean",
            trueText: "已获取",
            falseText: "未获取",
            desc: "可额外获取<b>建筑师</b>改装的丝弹",
            getValue: (save) => save.Tools?.savedData?.find(t => t.Name === "WebShot Architect")?.Data?.IsUnlocked,
            setValue: (save, val) => {
                const toolName = "WebShot Architect";
                if (!save.Tools?.savedData) return;
                
                let item = save.Tools.savedData.find(t => t.Name === toolName);
                if (val) {
                    if (!item) {
                        save.Tools.savedData.push({
                            "Name": toolName,
                            "Data": {
                                "IsUnlocked": true,
                                "IsHidden": false,
                                "HasBeenSeen": true,
                                "HasBeenSelected": false,
                                "AmountLeft": 0
                            }
                        });
                    } else {
                        if (!item.Data) item.Data = {};
                        item.Data.IsUnlocked = true;
                    }
                } else {
                    if (item && item.Data) item.Data.IsUnlocked = false;
                }
            }
        },
        {
            name: "丝弹 (熔炉之女版)",
            type: "boolean",
            trueText: "已获取",
            falseText: "未获取",
            desc: "可额外获取<b>熔炉之女</b>改装的丝弹",
            getValue: (save) => save.Tools?.savedData?.find(t => t.Name === "WebShot Forge")?.Data?.IsUnlocked,
            setValue: (save, val) => {
                const toolName = "WebShot Forge";
                if (!save.Tools?.savedData) return;
                
                let item = save.Tools.savedData.find(t => t.Name === toolName);
                if (val) {
                    if (!item) {
                        save.Tools.savedData.push({
                            "Name": toolName,
                            "Data": {
                                "IsUnlocked": true,
                                "IsHidden": false,
                                "HasBeenSeen": true,
                                "HasBeenSelected": false,
                                "AmountLeft": 0
                            }
                        });
                    } else {
                        if (!item.Data) item.Data = {};
                        item.Data.IsUnlocked = true;
                    }
                } else {
                    if (item && item.Data) item.Data.IsUnlocked = false;
                }
            }
        }
    ],

    completionMap: [
        {
            category: "黄色工具",
            unit: 1,
            items: [
                { 
                    name: "罗盘", 
                    checkTools: (toolsMap) => toolsMap["Compass"]?.IsUnlocked, 
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/9/92/Compass.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/罗盘"
                },
                { 
                    name: "碎壳坠", 
                    checkTools: (toolsMap) => toolsMap["Bone Necklace"]?.IsUnlocked, 
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/f/f2/Shard_Pendant.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/碎壳坠" 
                },
                { 
                    name: "磁石胸针", 
                    checkTools: (toolsMap) => toolsMap["Rosary Magnet"]?.IsUnlocked, 
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/2/22/Magnetite_Brooch.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/磁石胸针" 
                },
                { 
                    name: "负重环带", 
                    checkTools: (toolsMap) => toolsMap["Weighted Anklet"]?.IsUnlocked, 
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/e/ee/Weighted_Belt.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/负重环带" 
                },
                { 
                    name: "棘刺手环", 
                    checkTools: (toolsMap) => toolsMap["Barbed Wire"]?.IsUnlocked, 
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/5/5e/Barbed_Bracelet.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/棘刺手环" 
                },
                { 
                    type: "group",
                    items: [
                        {
                            name: "亡虫囊", 
                            checkTools: (toolsMap) => toolsMap["Dead Mans Purse"]?.IsUnlocked, 
                            icon: "https://huiji-public.huijistatic.com/hkss/uploads/f/fc/Dead_Bug%27s_Purse.png",
                            wiki: "https://hkss.huijiwiki.com/wiki/亡虫囊" 
                        },
                        {
                            name: "壳囊",
                            checkTools: (toolsMap) => toolsMap["Shell Satchel"]?.IsUnlocked,
                            icon: "https://huiji-public.huijistatic.com/hkss/uploads/a/ad/Shell_Satchel.png",
                            wiki: "https://hkss.huijiwiki.com/wiki/壳囊"
                        }
                    ]
                },
                { 
                    name: "磁石骰", 
                    checkTools: (toolsMap) => toolsMap["Magnetite Dice"]?.IsUnlocked, 
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/3/3a/Magnetite_Dice.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/磁石骰" 
                },
                { 
                    name: "迅捷脊锁", 
                    checkTools: (toolsMap) => toolsMap["Scuttlebrace"]?.IsUnlocked, 
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/0/05/Scuttlebrace.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/迅捷脊锁" 
                },
                { 
                    name: "登极握爪", 
                    checkTools: (toolsMap) => toolsMap["Wallcling"]?.IsUnlocked, 
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/f/fe/Ascendants_Grip.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/登极握爪" 
                },
                { 
                    name: "蛛丝弦", 
                    checkTools: (toolsMap) => toolsMap["Musician Charm"]?.IsUnlocked, 
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/b/bf/Spider_Strings.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/蛛丝弦" 
                },
                { 
                    name: "丝速脚环", 
                    checkTools: (toolsMap) => toolsMap["Sprintmaster"]?.IsUnlocked, 
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/b/b3/Silkspeed_Anklets.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/丝速脚环" 
                },
                { 
                    name: "窃者印记", 
                    checkTools: (toolsMap) => toolsMap["Thief Charm"]?.IsUnlocked, 
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/8/80/Thiefs_Mark.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/窃者印记" 
                },
            ]
        },
        {
            category: "红色工具",
            unit: 1,
            items: [
                { 
                    name: "直针", 
                    checkTools: (toolsMap) => toolsMap["Straight Pin"]?.IsUnlocked, 
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/0/03/Straight_Pin.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/直针" 
                },
                { 
                    name: "三重镖", 
                    checkTools: (toolsMap) => toolsMap["Tri Pin"]?.IsUnlocked, 
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/a/a6/Tri-Pins.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/三重镖" 
                },
                { 
                    name: "蛰刺碎片", 
                    checkTools: (toolsMap) => toolsMap["Sting Shard"]?.IsUnlocked, 
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/6/69/Sting_Shard.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/蛰刺碎片" 
                },
                { 
                    name: "钉刺", 
                    checkTools: (toolsMap) => toolsMap["Tack"]?.IsUnlocked, 
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/e/ef/Tacks.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/钉刺" 
                },
                { 
                    name: "长针", 
                    checkTools: (toolsMap) => toolsMap["Longneedle"]?.IsUnlocked, 
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/c/cb/Longpin.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/长针" 
                },
                { 
                    type: "group",
                    items: [
                        {
                            name: "弧爪", 
                            checkTools: (toolsMap) => toolsMap["Curve Claws"]?.IsUnlocked, 
                            icon: "https://huiji-public.huijistatic.com/hkss/uploads/2/20/Curveclaw.png",
                            wiki: "https://hkss.huijiwiki.com/wiki/弧爪" 
                        },
                        {
                            name: "曲镰",
                            checkTools: (toolsMap) => toolsMap["Curve Claws Upgraded"]?.IsUnlocked,
                            icon: "https://huiji-public.huijistatic.com/hkss/uploads/6/60/Curvesickle.png",
                            wiki: "https://hkss.huijiwiki.com/wiki/曲镰"
                        }
                    ]
                },
                { 
                    name: "投掷环", 
                    checkTools: (toolsMap) => toolsMap["Shakra Ring"]?.IsUnlocked, 
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/2/2b/Throwing_Ring.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/投掷环" 
                },
                { 
                    name: "爆燃囊", 
                    checkTools: (toolsMap) => toolsMap["Pimpilo"]?.IsUnlocked, 
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/b/b0/Pimpillo.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/爆燃囊" 
                },
                { 
                    name: "螺切刃", 
                    checkTools: (toolsMap) => toolsMap["Conch Drill"]?.IsUnlocked, 
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/0/0f/Conchcutter.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/螺切刃" 
                },
                {
                    type: "group",
                    items: [
                        {
                            name: "丝弹", 
                            checkTools: (toolsMap) => toolsMap["WebShot Weaver"]?.IsUnlocked, 
                            icon: "https://huiji-thumb.huijistatic.com/hkss/uploads/thumb/b/b3/Silkshot.png/72px-Silkshot.png",
                            wiki: "https://hkss.huijiwiki.com/wiki/丝弹" 
                        },
                        {
                            name: "丝弹", 
                            checkTools: (toolsMap) => toolsMap["WebShot Architect"]?.IsUnlocked, 
                            icon: "https://huiji-thumb.huijistatic.com/hkss/uploads/thumb/3/32/Silkshot%28Twelfth_Architect%29.png/72px-Silkshot%28Twelfth_Architect%29.png",
                            wiki: "https://hkss.huijiwiki.com/wiki/丝弹" 
                        },
                        {
                            name: "丝弹", 
                            checkTools: (toolsMap) => toolsMap["WebShot Forge"]?.IsUnlocked, 
                            icon: "https://huiji-thumb.huijistatic.com/hkss/uploads/thumb/b/b9/Silkshot%28Forge_Daughter%29.png/72px-Silkshot%28Forge_Daughter%29.png",
                            wiki: "https://hkss.huijiwiki.com/wiki/丝弹" 
                        }
                    ]
                },
                { 
                    name: "掘洞钻", 
                    checkTools: (toolsMap) => toolsMap["Screw Attack"]?.IsUnlocked, 
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/8/85/Delver%27s_Drill.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/掘洞钻" 
                },
                { 
                    name: "机轮刃", 
                    checkTools: (toolsMap) => toolsMap["Cogwork Saw"]?.IsUnlocked, 
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/8/8e/Cogwork_Wheel.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/机轮刃" 
                },
                { 
                    name: "齿轮蜂", 
                    checkTools: (toolsMap) => toolsMap["Cogwork Flier"]?.IsUnlocked, 
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/b/ba/Cogfly.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/齿轮蜂" 
                },
                { 
                    name: "念珠炮", 
                    checkTools: (toolsMap) => toolsMap["Rosary Cannon"]?.IsUnlocked, 
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/2/25/Rosary_Cannon_Loaded.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/念珠炮" 
                },
                { 
                    name: "电枢球", 
                    checkTools: (toolsMap) => toolsMap["Lightning Rod"]?.IsUnlocked, 
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/7/75/Voltvessels.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/电枢球" 
                },
                { 
                    name: "燧石板", 
                    checkTools: (toolsMap) => toolsMap["Flintstone"]?.IsUnlocked, 
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/3/37/Flintslate.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/燧石板" 
                },
                { 
                    name: "跳蚤秘酿", 
                    checkTools: (toolsMap) => toolsMap["Flea Brew"]?.IsUnlocked, 
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/d/d0/Flea_Brew.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/跳蚤秘酿" 
                },
                { 
                    name: "生质液瓶", 
                    checkTools: (toolsMap) => toolsMap["Lifeblood Syringe"]?.IsUnlocked, 
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/8/82/Plasmium_Phial.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/生质液瓶" 
                },
            ]
        },
        {
            category: "蓝色工具",
            unit: 1,
            items: [
                { 
                    type: "group",
                    items: [
                        {
                            name: "德鲁伊之眼", 
                            checkTools: (toolsMap) => toolsMap["Mosscreep Tool 1"]?.IsUnlocked, 
                            icon: "https://huiji-public.huijistatic.com/hkss/uploads/1/13/Druid%27s_Eye.png",
                            wiki: "https://hkss.huijiwiki.com/wiki/德鲁伊之眼" 
                        },
                        {
                            name: "德鲁伊双瞳",
                            checkTools: (toolsMap) => toolsMap["Mosscreep Tool 2"]?.IsUnlocked,
                            icon: "https://huiji-public.huijistatic.com/hkss/uploads/c/c2/Druid%27s_Eyes.png",
                            wiki: "https://hkss.huijiwiki.com/wiki/德鲁伊双瞳"
                        }
                    ]
                },
                { 
                    name: "熔岩钟", 
                    checkTools: (toolsMap) => toolsMap["Lava Charm"]?.IsUnlocked, 
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/7/72/Magma_Bell.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/熔岩钟" 
                },
                { 
                    name: "护佑钟", 
                    checkTools: (toolsMap) => toolsMap["Bell Bind"]?.IsUnlocked, 
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/8/8c/Warding_Bell.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/护佑钟" 
                },
                { 
                    name: "花芯囊", 
                    checkTools: (toolsMap) => toolsMap["Poison Pouch"]?.IsUnlocked, 
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/8/82/Pollip_Pouch.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/花芯囊" 
                },
                { 
                    name: "碎面甲", 
                    checkTools: (toolsMap) => toolsMap["Fractured Mask"]?.IsUnlocked, 
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/5/51/Fractured_Mask.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/碎面甲" 
                },
                { 
                    name: "多重缚丝器", 
                    checkTools: (toolsMap) => toolsMap["Multibind"]?.IsUnlocked, 
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/1/19/Multibinder.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/多重缚丝器" 
                },
                { 
                    name: "织光仪", 
                    checkTools: (toolsMap) => toolsMap["White Ring"]?.IsUnlocked, 
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/5/5f/Weavelight.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/织光仪" 
                },
                { 
                    name: "锯齿环", 
                    checkTools: (toolsMap) => toolsMap["Brolly Spike"]?.IsUnlocked, 
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/4/45/Sawtooth_Circlet.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/锯齿环" 
                },
                { 
                    name: "注丝套针", 
                    checkTools: (toolsMap) => toolsMap["Quickbind"]?.IsUnlocked, 
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/d/dd/Injector_Band.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/注丝套针" 
                },
                { 
                    name: "储丝延展器", 
                    checkTools: (toolsMap) => toolsMap["Spool Extender"]?.IsUnlocked, 
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/1/17/Spool_Extender.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/储丝延展器" 
                },
                { 
                    name: "储备缚丝", 
                    checkTools: (toolsMap) => toolsMap["Reserve Bind"]?.IsUnlocked, 
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/1/13/Reserve_Bind.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/储备缚丝" 
                },
                { 
                    type: "group",
                    items: [
                        {
                            name: "爪镜", 
                            checkTools: (toolsMap) => toolsMap["Dazzle Bind"]?.IsUnlocked, 
                            icon: "https://huiji-public.huijistatic.com/hkss/uploads/f/fe/Claw_Mirror.png",
                            wiki: "https://hkss.huijiwiki.com/wiki/爪镜" 
                        },
                        {
                            name: "双生爪镜",
                            checkTools: (toolsMap) => toolsMap["Dazzle Bind Upgraded"]?.IsUnlocked,
                            icon: "https://huiji-public.huijistatic.com/hkss/uploads/7/75/Claw_Mirrors.png",
                            wiki: "https://hkss.huijiwiki.com/wiki/双生爪镜"
                        }
                    ]
                },
                { 
                    name: "记忆晶石", 
                    checkTools: (toolsMap) => toolsMap["Revenge Crystal"]?.IsUnlocked, 
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/6/6b/Memory_Crystal.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/记忆晶石" 
                },
                { 
                    name: "撬赃钩", 
                    checkTools: (toolsMap) => toolsMap["Thief Claw"]?.IsUnlocked, 
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/e/eb/Snitch_Pick.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/撬赃钩" 
                },
                { 
                    name: "伏特丝", 
                    checkTools: (toolsMap) => toolsMap["Zap Imbuement"]?.IsUnlocked, 
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/c/c4/Volt_Filament.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/伏特丝" 
                },
                { 
                    name: "速射索", 
                    checkTools: (toolsMap) => toolsMap["Quick Sling"]?.IsUnlocked, 
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/4/4a/Quick_Sling.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/速射索" 
                },
                { 
                    name: "净界花环", 
                    checkTools: (toolsMap) => toolsMap["Maggot Charm"]?.IsUnlocked, 
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/c/c2/Wreath_of_Purity.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/净界花环" 
                },
                { 
                    name: "长爪", 
                    checkTools: (toolsMap) => toolsMap["Harpoon"]?.IsUnlocked, 
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/7/73/Longclaw.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/长爪" 
                },
                { 
                    name: "灵火提灯", 
                    checkTools: (toolsMap) => toolsMap["Wisp Lantern"]?.IsUnlocked, 
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/8/80/Wispfire_Lantern.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/灵火提灯" 
                },
                { 
                    name: "蚤母卵", 
                    checkTools: (toolsMap) => toolsMap["Flea Charm"]?.IsUnlocked, 
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/a/a4/Egg_of_Flealia.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/蚤母卵" 
                },
                { 
                    name: "针徽", 
                    checkTools: (toolsMap) => toolsMap["Pinstress Tool"]?.IsUnlocked, 
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/5/50/Pin_Badge.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/针徽" 
                },
            ]
        },
        {
            category: "工具袋升级",
            unit: 1,
            max: 4,
            key: "ToolPouchUpgrades",
            items: [
                { name: "+1", icon: "https://huiji-public.huijistatic.com/hkss/uploads/e/e9/Tool_Pouch.png", wiki: "https://hkss.huijiwiki.com/wiki/工具袋" },
                { name: "+2", icon: "https://huiji-public.huijistatic.com/hkss/uploads/e/e9/Tool_Pouch.png", wiki: "https://hkss.huijiwiki.com/wiki/工具袋" },
                { name: "+3", icon: "https://huiji-public.huijistatic.com/hkss/uploads/e/e9/Tool_Pouch.png", wiki: "https://hkss.huijiwiki.com/wiki/工具袋" },
                { name: "+4", icon: "https://huiji-public.huijistatic.com/hkss/uploads/e/e9/Tool_Pouch.png", wiki: "https://hkss.huijiwiki.com/wiki/工具袋" }
            ]
        },
        {
            category: "制作匣升级",
            unit: 1,
            max: 4,
            key: "ToolKitUpgrades",
            items: [
                { name: "+1", icon: "https://huiji-public.huijistatic.com/hkss/uploads/5/5d/Crafting_Kit.png", wiki: "https://hkss.huijiwiki.com/wiki/制作匣" },
                { name: "+2", icon: "https://huiji-public.huijistatic.com/hkss/uploads/5/5d/Crafting_Kit.png", wiki: "https://hkss.huijiwiki.com/wiki/制作匣" },
                { name: "+3", icon: "https://huiji-public.huijistatic.com/hkss/uploads/5/5d/Crafting_Kit.png", wiki: "https://hkss.huijiwiki.com/wiki/制作匣" },
                { name: "+4", icon: "https://huiji-public.huijistatic.com/hkss/uploads/5/5d/Crafting_Kit.png", wiki: "https://hkss.huijiwiki.com/wiki/制作匣" }
            ]
        },
        {
            category: "丝技",
            unit: 1,
            items: [
                { 
                    name: "丝之矛", 
                    checkTools: (toolsMap) => toolsMap["Silk Spear"]?.IsUnlocked, 
                    icon: "https://huiji-thumb.huijistatic.com/hkss/uploads/thumb/a/a4/Icon_SS_Silkspear.png/438px-Icon_SS_Silkspear.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/丝之矛" 
                },
                { 
                    name: "灵丝风暴", 
                    checkTools: (toolsMap) => toolsMap["Thread Sphere"]?.IsUnlocked, 
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/8/8c/Icon_SS_Thread_Storm.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/灵丝风暴" 
                },
                { 
                    name: "十字绣", 
                    checkTools: (toolsMap) => toolsMap["Parry"]?.IsUnlocked, 
                    icon: "https://huiji-thumb.huijistatic.com/hkss/uploads/thumb/2/25/Icon_SS_Cross_Stitch.png/438px-Icon_SS_Cross_Stitch.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/十字绣" 
                },
                { 
                    name: "丝刃镖", 
                    checkTools: (toolsMap) => toolsMap["Silk Charge"]?.IsUnlocked, 
                    icon: "https://huiji-thumb.huijistatic.com/hkss/uploads/thumb/8/87/Icon_SS_Sharpdart.png/438px-Icon_SS_Sharpdart.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/丝刃镖" 
                },
                { 
                    name: "符文之怒", 
                    checkTools: (toolsMap) => toolsMap["Silk Bomb"]?.IsUnlocked, 
                    icon: "https://huiji-thumb.huijistatic.com/hkss/uploads/thumb/9/91/Icon_SS_Rune_Rage.png/438px-Icon_SS_Rune_Rage.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/符文之怒" 
                },
                { 
                    name: "苍白之爪", 
                    checkTools: (toolsMap) => toolsMap["Silk Boss Needle"]?.IsUnlocked, 
                    icon: "https://huiji-thumb.huijistatic.com/hkss/uploads/thumb/d/d9/Icon_SS_Pale_Nails.png/408px-Icon_SS_Pale_Nails.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/苍白之爪" 
                },
            ]
        },
        // {
        //     category: "丝之心",
        //     unit: 1,
        //     key: "silkRegenMax",
        //     max: 3,
        //     items: [
        //         { name: "+1", icon: "https://huiji-public.huijistatic.com/hkss/uploads/d/de/Icon_SS_Silk_Heart.png", wiki: "https://hkss.huijiwiki.com/wiki/丝之心" },
        //         { name: "+2", icon: "https://huiji-public.huijistatic.com/hkss/uploads/d/de/Icon_SS_Silk_Heart.png", wiki: "https://hkss.huijiwiki.com/wiki/丝之心" },
        //         { name: "+3", icon: "https://huiji-public.huijistatic.com/hkss/uploads/d/de/Icon_SS_Silk_Heart.png", wiki: "https://hkss.huijiwiki.com/wiki/丝之心" }
        //     ]
        // },
        {
            category: "丝之心",
            unit: 1,
            items: [
                { 
                    name: "髓骨洞窟-钟道兽", 
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/9/93/Bell_Beast_Idle.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/丝之心",
                    sceneCheck: { scene: "Memory_Silk_Heart_BellBeast", id: "glow_rim_Remasker", type: "bool" },
                },
                { 
                    name: "白愈厅-失缚怨魂", 
                    icon: "https://huiji-thumb.huijistatic.com/hkss/uploads/thumb/e/e2/B_The_Unravelled.png/438px-B_The_Unravelled.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/丝之心",
                    sceneCheck: { scene: "Memory_Silk_Heart_WardBoss", id: "glow_rim_Remasker", type: "bool" },
                },
                { 
                    name: "摇篮圣所-蕾丝", 
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/e/e6/B_Lace.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/丝之心",
                    sceneCheck: { scene: "Memory_Silk_Heart_LaceTower", id: "glow_rim_Remasker", type: "bool" },
                },
            ]
        },
        {
            category: "纹章",
            unit: 1,
            items: [
                { 
                    name: "收割者纹章", 
                    checkCreasts: (creastsMap) => creastsMap["Reaper"]?.IsUnlocked, 
                    icon: "https://huiji-thumb.huijistatic.com/hkss/uploads/thumb/0/0c/Reaper_Crest_Inventory.png/438px-Reaper_Crest_Inventory.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/收割者纹章" 
                },
                { 
                    name: "漫游者纹章", 
                    checkCreasts: (creastsMap) => creastsMap["Wanderer"]?.IsUnlocked, 
                    icon: "https://huiji-thumb.huijistatic.com/hkss/uploads/thumb/5/5e/Wanderer_Crest_Inventory.png/322px-Wanderer_Crest_Inventory.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/漫游者纹章" 
                },
                { 
                    name: "野兽纹章", 
                    checkCreasts: (creastsMap) => creastsMap["Warrior"]?.IsUnlocked, 
                    icon: "https://huiji-thumb.huijistatic.com/hkss/uploads/thumb/b/b9/Beast_Crest_Inventory.png/438px-Beast_Crest_Inventory.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/野兽纹章" 
                },
                { 
                    name: "建筑师纹章", 
                    checkCreasts: (creastsMap) => creastsMap["Toolmaster"]?.IsUnlocked, 
                    icon: "https://huiji-thumb.huijistatic.com/hkss/uploads/thumb/d/d4/Architect_Crest_Inventory.png/412px-Architect_Crest_Inventory.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/建筑师纹章" 
                },
                { 
                    name: "巫妪纹章", 
                    checkCreasts: (creastsMap) => creastsMap["Witch"]?.IsUnlocked, 
                    icon: "https://huiji-thumb.huijistatic.com/hkss/uploads/thumb/d/d0/Witch_Crest_Inventory.png/426px-Witch_Crest_Inventory.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/巫妪纹章" 
                },
                { 
                    name: "萨满纹章", 
                    checkCreasts: (creastsMap) => creastsMap["Spell"]?.IsUnlocked, 
                    icon: "https://huiji-thumb.huijistatic.com/hkss/uploads/thumb/d/d8/Shaman_Crest_Inventory.png/435px-Shaman_Crest_Inventory.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/萨满纹章" 
                },
            ]
        },
        {
            category: "能力",
            unit: 1,
            items: [
                { 
                    key: "hasDash", 
                    name: "疾风步", 
                    icon: "https://huiji-thumb.huijistatic.com/hkss/uploads/thumb/f/f2/Icon_SS_Swift_Step_Art.png/438px-Icon_SS_Swift_Step_Art.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/疾风步" 
                },
                { 
                    key: "hasWalljump", 
                    name: "蛛攀术", 
                    icon: "https://huiji-thumb.huijistatic.com/hkss/uploads/thumb/3/3b/Icon_SS_Cling_Grip_Art.png/357px-Icon_SS_Cling_Grip_Art.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/蛛攀术" 
                },
                { 
                    key: "hasHarpoonDash", 
                    name: "飞针冲刺", 
                    icon: "https://huiji-thumb.huijistatic.com/hkss/uploads/thumb/6/6f/Icon_SS_Clawline_Art.png/438px-Icon_SS_Clawline_Art.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/飞针冲刺" 
                },
                { 
                    key: "hasSuperJump", 
                    name: "灵丝升腾", 
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/e/e8/Icon_SS_Silk_Soar_Art.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/灵丝升腾" 
                },
                { 
                    key: "hasChargeSlash", 
                    name: "蓄力斩", 
                    icon: "https://huiji-thumb.huijistatic.com/hkss/uploads/thumb/8/8e/Icon_SS_Needle_Strike_Art.png/438px-Icon_SS_Needle_Strike_Art.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/蓄力斩" 
                },
                { 
                    key: "hasNeedolin", 
                    name: "织忆弦针", 
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/c/c0/Icon_SS_Needolin_Art.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/织忆弦针" 
                },
                { 
                    key: "HasBoundCrestUpgrader", 
                    name: "风铃瑶", 
                    icon: "https://huiji-thumb.huijistatic.com/hkss/uploads/thumb/0/00/Icon_SS_Sylphsong_Art.png/438px-Icon_SS_Sylphsong_Art.png",
                    wiki: "https://hkss.huijiwiki.com/wiki/%E9%A3%8E%E7%81%B5%E8%B0%A3" 
                },
            ]
        },
        {
            category: "面具",
            unit: 1,
            max: 5,
            key: "maxHealthBase",
            items: [
                { name: "+1", icon: "https://huiji-public.huijistatic.com/hkss/uploads/2/2c/Mask_Shard_SS.png", wiki: "https://hkss.huijiwiki.com/wiki/面具碎片_(丝之歌)" },
                { name: "+2", icon: "https://huiji-public.huijistatic.com/hkss/uploads/2/2c/Mask_Shard_SS.png", wiki: "https://hkss.huijiwiki.com/wiki/面具碎片_(丝之歌)" },
                { name: "+3", icon: "https://huiji-public.huijistatic.com/hkss/uploads/2/2c/Mask_Shard_SS.png", wiki: "https://hkss.huijiwiki.com/wiki/面具碎片_(丝之歌)" },
                { name: "+4", icon: "https://huiji-public.huijistatic.com/hkss/uploads/2/2c/Mask_Shard_SS.png", wiki: "https://hkss.huijiwiki.com/wiki/面具碎片_(丝之歌)" },
                { name: "+5", icon: "https://huiji-public.huijistatic.com/hkss/uploads/2/2c/Mask_Shard_SS.png", wiki: "https://hkss.huijiwiki.com/wiki/面具碎片_(丝之歌)" }
            ],
            transform(value) {
                return value - 5;
            },
        },
        {
            category: "面具碎片",
            unit: 0,
            items: [
                // === Mask Shards (NPC) ===
                { 
                    name: "骸底镇佩珀", 
                    key: "PurchasedBonebottomHeartPiece",
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/2/2c/Mask_Shard_SS.png",
                    unit: 0
                },

                // === Mask Shards (Scene Data) ===
                { 
                    name: "Crawl_02", 
                    desc: "",
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/2/2c/Mask_Shard_SS.png",
                    sceneCheck: { scene: "Crawl_02", id: "Heart Piece", type: "bool" },
                    unit: 0
                },
                { 
                    name: "Dock_08", 
                    desc: "",
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/2/2c/Mask_Shard_SS.png",
                    sceneCheck: { scene: "Dock_08", id: "Heart Piece", type: "bool" },
                    unit: 0
                },
                { 
                    name: "Bone_East_20", 
                    desc: "",
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/2/2c/Mask_Shard_SS.png",
                    sceneCheck: { scene: "Bone_East_20", id: "Heart Piece", type: "bool" },
                    unit: 0
                },
                { 
                    name: "Shellwood_14", 
                    desc: "",
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/2/2c/Mask_Shard_SS.png",
                    sceneCheck: { scene: "Shellwood_14", id: "Heart Piece", type: "bool" },
                    unit: 0
                },
                { 
                    name: "Song_09", 
                    desc: "",
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/2/2c/Mask_Shard_SS.png",
                    sceneCheck: { scene: "Song_09", id: "Heart Piece", type: "bool" },
                    unit: 0
                },
                { 
                    name: "Library_05", 
                    desc: "",
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/2/2c/Mask_Shard_SS.png",
                    sceneCheck: { scene: "Library_05", id: "Heart Piece", type: "bool" },
                    unit: 0
                },
                { 
                    name: "Peak_04c", 
                    desc: "",
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/2/2c/Mask_Shard_SS.png",
                    sceneCheck: { scene: "Peak_04c", id: "Heart Piece", type: "bool" },
                    unit: 0
                },
                { 
                    name: "Bone_East_LavaChallenge", 
                    desc: "",
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/2/2c/Mask_Shard_SS.png",
                    sceneCheck: { scene: "Bone_East_LavaChallenge", id: "Heart Piece (1)", type: "bool" },
                    unit: 0
                },
                { 
                    name: "Weave_05b", 
                    desc: "",
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/2/2c/Mask_Shard_SS.png",
                    sceneCheck: { scene: "Weave_05b", id: "Heart Piece", type: "bool" },
                    unit: 0
                },
                { 
                    name: "Coral_19b", 
                    desc: "",
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/2/2c/Mask_Shard_SS.png",
                    sceneCheck: { scene: "Coral_19b", id: "Heart Piece", type: "bool" },
                    unit: 0
                },
                { 
                    name: "Wisp_07", 
                    desc: "",
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/2/2c/Mask_Shard_SS.png",
                    sceneCheck: { scene: "Wisp_07", id: "Heart Piece", type: "bool" },
                    unit: 0
                },
                { 
                    name: "Slab_17", 
                    desc: "",
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/2/2c/Mask_Shard_SS.png",
                    sceneCheck: { scene: "Slab_17", id: "Heart Piece", type: "bool" },
                    unit: 0
                },
                { 
                    name: "Shadow_13", 
                    desc: "",
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/2/2c/Mask_Shard_SS.png",
                    sceneCheck: { scene: "Shadow_13", id: "Heart Piece", type: "bool" },
                    unit: 0
                },
                { 
                    name: "Coral_19b", 
                    desc: "",
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/2/2c/Mask_Shard_SS.png",
                    sceneCheck: { scene: "Coral_19b", id: "Heart Piece", type: "bool" },
                    unit: 0
                },
            ]
        },
        {
            category: "灵丝轴",
            unit: 1,
            max: 9,
            key: "silkMax",
            items: [
                { name: "+1", icon: "https://huiji-public.huijistatic.com/hkss/uploads/6/63/Spool_Fragment.png", wiki: "https://hkss.huijiwiki.com/wiki/灵丝轴碎片" },
                { name: "+2", icon: "https://huiji-public.huijistatic.com/hkss/uploads/6/63/Spool_Fragment.png", wiki: "https://hkss.huijiwiki.com/wiki/灵丝轴碎片" },
                { name: "+3", icon: "https://huiji-public.huijistatic.com/hkss/uploads/6/63/Spool_Fragment.png", wiki: "https://hkss.huijiwiki.com/wiki/灵丝轴碎片" },
                { name: "+4", icon: "https://huiji-public.huijistatic.com/hkss/uploads/6/63/Spool_Fragment.png", wiki: "https://hkss.huijiwiki.com/wiki/灵丝轴碎片" },
                { name: "+5", icon: "https://huiji-public.huijistatic.com/hkss/uploads/6/63/Spool_Fragment.png", wiki: "https://hkss.huijiwiki.com/wiki/灵丝轴碎片" },
                { name: "+6", icon: "https://huiji-public.huijistatic.com/hkss/uploads/6/63/Spool_Fragment.png", wiki: "https://hkss.huijiwiki.com/wiki/灵丝轴碎片" },
                { name: "+7", icon: "https://huiji-public.huijistatic.com/hkss/uploads/6/63/Spool_Fragment.png", wiki: "https://hkss.huijiwiki.com/wiki/灵丝轴碎片" },
                { name: "+8", icon: "https://huiji-public.huijistatic.com/hkss/uploads/6/63/Spool_Fragment.png", wiki: "https://hkss.huijiwiki.com/wiki/灵丝轴碎片" },
                { name: "+9", icon: "https://huiji-public.huijistatic.com/hkss/uploads/6/63/Spool_Fragment.png", wiki: "https://hkss.huijiwiki.com/wiki/灵丝轴碎片" }
            ],
            transform(value) {
                return value - 9;
            },
        },
        {
            category: "灵丝轴碎片",
            unit: 0,
            items: [
                // === Silk Spool Fragments (Scene Data) ===
                { 
                    name: "Bone_11b", 
                    desc: "1111",
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/6/63/Spool_Fragment.png",
                    sceneCheck: { scene: "Bone_11b", id: "Silk Spool", type: "bool" },
                    unit: 0
                },
                { 
                    name: "Bone_East_13", 
                    desc: "",
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/6/63/Spool_Fragment.png",
                    sceneCheck: { scene: "Bone_East_13", id: "Silk Spool", type: "bool" },
                    unit: 0
                },
                { 
                    name: "Greymoor_02", 
                    desc: "",
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/6/63/Spool_Fragment.png",
                    sceneCheck: { scene: "Greymoor_02", id: "Silk Spool", type: "bool" },
                    unit: 0
                },
                { 
                    name: "Peak_01", 
                    desc: "",
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/6/63/Spool_Fragment.png",
                    sceneCheck: { scene: "Peak_01", id: "Silk Spool", type: "bool" },
                    unit: 0
                },
                { 
                    name: "Song_19_entrance", 
                    desc: "",
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/6/63/Spool_Fragment.png",
                    sceneCheck: { scene: "Song_19_entrance", id: "Silk Spool", type: "bool" },
                    unit: 0
                },
                { 
                    name: "Ward_01", 
                    desc: "",
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/6/63/Spool_Fragment.png",
                    sceneCheck: { scene: "Ward_01", id: "Silk Spool", type: "bool" },
                    unit: 0
                },
                { 
                    name: "Cog_07", 
                    desc: "",
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/6/63/Spool_Fragment.png",
                    sceneCheck: { scene: "Cog_07", id: "Silk Spool", type: "bool" },
                    unit: 0
                },
                { 
                    name: "Library_11b", 
                    desc: "",
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/6/63/Spool_Fragment.png",
                    sceneCheck: { scene: "Library_11b", id: "Silk Spool", type: "bool" },
                    unit: 0
                },
                { 
                    name: "Under_10", 
                    desc: "",
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/6/63/Spool_Fragment.png",
                    sceneCheck: { scene: "Under_10", id: "Silk Spool", type: "bool" },
                    unit: 0
                },
                { 
                    name: "Hang_03_top", 
                    desc: "",
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/6/63/Spool_Fragment.png",
                    sceneCheck: { scene: "Hang_03_top", id: "Silk Spool", type: "bool" },
                    unit: 0
                },
                { 
                    name: "Arborium_09", 
                    desc: "",
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/6/63/Spool_Fragment.png",
                    sceneCheck: { scene: "Arborium_09", id: "Silk Spool", type: "bool" },
                    unit: 0
                },
                { 
                    name: "Dock_03c", 
                    desc: "",
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/6/63/Spool_Fragment.png",
                    sceneCheck: { scene: "Dock_03c", id: "Silk Spool", type: "bool" },
                    unit: 0
                },
                { 
                    name: "Weave_11", 
                    desc: "",
                    icon: "https://huiji-public.huijistatic.com/hkss/uploads/6/63/Spool_Fragment.png",
                    sceneCheck: { scene: "Weave_11", id: "Silk Spool", type: "bool" },
                    unit: 0
                },
            ]
        },
        {
            category: "织针磨砺",
            unit: 1,
            max: 4,
            key: "nailUpgrades",
            items: [
                { name: "+1", icon: "https://huiji-thumb.huijistatic.com/hkss/uploads/thumb/8/87/Needle_2_Sharpened_Needle.png/54px-Needle_2_Sharpened_Needle.png", wiki: "https://hkss.huijiwiki.com/wiki/织针" },
                { name: "+2", icon: "https://huiji-thumb.huijistatic.com/hkss/uploads/thumb/5/52/Needle_3_Shining_Needle.png/54px-Needle_3_Shining_Needle.png", wiki: "https://hkss.huijiwiki.com/wiki/织针" },
                { name: "+3", icon: "https://huiji-thumb.huijistatic.com/hkss/uploads/thumb/0/09/Needle_4_Hivesteel_Needle.png/54px-Needle_4_Hivesteel_Needle.png", wiki: "https://hkss.huijiwiki.com/wiki/织针" },
                { name: "+4", icon: "https://huiji-thumb.huijistatic.com/hkss/uploads/thumb/f/f0/Needle_5_Pale_Steel_Needle.png/54px-Needle_5_Pale_Steel_Needle.png", wiki: "https://hkss.huijiwiki.com/wiki/织针" }
            ],
        },
        {
            category: "特殊内容",
            unit: 1,
            items: [
                { name: "永绽花", icon: "https://huiji-public.huijistatic.com/hkss/uploads/e/e4/Everbloom.png", checkCollectables: (collectablesMap) => collectablesMap["White Flower"]?.Amount > 0, wiki: "https://hkss.huijiwiki.com/wiki/永绽花" },
            ]
        }
    ]
};
