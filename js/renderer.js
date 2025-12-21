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
        const block = document.createElement("details");
        block.open = true;
        block.innerHTML = `<summary>${section.category}</summary>`;

        const sectionItems = document.createElement("div");
        sectionItems.className = "section-items";

        section.items.forEach((item, idx) => {
            const value = save[section.key];
            const done = value > idx;
            const line = document.createElement("div");
            line.textContent = item;
            line.className = `item ${done ? "done" : "missing"}`;
            sectionItems.appendChild(line);
        });

        block.appendChild(sectionItems);
        root.appendChild(block);
    });
}
