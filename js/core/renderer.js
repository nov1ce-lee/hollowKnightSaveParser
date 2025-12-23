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
        // 查找已有同名 <details>，如不存在则创建
        let block = Array.from(root.children).find(
            b => b.tagName === "DETAILS" && b.querySelector("summary").textContent === section.category
        );

        let sectionItems;
        if (!block) {
            block = document.createElement("details");
            block.open = true;
            block.innerHTML = `<summary>${section.category}</summary>`;
            sectionItems = document.createElement("div");
            sectionItems.className = "section-items";
            block.appendChild(sectionItems);
            root.appendChild(block);
        } else {
            sectionItems = block.querySelector(".section-items");
        }

        // 获取等级型值
        let value = section.max ? save[section.key] || 0 : null;
        if (section.transform) value = section.transform(value);

        // 遍历 items
        section.items.forEach((item, idx) => {
            let done, name;

            if (!section.max) {
                // 布尔型
                done = gameConfig.specialCheck ? gameConfig.specialCheck(item, save) : null;
                if (done === null || done === undefined) {
                    done = !!getNestedValue(save, item.key);
                }
                name = item.name;
            } else {
                // 等级型
                done = value > idx;
                name = item;
            }

            const div = document.createElement("div");
            div.className = `item ${done ? "done" : "missing"}`;
            div.textContent = name;
            sectionItems.appendChild(div);
        });
    });
}
