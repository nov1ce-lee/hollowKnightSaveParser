let currentGame = window.GAMES.hollow;
let currentSave = null;

document.getElementById("parseBtn").onclick = async () => {
    const file = fileInput.files[0];
    if (!file) return;

    const data = await parseDatFile(file);
    currentSave = data.playerData;
    renderResult(currentSave, currentGame);
};

function switchGame(gameId) {
    currentGame = window.GAMES[gameId];
    document.getElementById("pageTitle").textContent = currentGame.title;

    document.getElementById("hkBtn").classList.toggle("active", gameId === 'hollow');
    document.getElementById("ssBtn").classList.toggle("active", gameId === 'silksong');

    document.getElementById("result").innerHTML = "";
    document.getElementById("missingList").innerHTML = "";
}
