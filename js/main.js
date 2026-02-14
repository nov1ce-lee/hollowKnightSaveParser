let currentGame = window.GAMES.hollow;
window.currentSave = null;     // The playerData object (used for calculation)
window.currentFullJson = null; // The full JSON object (root)
let currentMeta = null;     // Metadata for export

document.getElementById("parseBtn").onclick = async () => {
    const fileInput = document.getElementById("fileInput");
    const file = fileInput.files[0];
    if (!file) return;

    if (!window.SaveParser || !window.SaveRenderer) {
        console.error("Required modules not loaded");
        return;
    }

    try {
        const parsed = await window.SaveParser.parseDatFile(file);
        
        currentFullJson = parsed.json;
        currentMeta = parsed.meta;
        // Assume structure is { playerData: ... } or root is playerData.
        // Based on hollow.js keys (e.g. hasDash), if root has them, use root.
        // Usually HK saves are { "playerData": { ... }, ... }
        currentSave = currentFullJson.playerData || currentFullJson;

        window.SaveRenderer.renderResult(currentSave, currentGame, currentFullJson);
        
        // Ensure rescue button text is correct for the current game
        const rescueBtn = document.getElementById("rescueBtn");
        if (rescueBtn) {
            rescueBtn.textContent = getRescueButtonText(false);
        }

        // Render Modifier UI (Always render, visibility controlled by toggle)
        if (window.SaveRenderer.renderModifier) {
            window.SaveRenderer.renderModifier(currentSave, currentGame);
        }
        
        updateModifierVisibility();

    } catch (e) {
        console.error("Parsing error:", e);
        alert("解析失败: " + e.message);
    }
};

