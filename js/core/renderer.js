(function(window) {
    const SaveRenderer = {
        renderResult: function(save, gameConfig) {
            const missingListDiv = document.getElementById("missingList");
            const root = document.getElementById("result");

            // 1️⃣ 清空旧渲染，避免重复
            missingListDiv.innerHTML = "";
            root.innerHTML = "";

            if (!window.SaveCalculator) {
                console.error("SaveCalculator not found!");
                return;
            }

            // 2️⃣ 计算完成度
            const { total, missing, detailedSections } = window.SaveCalculator.calculateCompletion(save, gameConfig);

            // 3️⃣ 渲染缺失列表
            missingListDiv.innerHTML = `
                <h2 class="completion-stat">进度 ${total}/${gameConfig.maxPercent}%</h2>
                
                <div class="missing-content">
                    <div class="missing-sub">缺失项目 ${missing.length} 个</div>
                    <ul>${missing.map(m => `<li>[${m.category}] ${m.name}</li>`).join("")}</ul>
                </div>
            `;

            // 4️⃣ 渲染详细 section
            detailedSections.forEach(section => {
                // 🔁 查找或创建同名 details（防止重复）
                let block = Array.from(root.children).find(
                    el =>
                        el.tagName === "DETAILS" &&
                        el.querySelector("summary")?.textContent === section.category
                );

                let sectionItems;
                if (!block) {
                    block = document.createElement("details");
                    block.open = true;

                    const summary = document.createElement("summary");
                    summary.textContent = section.category;
                    block.appendChild(summary);

                    sectionItems = document.createElement("div");
                    sectionItems.className = "section-items";
                    block.appendChild(sectionItems);

                    root.appendChild(block);
                } else {
                    sectionItems = block.querySelector(".section-items");
                }

                // 渲染 items
                section.items.forEach(item => {
                    // === Group Item Rendering ===
                    if (item.type === 'group') {
                        const groupContainer = document.createElement("div");
                        groupContainer.className = "item-group";
                        
                        // Attach original index to preserve L-R order in fan view
                        const itemsWithIndex = item.items.map((subItem, idx) => ({...subItem, originalIndex: idx}));

                        // Sort items: Uncompleted first (bottom), Completed last (top)
                        // This ensures "Completed" items are visible on top of the stack (covering uncompleted ones)
                        const uncompleted = itemsWithIndex.filter(i => !i.done);
                        const completed = itemsWithIndex.filter(i => i.done);
                        const sortedItems = [...uncompleted, ...completed];

                        sortedItems.forEach((subItem) => {
                            const el = document.createElement(subItem.wiki ? "a" : "div");
                            el.className = `item group-item ${subItem.done ? "done" : "missing"}`;
                            
                            // Set CSS variables for fan effect using ORIGINAL index
                            el.style.setProperty('--i', subItem.originalIndex);
                            el.style.setProperty('--n', item.items.length);

                            if (subItem.wiki) {
                                el.href = subItem.wiki;
                                el.target = "_blank";
                                el.rel = "noopener noreferrer";
                                el.title = subItem.name;
                            }

                            if (subItem.icon) {
                                const iconWrapper = document.createElement("div");
                                iconWrapper.className = "icon-wrapper";
                                const img = document.createElement("img");
                                img.src = subItem.icon;
                                img.className = "item-icon";
                                img.referrerPolicy = "no-referrer";
                                img.onerror = () => { iconWrapper.style.display = 'none'; };
                                iconWrapper.appendChild(img);
                                el.appendChild(iconWrapper);
                            }

                            const span = document.createElement("span");
                            span.textContent = subItem.name;
                            el.appendChild(span);

                            groupContainer.appendChild(el);
                        });
                        
                        sectionItems.appendChild(groupContainer);
                        return;
                    }

                    // 1️⃣ 创建容器 (如果是链接则用 a 标签)
                    const el = document.createElement(item.wiki ? "a" : "div");
                    el.className = `item ${item.done ? "done" : "missing"}`;
                    
                    if (item.wiki) {
                        el.href = item.wiki;
                        el.target = "_blank";
                        el.rel = "noopener noreferrer";
                        el.title = "点击查看 Wiki";
                    }

                    // 2️⃣ 添加图标 (如果有)
                    if (item.icon) {
                        const iconWrapper = document.createElement("div");
                        iconWrapper.className = "icon-wrapper";

                        const img = document.createElement("img");
                        img.src = item.icon;
                        img.className = "item-icon";
                        img.referrerPolicy = "no-referrer"; // 尝试绕过防盗链
                        // 图片加载失败时隐藏，避免裂图
                        img.onerror = () => { 
                            console.warn('Image failed to load:', item.icon);
                            iconWrapper.style.display = 'none'; // 整个wrapper隐藏
                        }; 
                        
                        iconWrapper.appendChild(img);
                        el.appendChild(iconWrapper);
                    }

                    // 3️⃣ 添加文字
                    const span = document.createElement("span");
                    span.textContent = item.name;
                    el.appendChild(span);

                    sectionItems.appendChild(el);
                });
            });
        },

        renderModifier: function(save, gameConfig) {
            const modifierList = document.getElementById("modifierList");
            
            // Clear list
            modifierList.innerHTML = "";

            // Check if modifiable items exist
            if (!gameConfig.modifiableItems || gameConfig.modifiableItems.length === 0) {
                return;
            }

            gameConfig.modifiableItems.forEach(item => {
                const container = document.createElement("div");
                container.className = "modifier-item";

                const label = document.createElement("label");
                label.textContent = item.name;
                container.appendChild(label);

                let input;
                const currentValue = item.getValue(save);

                if (item.type === 'boolean') {
                    input = document.createElement("select");
                    
                    const optTrue = document.createElement("option");
                    optTrue.value = "true";
                    optTrue.textContent = "已获得 / 是";
                    optTrue.selected = !!currentValue;

                    const optFalse = document.createElement("option");
                    optFalse.value = "false";
                    optFalse.textContent = "未获得 / 否";
                    optFalse.selected = !currentValue;

                    input.appendChild(optTrue);
                    input.appendChild(optFalse);

                    input.onchange = (e) => {
                        const val = e.target.value === "true";
                        item.setValue(save, val);
                        // Re-render results to show impact
                        window.SaveRenderer.renderResult(save, gameConfig);
                    };

                } else if (item.type === 'number') {
                    input = document.createElement("input");
                    input.type = "number";
                    input.value = currentValue;
                    
                    input.onchange = (e) => {
                        const val = parseInt(e.target.value);
                        item.setValue(save, val);
                        window.SaveRenderer.renderResult(save, gameConfig);
                    };
                }

                if (input) {
                    container.appendChild(input);
                    modifierList.appendChild(container);
                }
            });
        }
    };

    window.SaveRenderer = SaveRenderer;
})(window);
