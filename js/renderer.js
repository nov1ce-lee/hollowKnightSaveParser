function renderResult(save) {
    const { total } = calculateCompletion(save);
    const root = document.getElementById("result");
    root.innerHTML = `<h2>${total}% / 112%</h2>`;

    completionMap.forEach(section => {
        const d = document.createElement("details");
        d.open = true;
        d.innerHTML = `<summary>${section.category}</summary>`;

        section.items.forEach(item => {
            const done = save[item.key];
            const line = document.createElement("div");
            line.textContent = `${done ? "✔" : "✘"} ${item.name}`;
            line.style.color = done ? "green" : "red";
            d.appendChild(line);
        });

        root.appendChild(d);
    });
}