document.getElementById("exportBtn").onclick = () => {
    if (!currentFullJson || !currentMeta) {
        alert("没有可导出的存档数据");
        return;
    }

    try {
        const newDat = window.SaveParser.exportDatFile(currentFullJson, currentMeta);
        
        // Trigger download
        const blob = new Blob([newDat], { type: "application/octet-stream" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "user2.dat"; // Default name
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    } catch (e) {
        console.error("Export error:", e);
        alert("导出失败: " + e.message);
    }
};

let isJournalView = false;
let isRescueView = false;
let isMemoryLocketView = false;

function getRescueButtonText(isOpen) {
    const gameId = currentGame && currentGame.id === "silksong" ? "silksong" : "hollow";
    if (gameId === "hollow") {
        return isOpen ? "关闭幼虫收集情况" : "浏览幼虫收集情况";
    }
    return isOpen ? "关闭跳蚤收集情况" : "浏览跳蚤收集情况";
}

document.getElementById("memoryLocketBtn").onclick = () => {
    if (!window.SaveRenderer || !currentSave) return;
    isMemoryLocketView = !isMemoryLocketView;
    
    const panel = document.getElementById("memoryLocketPanel");
    const btn = document.getElementById("memoryLocketBtn");
    const missingList = document.getElementById("missingList");
    const result = document.getElementById("result");
    const modifierUI = document.getElementById("modifierUI");
    const journalPanel = document.getElementById("journalPanel");
    const rescuePanel = document.getElementById("rescuePanel");

    if (isMemoryLocketView) {
        btn.textContent = "关闭忆境纪念盒收集情况";
        missingList.style.display = "none";
        result.style.display = "none";
        modifierUI.style.display = "none";
        panel.style.display = "block";
        
        // Close others
        isJournalView = false;
        isRescueView = false;
        journalPanel.style.display = "none";
        rescuePanel.style.display = "none";
        document.getElementById("journalBtn").textContent = "浏览猎人日志";
        document.getElementById("rescueBtn").textContent = getRescueButtonText(false);
        
        window.SaveRenderer.renderMemoryLockets(currentSave, currentGame, currentFullJson);
    } else {
        btn.textContent = "浏览忆境纪念盒收集情况";
        panel.style.display = "none";
        missingList.style.display = "block";
        result.style.display = "block";
        updateModifierVisibility();
        window.SaveRenderer.renderResult(currentSave, currentGame, currentFullJson);
    }
};

document.getElementById("journalBtn").onclick = () => {
    if (!window.SaveRenderer) return;
    if (!currentSave) return;
    isJournalView = !isJournalView;
    const journalPanel = document.getElementById("journalPanel");
    const journalBtn = document.getElementById("journalBtn");
    const missingList = document.getElementById("missingList");
    const result = document.getElementById("result");
    const modifierUI = document.getElementById("modifierUI");
    const rescuePanel = document.getElementById("rescuePanel");
    const rescueBtn = document.getElementById("rescueBtn");
    const memoryLocketPanel = document.getElementById("memoryLocketPanel");
    const memoryLocketBtn = document.getElementById("memoryLocketBtn");

    if (isJournalView) {
        journalBtn.textContent = "关闭猎人日志";
        missingList.style.display = "none";
        result.style.display = "none";
        modifierUI.style.display = "none";
        journalPanel.style.display = "block";
        isRescueView = false;
        isMemoryLocketView = false;
        if (rescuePanel) {
            rescuePanel.style.display = "none";
        }
        if (rescueBtn) {
            rescueBtn.textContent = getRescueButtonText(false);
        }
        if (memoryLocketPanel) {
            memoryLocketPanel.style.display = "none";
        }
        if (memoryLocketBtn) {
            memoryLocketBtn.textContent = "浏览忆境纪念盒收集情况";
        }
        window.SaveRenderer.renderJournal(currentSave, currentGame);
    } else {
        journalBtn.textContent = "浏览猎人日志";
        journalPanel.style.display = "none";
        missingList.style.display = "block";
        result.style.display = "block";
        updateModifierVisibility();
        window.SaveRenderer.renderResult(currentSave, currentGame, currentFullJson);
    }
};

document.getElementById("rescueBtn").onclick = () => {
    if (!window.SaveRenderer) return;
    if (!currentSave) return;
    isRescueView = !isRescueView;
    const rescuePanel = document.getElementById("rescuePanel");
    const rescueBtn = document.getElementById("rescueBtn");
    const journalPanel = document.getElementById("journalPanel");
    const journalBtn = document.getElementById("journalBtn");
    const missingList = document.getElementById("missingList");
    const result = document.getElementById("result");
    const modifierUI = document.getElementById("modifierUI");
    const memoryLocketPanel = document.getElementById("memoryLocketPanel");
    const memoryLocketBtn = document.getElementById("memoryLocketBtn");

    if (isRescueView) {
        rescueBtn.textContent = getRescueButtonText(true);
        missingList.style.display = "none";
        result.style.display = "none";
        modifierUI.style.display = "none";
        rescuePanel.style.display = "block";
        isJournalView = false;
        isMemoryLocketView = false;
        journalPanel.style.display = "none";
        journalBtn.textContent = "浏览猎人日志";
        if (memoryLocketPanel) {
            memoryLocketPanel.style.display = "none";
        }
        if (memoryLocketBtn) {
            memoryLocketBtn.textContent = "浏览忆境纪念盒收集情况";
        }
        window.SaveRenderer.renderRescue(currentSave, currentGame, currentFullJson);
    } else {
        rescueBtn.textContent = getRescueButtonText(false);
        rescuePanel.style.display = "none";
        missingList.style.display = "block";
        result.style.display = "block";
        updateModifierVisibility();
        window.SaveRenderer.renderResult(currentSave, currentGame, currentFullJson);
    }
};

function updateModifierVisibility() {
    const toggle = document.getElementById("modifierToggle");
    const modifierUI = document.getElementById("modifierUI");
    const exportBtn = document.getElementById("exportBtn");
    const modifierControls = document.getElementById("modifierControls");
    const journalBtn = document.getElementById("journalBtn");
    const rescueBtn = document.getElementById("rescueBtn");
    
    const hasData = currentSave !== null;
    const isEnabled = toggle.checked;
    const hasModifiableItems = currentGame.modifiableItems && currentGame.modifiableItems.length > 0;

    // Show container when data is parsed
    if (hasData) {
        modifierControls.style.display = "flex";
    } else {
        modifierControls.style.display = "none";
        // Reset toggle if hidden? Maybe not needed.
    }

    // Journal button appears after parse
    journalBtn.style.display = hasData ? "inline-block" : "none";
    if (rescueBtn) {
        rescueBtn.style.display = hasData ? "inline-block" : "none";
    }
    const memoryLocketBtn = document.getElementById("memoryLocketBtn");
    if (memoryLocketBtn) {
        memoryLocketBtn.style.display = (hasData && currentGame.id === "silksong") ? "inline-block" : "none";
    }

    // Control the UI and Export visibility based on Toggle
    if (hasData && hasModifiableItems && isEnabled) {
        modifierUI.style.display = "block";
        exportBtn.style.display = "inline-block";
    } else {
        modifierUI.style.display = "none";
        exportBtn.style.display = "none";
    }
}

document.getElementById("modifierToggle").onchange = updateModifierVisibility;

function switchGame(gameId) {
    if (!window.GAMES || !window.GAMES[gameId]) return;

    currentGame = window.GAMES[gameId];
    document.getElementById("pageTitle").textContent = currentGame.title;

    document.getElementById("hkBtn").classList.toggle("active", gameId === 'hollow');
    document.getElementById("ssBtn").classList.toggle("active", gameId === 'silksong');

    // Reset File Input
    document.getElementById("fileInput").value = "";

    // Reset Result Areas
    const resultDiv = document.getElementById("result");
    const missingListDiv = document.getElementById("missingList");
    resultDiv.innerHTML = "";
    missingListDiv.innerHTML = "";
    resultDiv.style.display = "block";
    missingListDiv.style.display = "block";
    
    // Clear Modifier UI
    document.getElementById("modifierUI").style.display = "none";
    document.getElementById("modifierList").innerHTML = "";
    document.getElementById("exportBtn").style.display = "none";
    document.getElementById("journalPanel").style.display = "none";
    document.getElementById("journalContent").innerHTML = "";
    document.getElementById("journalBtn").textContent = "浏览猎人日志";
    isJournalView = false;
    const rescuePanel = document.getElementById("rescuePanel");
    const rescueContent = document.getElementById("rescueContent");
    const rescueBtn = document.getElementById("rescueBtn");
    if (rescuePanel) {
        rescuePanel.style.display = "none";
    }
    if (rescueContent) {
        rescueContent.innerHTML = "";
    }
    if (rescueBtn) {
        rescueBtn.textContent = getRescueButtonText(false);
    }
    isRescueView = false;
    const memoryLocketPanel = document.getElementById("memoryLocketPanel");
    const memoryLocketContent = document.getElementById("memoryLocketContent");
    const memoryLocketBtn = document.getElementById("memoryLocketBtn");
    if (memoryLocketPanel) {
        memoryLocketPanel.style.display = "none";
    }
    if (memoryLocketContent) {
        memoryLocketContent.innerHTML = "";
    }
    if (memoryLocketBtn) {
        memoryLocketBtn.textContent = "浏览忆境纪念盒收集情况";
    }
    isMemoryLocketView = false;
    
    // Update path hint
    const paths = {
        hollow: String.raw`C:\Users\%USERNAME%\AppData\LocalLow\Team Cherry\Hollow Knight`,
        silksong: String.raw`C:\Users\%USERNAME%\AppData\LocalLow\Team Cherry\Hollow Knight Silksong`
    };
    const pathDisplay = document.getElementById("savePathDisplay");
    if (pathDisplay) {
        pathDisplay.textContent = paths[gameId] || paths.hollow;
    }

    currentSave = null;
    currentFullJson = null;
    currentMeta = null;
    
    updateModifierVisibility();
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

// Initialize UI state on load
if (document.getElementById("rescueBtn")) {
    document.getElementById("rescueBtn").textContent = getRescueButtonText(false);
}
