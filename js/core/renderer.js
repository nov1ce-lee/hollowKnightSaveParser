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
        }
    };

    window.SaveRenderer = SaveRenderer;
})(window);
