let currentSave = null;

document.getElementById("parseBtn").onclick = async () => {
    const file = document.getElementById("fileInput").files[0];
    if (!file) return;

    currentSave = await parseDatFile(file);
    renderResult(currentSave);
};

document.getElementById("exportBtn").onclick = () => {
    if (!currentSave) return;
    exportMissing(currentSave);
};
