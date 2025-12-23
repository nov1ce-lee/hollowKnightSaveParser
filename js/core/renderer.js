function renderResult(save, gameConfig) {
    const missingListDiv = document.getElementById("missingList");
    const root = document.getElementById("result");

    // 1️⃣ 清空旧渲染，避免重复
    missingListDiv.innerHTML = "";
    root.innerHTML = "";

    // 2️⃣ 计算完成度
    const { total, missing } = calculateCompletion(save, gameConfig);

    // 3️⃣ 渲染缺失列表
    missingListDiv.innerHTML = `
        <h2>缺失项目 (${missing.length} 个，进度 ${total}/${gameConfig.maxPercent}%)</h2>
        <ul>${missing.map(m => `<li>[${m.category}] ${m.name}</li>`).join("")}</ul>
    `;

    // 4️⃣ 渲染详细 section
    gameConfig.completionMap.forEach(section => {
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

        // 🧹 清空旧内容（防止重复渲染）
        sectionItems.innerHTML = "";

        // ===== 构建 Collectables Map（只构建一次）=====
        const collectablesMap = save.Collectables
            ? buildCollectablesMap(save.Collectables.savedData)
            : null;

        // ===== 等级型 =====
        if (section.max) {
            let value = save[section.key] || 0;
            if (section.transform) value = section.transform(value);

            section.items.forEach((name, idx) => {
                const done = value > idx;

                const div = document.createElement("div");
                div.className = `item ${done ? "done" : "missing"}`;
                div.textContent = name;

                sectionItems.appendChild(div);
            });

            return;
        }

        if ((!Array.isArray(section.items) ||section.items.length === 0)) {
            return;
        }
        
        // ===== 非等级型 =====
        section.items.forEach(item => {
            
            let done;

            // 1️⃣ item.check（最高优先级）
            if (typeof item.check === "function") {
                done = item.check(collectablesMap, save);
            }

            // 2️⃣ gameConfig.specialCheck
            if (done === undefined && typeof gameConfig.specialCheck === "function") {
                const r = gameConfig.specialCheck(item, save);
                if (r !== null && r !== undefined) done = r;
            }

            // 3️⃣ 默认布尔型
            if (done === undefined) {
                done = !!getNestedValue(save, item.key);
            }

            const div = document.createElement("div");
            div.className = `item ${done ? "done" : "missing"}`;
            div.textContent = item.name;

            sectionItems.appendChild(div);
        });
    });

}
