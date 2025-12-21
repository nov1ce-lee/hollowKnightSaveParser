let currentSave = null;

document.getElementById("parseBtn").onclick = async () => {
    const file = document.getElementById("fileInput").files[0];
    if (!file) return;

    const fullData = await parseDatFile(file);
    if (!fullData.playerData) {
        alert("存档数据格式异常，找不到 playerData");
        return;
    }
    currentSave = fullData.playerData;   // 只取 playerData
    renderResult(currentSave);
};

document.getElementById("exportBtn").onclick = () => {
    if (!currentSave) return;
    exportMissing(currentSave);
};
