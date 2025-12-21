function renderResult(save) {
    const { total, missing } = calculateCompletion(save);
    const missingListDiv = document.getElementById("missingList");

    missingListDiv.innerHTML = `<h2>缺失项目 (${missing.length} 个，总进度 ${total}%)</h2>
        <ul>
        ${missing.map(m => `<li>[${m.category}] ${m.name} (+${m.percent}%)</li>`).join("")}
        </ul>`;

    const root = document.getElementById("result");
    root.innerHTML = "";

    completionMap.forEach(section => {
        let block = Array.from(root.children).find(
            b => b.tagName === "DETAILS" && b.querySelector("summary").textContent === section.category
        );

        let sectionItems;
        if (!block) {
            // 还没渲染过，创建新的 block
            block = document.createElement("details");
            block.open = true;
            block.innerHTML = `<summary>${section.category}</summary>`;
            sectionItems = document.createElement("div");
            sectionItems.className = "section-items";
            block.appendChild(sectionItems);
            root.appendChild(block);
        } else {
            // 已经有同名 block，复用里面的 sectionItems
            sectionItems = block.querySelector(".section-items");
        }

        // 渲染 items
        section.items.forEach((item, idx) => {
            let done, name;
            if (!section.max) { // 布尔型
                done = !!save[item.key];
                name = item.name;
            } else { // 等级型
                value = save[section.key] || 0;
                if (section.category == '面具') {
                    value -= 5
                } else if (section.category == '容器') {
                    value /= 33
                }
                done = value > idx;
                name = item;
            }

            const line = document.createElement("div");
            line.textContent = name;
            line.className = `item ${done ? "done" : "missing"}`;
            sectionItems.appendChild(line);
        });
    });

}
