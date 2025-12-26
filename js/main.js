let currentGame = window.GAMES.hollow;
let currentSave = null;

document.getElementById("parseBtn").onclick = async () => {
    const fileInput = document.getElementById("fileInput");
    const file = fileInput.files[0];
    if (!file) return;

    if (!window.SaveParser || !window.SaveRenderer) {
        console.error("Required modules not loaded");
        return;
    }

    try {
        const data = await window.SaveParser.parseDatFile(file);
        currentSave = data.playerData;
        window.SaveRenderer.renderResult(currentSave, currentGame);
    } catch (e) {
        console.error("Parsing error:", e);
        alert("解析失败: " + e.message);
    }
};

function switchGame(gameId) {
    if (!window.GAMES || !window.GAMES[gameId]) return;

    currentGame = window.GAMES[gameId];
    document.getElementById("pageTitle").textContent = currentGame.title;

    document.getElementById("hkBtn").classList.toggle("active", gameId === 'hollow');
    document.getElementById("ssBtn").classList.toggle("active", gameId === 'silksong');

    document.getElementById("result").innerHTML = "";
    document.getElementById("missingList").innerHTML = "";
    
    // Update path hint
    const paths = {
        hollow: String.raw`C:\Users\%USERNAME%\AppData\LocalLow\Team Cherry\Hollow Knight`,
        silksong: String.raw`C:\Users\%USERNAME%\AppData\LocalLow\Team Cherry\Hollow Knight Silksong`
    };
    const pathDisplay = document.getElementById("savePathDisplay");
    if (pathDisplay) {
        pathDisplay.textContent = paths[gameId] || paths.hollow;
    }

    // If we have a save loaded, re-render it with the new game config (though usually save formats differ)
    // But for now, let's just clear.
    currentSave = null;
}

// Copy path logic
document.getElementById("copyPathBtn").onclick = () => {
    const text = document.getElementById("savePathDisplay").textContent;
    navigator.clipboard.writeText(text).then(() => {
        const btn = document.getElementById("copyPathBtn");
        const originalHTML = btn.innerHTML;
        
        // Show checkmark
        btn.innerHTML = `<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>`;
        btn.style.color = "var(--status-done-border)"; // Greenish/Blueish color indicating success

        setTimeout(() => {
            btn.innerHTML = originalHTML;
            btn.style.color = ""; // Reset color
        }, 1500);
    }).catch(err => {
        console.error('Failed to copy: ', err);
        alert("复制失败，请手动复制");
    });
};
