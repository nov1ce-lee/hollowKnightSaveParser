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
    
    // If we have a save loaded, re-render it with the new game config (though usually save formats differ)
    // But for now, let's just clear.
    currentSave = null;
}
