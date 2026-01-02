(function(window) {
    const SaveRenderer = {
        renderResult: function(save, gameConfig, fullJson) {
            const missingListDiv = document.getElementById("missingList");
            const root = document.getElementById("result");

            // 1️⃣ 清空旧渲染，避免重复
            missingListDiv.innerHTML = "";
            root.innerHTML = "";

            if (!window.SaveCalculator) {
                console.error("SaveCalculator not found!");
                return;
            }

            // 2️⃣ 计算完成度
            // Use passed fullJson, or fallback to window.currentFullJson if available (for backward compat)
            const effectiveFullJson = fullJson || window.currentFullJson || null;
            const { total, missing, detailedSections } = window.SaveCalculator.calculateCompletion(save, gameConfig, effectiveFullJson);

            // 3️⃣ 渲染缺失列表
            missingListDiv.innerHTML = `
                <h2 class="completion-stat">进度 ${total}/${gameConfig.maxPercent}%</h2>
                
                <div class="missing-content">
                    <div class="missing-sub">缺失项目 ${missing.length} 个</div>
                    <ul>${missing.map(m => `<li>[${m.category}] ${m.name}</li>`).join("")}</ul>
                </div>
            `;

            // 4️⃣ 渲染详细 section
            detailedSections.forEach(section => {
                // 🔁 查找或创建同名 details（防止重复）
                let block = Array.from(root.children).find(
                    el =>
                        el.tagName === "DETAILS" &&
                        el.querySelector("summary")?.textContent === section.category
                );

                let sectionItems;
                if (!block) {
                    block = document.createElement("details");
                    block.open = true;

                    const summary = document.createElement("summary");
                    summary.textContent = section.category;
                    block.appendChild(summary);

                    sectionItems = document.createElement("div");
                    sectionItems.className = "section-items";
                    block.appendChild(sectionItems);

                    root.appendChild(block);
                } else {
                    sectionItems = block.querySelector(".section-items");
                }

                // 渲染 items
                section.items.forEach(item => {
                    // === Group Item Rendering ===
                    if (item.type === 'group') {
                        const groupContainer = document.createElement("div");
                        groupContainer.className = "item-group";
                        
                        // Attach original index to preserve L-R order in fan view
                        const itemsWithIndex = item.items.map((subItem, idx) => ({...subItem, originalIndex: idx}));

                        // Sort items: Uncompleted first (bottom), Completed last (top)
                        // This ensures "Completed" items are visible on top of the stack (covering uncompleted ones)
                        const uncompleted = itemsWithIndex.filter(i => !i.done);
                        const completed = itemsWithIndex.filter(i => i.done);
                        const sortedItems = [...uncompleted, ...completed];

                        sortedItems.forEach((subItem) => {
                            const el = document.createElement(subItem.wiki ? "a" : "div");
                            el.className = `item group-item ${subItem.done ? "done" : "missing"}`;
                            
                            // Set CSS variables for fan effect using ORIGINAL index
                            el.style.setProperty('--i', subItem.originalIndex);
                            el.style.setProperty('--n', item.items.length);

                            if (subItem.wiki) {
                                el.href = subItem.wiki;
                                el.target = "_blank";
                                el.rel = "noopener noreferrer";
                                el.title = subItem.name;
                            }

                            // Add Description Tooltip (Group Item)
                            if (subItem.desc) {
                                const tooltip = document.createElement('div');
                                tooltip.className = 'tooltip-text';
                                tooltip.innerHTML = subItem.desc;
                                el.appendChild(tooltip);
                            }

                            // If locationImage exists, make the whole card clickable to open Lightbox
                            if (subItem.locationImage) {
                                el.style.cursor = 'pointer';
                                // Add hover hint
                                const currentTitle = el.title || "";
                                el.title = currentTitle ? `${currentTitle} (点击打开地图位置图片)` : "点击打开地图位置图片";

                                // Override default click if it's a link, or add listener if div
                                el.addEventListener('click', (e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    window.SaveRenderer.openLightbox(subItem.locationImage, subItem.name);
                                });
                            }

                            if (subItem.icon) {
                                const iconWrapper = document.createElement("div");
                                iconWrapper.className = "icon-wrapper";
                                const img = document.createElement("img");
                                img.src = subItem.icon;
                                img.className = "item-icon";
                                img.referrerPolicy = "no-referrer";
                                img.onerror = () => { iconWrapper.style.display = 'none'; };
                                iconWrapper.appendChild(img);
                                el.appendChild(iconWrapper);
                            }

                            const span = document.createElement("span");
                            span.textContent = subItem.name;
                            el.appendChild(span);

                            groupContainer.appendChild(el);
                        });
                        
                        sectionItems.appendChild(groupContainer);
                        return;
                    }

                    // 1️⃣ 创建容器 (如果是链接则用 a 标签)
                    // If item has locationImage, prefer 'div' (unless we want to preserve wiki link as secondary)
                    // But user requested "click this to open image".
                    // So we will use 'div' if locationImage is present, or 'a' if only wiki.
                    // Or keep 'a' but override click. Let's keep existing logic but attach listener.
                    const el = document.createElement(item.wiki ? "a" : "div");
                    el.className = `item ${item.done ? "done" : "missing"}`;
                    
                    if (item.wiki) {
                        el.href = item.wiki;
                        el.target = "_blank";
                        el.rel = "noopener noreferrer";
                        el.title = "点击查看 Wiki";
                    }

                    // Add Description Tooltip (Standard Item)
                    if (item.desc) {
                        const tooltip = document.createElement('div');
                        tooltip.className = 'tooltip-text';
                        tooltip.innerHTML = item.desc;
                        el.appendChild(tooltip);
                    }

                    // If locationImage exists, make the whole card clickable to open Lightbox
                    if (item.locationImage) {
                        el.style.cursor = 'pointer';
                        
                        // Add hover hint
                        const currentTitle = el.title || "";
                        el.title = currentTitle ? `${currentTitle} (点击打开地图位置图片)` : "点击打开地图位置图片";

                        el.addEventListener('click', (e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            window.SaveRenderer.openLightbox(item.locationImage, item.name);
                        });
                    }

                    // 2️⃣ 添加图标 (如果有)
                    if (item.icon) {
                        const iconWrapper = document.createElement("div");
                        iconWrapper.className = "icon-wrapper";

                        const img = document.createElement("img");
                        img.src = item.icon;
                        img.className = "item-icon";
                        img.referrerPolicy = "no-referrer"; // 尝试绕过防盗链
                        // 图片加载失败时隐藏，避免裂图
                        img.onerror = () => { 
                            console.warn('Image failed to load:', item.icon);
                            iconWrapper.style.display = 'none'; // 整个wrapper隐藏
                        }; 
                        
                        iconWrapper.appendChild(img);
                        el.appendChild(iconWrapper);
                    }

                    // 3️⃣ 添加文字
                    const span = document.createElement("span");
                    span.textContent = item.name;
                    el.appendChild(span);

                    sectionItems.appendChild(el);
                });
            });
        },

        // === Lightbox Functionality ===
        _lightboxState: {
            isDragging: false,
            scale: 1,
            panning: false,
            pointX: 0,
            pointY: 0,
            startX: 0,
            startY: 0
        },

        openLightbox: function(url, title) {
            let overlay = document.getElementById('global-lightbox');
            if (!overlay) {
                // Create Lightbox
                overlay = document.createElement('div');
                overlay.id = 'global-lightbox';
                overlay.className = 'lightbox-overlay';
                
                const wrapper = document.createElement('div');
                wrapper.className = 'lightbox-content-wrapper';
                
                const closeBtn = document.createElement('div');
                closeBtn.className = 'lightbox-close';
                closeBtn.innerHTML = '×';
                closeBtn.title = '关闭 (Close)';
                closeBtn.onclick = () => {
                    overlay.classList.remove('active');
                    setTimeout(() => overlay.style.display = 'none', 300);
                };
                
                const img = document.createElement('img');
                img.className = 'lightbox-content';
                img.id = 'lightbox-img';
                img.referrerPolicy = "no-referrer"; // Avoid hotlink protection
                img.onerror = () => {
                    console.error('Lightbox image failed to load');
                    // Optional: show placeholder or error message
                };
                
                const titleEl = document.createElement('div');
                titleEl.className = 'lightbox-title';
                
                wrapper.appendChild(img);
                // Move close button inside wrapper but absolute positioned relative to it?
                // Or better, keep it outside or ensure z-index is high.
                // Let's keep it in wrapper for transform consistency or move out?
                // If we move it out, it stays fixed while image zooms. This is usually better.
                // Let's append to overlay instead of wrapper for the close button to be static relative to screen.
                overlay.appendChild(closeBtn);
                
                wrapper.appendChild(titleEl);
                overlay.appendChild(wrapper);
                document.body.appendChild(overlay);
                
                // --- Zoom & Pan Logic ---
                const state = this._lightboxState;

                const setTransform = () => {
                    wrapper.style.transform = `translate(${state.pointX}px, ${state.pointY}px) scale(${state.scale})`;
                };

                // Zoom (Wheel)
                overlay.addEventListener('wheel', (e) => {
                    e.preventDefault();
                    const xs = (e.clientX - state.pointX) / state.scale;
                    const ys = (e.clientY - state.pointY) / state.scale;
                    
                    const delta = -Math.sign(e.deltaY);
                    const step = 0.1;
                    
                    let newScale = state.scale + (delta * step);
                    if (newScale < 0.5) newScale = 0.5; // Min zoom
                    if (newScale > 5) newScale = 5;     // Max zoom

                    state.pointX = e.clientX - xs * newScale;
                    state.pointY = e.clientY - ys * newScale;
                    state.scale = newScale;

                    setTransform();
                });

                // Pan (Drag)
                const onMouseDown = (e) => {
                    // Only drag if target is image or wrapper
                    if (e.target !== img && e.target !== wrapper && e.target !== overlay) return;
                    
                    e.preventDefault();
                    state.startX = e.clientX - state.pointX;
                    state.startY = e.clientY - state.pointY;
                    state.panning = true;
                    state.hasMoved = false; // Reset drag flag
                    wrapper.style.cursor = 'grabbing';
                    img.style.cursor = 'grabbing';
                };

                const onMouseMove = (e) => {
                    if (!state.panning) return;
                    e.preventDefault();
                    
                    // Only mark as moved if there's actual movement distance > threshold
                    // But here we update continuously, so just checking movement is enough.
                    state.hasMoved = true;
                    
                    state.pointX = e.clientX - state.startX;
                    state.pointY = e.clientY - state.startY;
                    setTransform();
                };

                const onMouseUp = () => {
                    state.panning = false;
                    wrapper.style.cursor = 'grab';
                    img.style.cursor = 'grab';
                };

                overlay.addEventListener('mousedown', onMouseDown);
                overlay.addEventListener('mousemove', onMouseMove);
                overlay.addEventListener('mouseup', onMouseUp);
                overlay.addEventListener('mouseleave', onMouseUp);

                // Close on background click (if not dragging)
                overlay.addEventListener('click', (e) => {
                    // Prevent closing if we just dragged
                    if (state.hasMoved) return;

                    if (e.target === overlay) {
                        closeBtn.click();
                    }
                });
            }
            
            // Reset State
            const state = this._lightboxState;
            state.scale = 1;
            state.pointX = 0;
            state.pointY = 0;
            state.panning = false;
            state.hasMoved = false;
            
            const wrapper = overlay.querySelector('.lightbox-content-wrapper');
            wrapper.style.transform = `translate(0px, 0px) scale(1)`;
            wrapper.style.cursor = 'grab';

            const img = overlay.querySelector('#lightbox-img');
            img.src = url;
            
            const titleEl = overlay.querySelector('.lightbox-title');
            titleEl.textContent = title || '';
            
            const closeBtn = overlay.querySelector('.lightbox-close');
            
            // Re-bind ESC and Close logic for every open session
            const escHandler = (e) => {
                if (e.key === "Escape") {
                    closeBtn.click();
                }
            };
            document.addEventListener('keydown', escHandler);

            closeBtn.onclick = () => {
                document.removeEventListener('keydown', escHandler);
                overlay.classList.remove('active');
                setTimeout(() => overlay.style.display = 'none', 300);
            };

            overlay.style.display = 'flex';
            // Trigger reflow
            overlay.offsetHeight; 
            overlay.classList.add('active');
        },

        renderModifier: function(save, gameConfig) {
            const modifierList = document.getElementById("modifierList");
            
            // Clear list
            modifierList.innerHTML = "";

            // Check if modifiable items exist
            if (!gameConfig.modifiableItems || gameConfig.modifiableItems.length === 0) {
                return;
            }

            gameConfig.modifiableItems.forEach(item => {
                const container = document.createElement("div");
                container.className = "modifier-item";

                // Tooltip
                if (item.desc) {
                    const tooltip = document.createElement("div");
                    tooltip.className = "tooltip-text";
                    tooltip.innerHTML = item.desc; // Allow HTML in description
                    container.appendChild(tooltip);
                }

                const label = document.createElement("label");
                label.textContent = item.name;
                container.appendChild(label);

                let input;
                const currentValue = item.getValue(save);

                if (item.type === 'boolean') {
                    input = document.createElement("select");

                    // If preventManualTrue is set and current value is false, disable input or restrict options
                    if (item.preventManualTrue && !currentValue) {
                        input.disabled = true;
                        input.title = "此项不可手动标记为完成，仅支持从完成状态回退";
                    }
                    
                    const optTrue = document.createElement("option");
                    optTrue.value = "true";
                    optTrue.textContent = item.trueText || "已获得 / 是";
                    optTrue.selected = !!currentValue;

                    const optFalse = document.createElement("option");
                    optFalse.value = "false";
                    optFalse.textContent = item.falseText || "未获得 / 否";
                    optFalse.selected = !currentValue;

                    input.appendChild(optTrue);
                    input.appendChild(optFalse);

                    input.onchange = (e) => {
                        const val = e.target.value === "true";
                        item.setValue(save, val);
                        // Re-render results to show impact
                        window.SaveRenderer.renderResult(save, gameConfig);
                    };

                } else if (item.type === 'number') {
                    input = document.createElement("input");
                    input.type = "number";
                    input.value = currentValue;
                    
                    input.onchange = (e) => {
                        const val = parseInt(e.target.value);
                        item.setValue(save, val);
                        window.SaveRenderer.renderResult(save, gameConfig);
                    };
                }

                if (input) {
                    container.appendChild(input);
                    modifierList.appendChild(container);
                }
            });
        },

        renderSceneData: function(sceneData) {
            const container = document.getElementById("sceneDataList");
            container.innerHTML = ""; // Clear

            if (!sceneData) return;

            // Create a main Details element
            const mainDetails = document.createElement("details");
            // mainDetails.open = false; // Closed by default
            
            const summary = document.createElement("summary");
            summary.textContent = "场景数据 (Scene Data)";
            mainDetails.appendChild(summary);

            const content = document.createElement("div");
            content.style.padding = "20px";
            content.style.color = "var(--text-main)";

            // Helper to render a list of items grouped by SceneName
            const renderGroupedItems = (title, items, valueKey, sceneKey, idKey) => {
                if (!items || items.length === 0) return;

                const sectionDetails = document.createElement("details");
                sectionDetails.style.marginBottom = "10px";
                const secSummary = document.createElement("summary");
                secSummary.textContent = `${title} (${items.length})`;
                secSummary.style.fontSize = "1.1rem";
                secSummary.style.color = "var(--text-muted)";
                sectionDetails.appendChild(secSummary);

                const table = document.createElement("table");
                table.style.width = "100%";
                table.style.borderCollapse = "collapse";
                table.style.marginTop = "10px";
                table.style.fontSize = "0.9rem";

                // Group by sceneName
                const grouped = {};
                items.forEach(item => {
                    // Try to resolve scene name from configured key, fallback to common keys
                    const scene = item[sceneKey] || item.SceneName || item.sceneName || "Global";
                    if (!grouped[scene]) grouped[scene] = [];
                    grouped[scene].push(item);
                });

                // Sort scenes alphabetically
                Object.keys(grouped).sort().forEach(scene => {
                    // Scene Header Row
                    const sceneRow = document.createElement("tr");
                    sceneRow.style.background = "rgba(255,255,255,0.1)";
                    const sceneCell = document.createElement("td");
                    sceneCell.colSpan = 2;
                    sceneCell.textContent = scene;
                    sceneCell.style.padding = "8px";
                    sceneCell.style.fontWeight = "bold";
                    sceneRow.appendChild(sceneCell);
                    table.appendChild(sceneRow);

                    // Items
                    grouped[scene].forEach(item => {
                        const tr = document.createElement("tr");
                        tr.style.borderBottom = "1px solid rgba(255,255,255,0.05)";
                        
                        const tdName = document.createElement("td");
                        // Resolve ID/Name
                        tdName.textContent = item[idKey] || item.id || item.ID || item.name || item.Name || "Unknown";
                        tdName.style.padding = "6px 8px 6px 20px"; // Indent

                        const tdValue = document.createElement("td");
                        // Try to find the value based on typical keys if valueKey is not found
                        let val = item[valueKey];
                        if (val === undefined && valueKey === "value") val = item.value; // Explicit check
                        if (val === undefined) {
                            // Fallback for unknown structure
                             val = JSON.stringify(item);
                        }
                        
                        tdValue.textContent = val;
                        tdValue.style.padding = "6px";
                        tdValue.style.textAlign = "right";
                        tdValue.style.fontFamily = "monospace";

                        tr.appendChild(tdName);
                        tr.appendChild(tdValue);
                        table.appendChild(tr);
                    });
                });

                sectionDetails.appendChild(table);
                content.appendChild(sectionDetails);
            };

            // 使用 SCENE_DATA_MAP 进行驱动解析
            const map = window.SCENE_DATA_MAP || {};
            const knownKeys = new Set(Object.keys(map));

            // Iterate through defined map keys
            Object.keys(map).forEach(key => {
                const config = map[key];
                let data = sceneData[key];

                if (!data) return;

                // Handle Unity serialization wrapper
                if (!Array.isArray(data) && data.serializedList) {
                    data = data.serializedList;
                }

                if (Array.isArray(data)) {
                    renderGroupedItems(config.label, data, config.valueKey, config.sceneKey, config.idKey);
                }
            });

            // Fallback: If no known lists, just dump keys
            const otherKeys = Object.keys(sceneData).filter(k => !knownKeys.has(k));

            if (otherKeys.length > 0) {
                 const otherDetails = document.createElement("details");
                 const otherSummary = document.createElement("summary");
                 otherSummary.textContent = "Other Data";
                 otherDetails.appendChild(otherSummary);
                 
                 const pre = document.createElement("pre");
                 pre.style.background = "rgba(0,0,0,0.3)";
                 pre.style.padding = "10px";
                 pre.style.overflowX = "auto";
                 
                 // Construct a clean object with just other keys
                 const otherObj = {};
                 otherKeys.forEach(k => otherObj[k] = sceneData[k]);
                 pre.textContent = JSON.stringify(otherObj, null, 2);
                 
                 otherDetails.appendChild(pre);
                 content.appendChild(otherDetails);
            }

            mainDetails.appendChild(content);
            container.appendChild(mainDetails);
        }
    };

    window.SaveRenderer = SaveRenderer;
})(window);
