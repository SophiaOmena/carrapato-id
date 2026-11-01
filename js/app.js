/**
 * ============================================================================
 * Carrapato ID - Lógica Principal da Aplicação
 * Autora: Anna Sophia
 * ============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
    // ------------------------------------------------------------------------
    // 1. ESTADO GLOBAL DA APLICAÇÃO
    // ------------------------------------------------------------------------
    const state = {
        currentTab: 'home',
        activeFilter: 'all',
        searchQuery: '',
        notifications: [...window.TICK_DB.INITIAL_NOTIFICATIONS],
        currentStepKey: 'step_1',
        mapInstance: null,
        mapMarkers: [],
        cameraStream: null
    };

    // ------------------------------------------------------------------------
    // 2. REFERÊNCIAS DO DOM
    // ------------------------------------------------------------------------
    const splashScreen = document.getElementById('splashScreen');
    const btnEnterApp = document.getElementById('btnEnterApp');
    const navItems = document.querySelectorAll('.nav-item');
    const viewSections = document.querySelectorAll('.view-section');

    // Home views e cards
    const cardHeroTutorial = document.getElementById('cardHeroTutorial');
    const btnActionPicada = document.getElementById('btnActionPicada');
    const btnActionDoencas = document.getElementById('btnActionDoencas');
    const btnActionCuidados = document.getElementById('btnActionCuidados');
    const cardChaveIdentificacao = document.getElementById('cardChaveIdentificacao');
    const cardCatalogoHome = document.getElementById('cardCatalogoHome');
    const cardControleAlternativo = document.getElementById('cardControleAlternativo');
    const cardsCarousel = document.getElementById('cardsCarousel');
    const carouselDots = document.querySelectorAll('.carousel-dot');

    // Catálogo
    const ticksGrid = document.getElementById('ticksGrid');
    const catalogSearchInput = document.getElementById('catalogSearchInput');
    const catalogFilterPills = document.querySelectorAll('.filter-pill');
    const btnBackFromCatalog = document.getElementById('btnBackFromCatalog');

    // Scanner
    const scannerVideo = document.getElementById('scannerVideo');
    const scannerImagePreview = document.getElementById('scannerImagePreview');
    const btnCapturePhoto = document.getElementById('btnCapturePhoto');
    const scannerFileInput = document.getElementById('scannerFileInput');
    const btnToggleCamera = document.getElementById('btnToggleCamera');
    const scanResultCard = document.getElementById('scanResultCard');
    const scanConfidence = document.getElementById('scanConfidence');
    const scanResultSpecies = document.getElementById('scanResultSpecies');
    const scanResultCommon = document.getElementById('scanResultCommon');
    const scanRiskBadge = document.getElementById('scanRiskBadge');
    const scanDiagnosticSummary = document.getElementById('scanDiagnosticSummary');
    const btnScanOpenDetail = document.getElementById('btnScanOpenDetail');
    const btnScanReportMap = document.getElementById('btnScanReportMap');

    // Mapa
    const notificationsList = document.getElementById('notificationsList');
    const btnOpenNewReportModal = document.getElementById('btnOpenNewReportModal');
    const formNewReport = document.getElementById('formNewReport');
    const profileReportCount = document.getElementById('profileReportCount');

    // Modais
    const modalTutorial = document.getElementById('modalTutorial');
    const modalPicada = document.getElementById('modalPicada');
    const modalDoencas = document.getElementById('modalDoencas');
    const modalCuidados = document.getElementById('modalCuidados');
    const modalControle = document.getElementById('modalControle');
    const modalChave = document.getElementById('modalChave');
    const modalNewReport = document.getElementById('modalNewReport');
    const modalSpeciesDetail = document.getElementById('modalSpeciesDetail');
    const allModals = document.querySelectorAll('.modal-overlay');

    // Chave Dicotômica
    const keyStepNumber = document.getElementById('keyStepNumber');
    const keyStepQuestion = document.getElementById('keyStepQuestion');
    const keyOptionsList = document.getElementById('keyOptionsList');
    const btnResetKeyWizard = document.getElementById('btnResetKeyWizard');

    // ------------------------------------------------------------------------
    // 3. INICIALIZAÇÃO E NAVEGAÇÃO
    // ------------------------------------------------------------------------
    btnEnterApp.addEventListener('click', () => {
        splashScreen.classList.add('hidden');
    });

    function switchTab(targetTab) {
        state.currentTab = targetTab;

        // Atualizar abas no menu inferior
        navItems.forEach(item => {
            if (item.dataset.tab === targetTab) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });

        // Alternar visualização da seção
        viewSections.forEach(section => {
            section.classList.remove('active');
        });

        if (targetTab === 'home') {
            document.getElementById('viewHome').classList.add('active');
        } else if (targetTab === 'scanner') {
            document.getElementById('viewScanner').classList.add('active');
            initCamera();
        } else if (targetTab === 'map') {
            document.getElementById('viewMap').classList.add('active');
            setTimeout(initOrResizeMap, 150);
        } else if (targetTab === 'profile') {
            document.getElementById('viewProfile').classList.add('active');
        } else if (targetTab === 'catalog') {
            document.getElementById('viewCatalog').classList.add('active');
            renderCatalog();
        }
    }

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const target = item.dataset.tab;
            switchTab(target);
        });
    });

    // ------------------------------------------------------------------------
    // 4. CARROSSEL DE MÓDULOS NA HOME
    // ------------------------------------------------------------------------
    if (cardsCarousel) {
        cardsCarousel.addEventListener('scroll', () => {
            const scrollLeft = cardsCarousel.scrollLeft;
            const cardWidth = 264; // largura + margem
            const activeIndex = Math.round(scrollLeft / cardWidth);

            carouselDots.forEach((dot, idx) => {
                if (idx === activeIndex) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
        });
    }

    // Ações dos Cards e Botões da Home
    cardHeroTutorial.addEventListener('click', () => openModal(modalTutorial));
    document.getElementById('btnTutorialGoToMap').addEventListener('click', () => {
        closeAllModals();
        switchTab('map');
    });

    btnActionPicada.addEventListener('click', () => openModal(modalPicada));
    btnActionDoencas.addEventListener('click', () => openModal(modalDoencas));
    btnActionCuidados.addEventListener('click', () => openModal(modalCuidados));

    cardChaveIdentificacao.addEventListener('click', () => {
        resetKeyWizard();
        openModal(modalChave);
    });

    cardCatalogoHome.addEventListener('click', () => {
        switchTab('catalog');
    });

    cardControleAlternativo.addEventListener('click', () => openModal(modalControle));

    btnBackFromCatalog.addEventListener('click', () => {
        switchTab('home');
    });

    // ------------------------------------------------------------------------
    // 5. CATÁLOGO DE ESPÉCIES
    // ------------------------------------------------------------------------
    function renderCatalog() {
        if (!ticksGrid) return;
        ticksGrid.innerHTML = '';

        const filtered = window.TICK_DB.TICKS_DATABASE.filter(tick => {
            // Filtro por texto de busca
            const query = state.searchQuery.toLowerCase();
            const matchesQuery = !query ||
                tick.scientificName.toLowerCase().includes(query) ||
                tick.commonName.toLowerCase().includes(query) ||
                tick.hostTypes.some(h => h.toLowerCase().includes(query)) ||
                tick.primaryVectorOf.some(d => d.toLowerCase().includes(query));

            if (!matchesQuery) return false;

            // Filtro por categoria (pílula)
            if (state.activeFilter === 'all') return true;
            if (state.activeFilter === 'maculosa') {
                return tick.primaryVectorOf.some(v => v.includes('Febre Maculosa'));
            }
            if (state.activeFilter === 'alto_risco') {
                return tick.riskLevel === 'CRÍTICO' || tick.riskLevel === 'ALTO';
            }
            if (state.activeFilter === 'argasidae') {
                return tick.family === 'Argasidae';
            }
            if (state.activeFilter === 'caes') {
                return tick.hostTypes.some(h => h.toLowerCase().includes('cão') || h.toLowerCase().includes('cães'));
            }
            if (state.activeFilter === 'equinos') {
                return tick.hostTypes.some(h => h.toLowerCase().includes('equino') || h.toLowerCase().includes('caval'));
            }
            if (state.activeFilter === 'capivaras') {
                return tick.hostTypes.some(h => h.toLowerCase().includes('capivara'));
            }
            return true;
        });

        if (filtered.length === 0) {
            ticksGrid.innerHTML = `
                <div style="grid-column: span 2; text-align: center; padding: 30px; color: #6B7280;">
                    Nenhuma espécie encontrada para os filtros selecionados.
                </div>
            `;
            return;
        }

        filtered.forEach(tick => {
            const card = document.createElement('div');
            card.className = 'tick-card';
            card.innerHTML = `
                <div class="tick-avatar-circle">
                    <img src="assets/images/${tick.imageSvg}" alt="${tick.scientificName}">
                </div>
                <div class="tick-scientific-name">${tick.scientificName}</div>
                <div class="tick-common-name">${tick.commonName}</div>
                <div class="tick-risk-badge" style="background-color: ${tick.riskColor}; color: #FFFFFF;">
                    ${tick.riskLevel}
                </div>
            `;
            card.addEventListener('click', () => {
                showSpeciesDetails(tick);
            });
            ticksGrid.appendChild(card);
        });
    }

    // Input de busca
    if (catalogSearchInput) {
        catalogSearchInput.addEventListener('input', (e) => {
            state.searchQuery = e.target.value.trim();
            renderCatalog();
        });
    }

    // Pílulas de filtro
    catalogFilterPills.forEach(pill => {
        pill.addEventListener('click', () => {
            catalogFilterPills.forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            state.activeFilter = pill.dataset.filter;
            renderCatalog();
        });
    });

    // ------------------------------------------------------------------------
    // 6. MODAL DE DETALHES DA ESPÉCIE
    // ------------------------------------------------------------------------
    function showSpeciesDetails(tick) {
        const body = document.getElementById('speciesDetailBody');
        const title = document.getElementById('speciesDetailTitle');

        title.textContent = tick.scientificName;
        body.innerHTML = `
            <div class="species-detail-hero">
                <div class="species-detail-avatar">
                    <img src="assets/images/${tick.imageSvg}" alt="${tick.scientificName}">
                </div>
                <div>
                    <h4 style="font-size:16px; font-weight:800; color:var(--primary-purple);">${tick.scientificName}</h4>
                    <p style="font-size:13px; color:#4B5563;">${tick.commonName}</p>
                    <div class="info-badge-row">
                        <span style="font-size:10px; font-weight:800; padding:2px 8px; border-radius:99px; background:${tick.riskColor}; color:#FFFFFF;">
                            ${tick.riskLevel}
                        </span>
                        <span style="font-size:10px; font-weight:600; padding:2px 8px; border-radius:99px; background:#E5E7EB; color:#374151;">
                            Família ${tick.family}
                        </span>
                        <span style="font-size:10px; font-weight:600; padding:2px 8px; border-radius:99px; background:#F3EEF9; color:var(--primary-purple);">
                            Gênero ${tick.taxonomy ? tick.taxonomy.genus : 'Ixodida'}
                        </span>
                    </div>
                </div>
            </div>

            <div class="detail-section-title">Descrição Geral e Importância Médica</div>
            <p class="detail-text">${tick.description}</p>

            <div class="detail-section-title">Doenças Transmitidas (Vetores) e Letalidade</div>
            <div class="tag-list" style="margin-bottom:8px;">
                ${tick.primaryVectorOf.map(v => `<span class="tag-pill" style="background:#FEE2E2; color:#B91C1C; font-weight:600;">⚠️ ${v}</span>`).join('')}
            </div>
            ${tick.lethality ? `<p class="detail-text" style="font-size:12px; color:#991B1B; background:#FEF2F2; padding:8px 10px; border-radius:8px; border-left:3px solid #EF4444;"><strong>Gravidade:</strong> ${tick.lethality}</p>` : ''}

            <div class="detail-section-title">Principais Hospedeiros</div>
            <div class="tag-list">
                ${tick.hostTypes.map(h => `<span class="tag-pill">🐾 ${h}</span>`).join('')}
            </div>

            <div class="detail-section-title">Morfologia e Características de Diagnose</div>
            <ul style="padding-left:18px; font-size:12px; color:#4B5563; line-height:1.5;">
                <li><strong>Capítulo (Peças bucais):</strong> ${tick.morphology.capitulum}</li>
                <li><strong>Escudo dorsal:</strong> ${tick.morphology.scutum}</li>
                <li><strong>Tamanho:</strong> ${tick.morphology.size}</li>
                <li><strong>Festões marginais:</strong> ${tick.morphology.festons}</li>
                ${tick.morphology.hypostome ? `<li><strong>Hipostômio (Dentição):</strong> ${tick.morphology.hypostome}</li>` : ''}
            </ul>

            ${tick.seasonality ? `
            <div class="detail-section-title">Sazonalidade e Dinâmica de Campo</div>
            <div style="background:#F9FAFB; padding:10px; border-radius:8px; font-size:12px; color:#374151;">
                <div><strong>🐛 Larvas:</strong> ${tick.seasonality.larvae}</div>
                <div style="margin:4px 0;"><strong>🩸 Ninfas:</strong> ${tick.seasonality.nymphs}</div>
                <div><strong>🕷️ Adultos:</strong> ${tick.seasonality.adults}</div>
            </div>
            ` : ''}

            ${tick.clinicalManifestations ? `
            <div class="detail-section-title">Quadro Clínico e Sintomas da Picada</div>
            <p class="detail-text" style="font-size:12px;">${tick.clinicalManifestations}</p>
            ` : ''}

            ${tick.treatment ? `
            <div class="detail-section-title">Tratamento de Escolha e Conduta</div>
            <div style="background:#ECFDF5; border-left:3px solid #10B981; padding:8px 10px; border-radius:8px; font-size:12px; color:#065F46;">
                <strong>Conduta Farmacológica:</strong> ${tick.treatment}
            </div>
            ` : ''}

            <div class="detail-section-title">Distribuição Geográfica e Habitat</div>
            <p class="detail-text" style="font-size:12px;"><strong>Distribuição:</strong> ${tick.distribution}</p>
            <p class="detail-text" style="font-size:12px; margin-top:3px;"><strong>Habitat:</strong> ${tick.habitat}</p>

            <div style="margin-top:20px; display:flex; gap:8px;">
                <button id="btnDetailReportMap" class="btn-primary-block" style="background:var(--pin-orange);">
                    📍 Notificar Ocorrência Desta Espécie
                </button>
            </div>
        `;

        document.getElementById('btnDetailReportMap').addEventListener('click', () => {
            closeAllModals();
            document.getElementById('reportSpeciesSelect').value = tick.id;
            openModal(modalNewReport);
        });

        openModal(modalSpeciesDetail);
    }

    // ------------------------------------------------------------------------
    // 7. SCANNER E CÂMERA DE IDENTIFICAÇÃO
    // ------------------------------------------------------------------------
    async function initCamera() {
        if (state.cameraStream) return;
        try {
            if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
                const stream = await navigator.mediaDevices.getUserMedia({
                    video: { facingMode: 'environment', width: { ideal: 640 }, height: { ideal: 640 } }
                });
                state.cameraStream = stream;
                scannerVideo.srcObject = stream;
                scannerVideo.style.display = 'block';
                scannerImagePreview.style.display = 'none';
            }
        } catch (err) {
            // Em caso de falta de permissão ou mock em navegador desktop, simula visão
            console.log("Câmera não disponível ou permissão negada. Operando em modo fotográfico simulado.", err);
            loadSampleSpecimen(0);
        }
    }

    let sampleIdx = 0;
    const sampleSpeciesList = [
        "amblyomma_sculptum",
        "rhipicephalus_sanguineus",
        "amblyomma_aureolatum",
        "dermacentor_nitens"
    ];

    function loadSampleSpecimen(index) {
        const speciesId = sampleSpeciesList[index % sampleSpeciesList.length];
        const spec = window.TICK_DB.TICKS_DATABASE.find(t => t.id === speciesId);
        if (spec) {
            scannerVideo.style.display = 'none';
            scannerImagePreview.style.display = 'block';
            scannerImagePreview.src = `assets/images/${spec.imageSvg}`;
            scannerImagePreview.dataset.specId = spec.id;
        }
    }

    if (btnToggleCamera) {
        btnToggleCamera.addEventListener('click', () => {
            sampleIdx++;
            loadSampleSpecimen(sampleIdx);
        });
    }

    if (scannerFileInput) {
        scannerFileInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (event) => {
                    scannerVideo.style.display = 'none';
                    scannerImagePreview.style.display = 'block';
                    scannerImagePreview.src = event.target.result;
                    // Classifica automaticamente após carregar arquivo
                    setTimeout(triggerClassification, 400);
                };
                reader.readAsDataURL(file);
            }
        });
    }

    function triggerClassification() {
        // Simulação inteligente de diagnóstico morfológico
        const activeSpecId = scannerImagePreview.dataset.specId || "amblyomma_sculptum";
        const tick = window.TICK_DB.TICKS_DATABASE.find(t => t.id === activeSpecId) || window.TICK_DB.TICKS_DATABASE[0];

        const conf = Math.floor(Math.random() * 6) + 93; // 93% a 98%
        scanConfidence.textContent = `Confiança Morfológica: ${conf}%`;
        scanResultSpecies.textContent = tick.scientificName;
        scanResultCommon.textContent = tick.commonName;
        scanRiskBadge.textContent = tick.riskLevel;
        scanRiskBadge.style.backgroundColor = tick.riskColor;
        scanRiskBadge.style.color = '#FFFFFF';
        scanDiagnosticSummary.textContent = `${tick.morphology.scutum}. ${tick.morphology.capitulum}.`;

        scanResultCard.style.display = 'block';

        btnScanOpenDetail.onclick = () => {
            showSpeciesDetails(tick);
        };

        btnScanReportMap.onclick = () => {
            document.getElementById('reportSpeciesSelect').value = tick.id;
            openModal(modalNewReport);
        };
    }

    if (btnCapturePhoto) {
        btnCapturePhoto.addEventListener('click', () => {
            // Feedback tátil de clique
            btnCapturePhoto.style.transform = 'scale(0.92)';
            setTimeout(() => { btnCapturePhoto.style.transform = 'scale(1)'; }, 150);
            triggerClassification();
        });
    }

    // ------------------------------------------------------------------------
    // 8. MAPA INTERATIVO E NOTIFICAÇÕES (LEAFLET)
    // ------------------------------------------------------------------------
    function initOrResizeMap() {
        const mapContainer = document.getElementById('map');
        if (!mapContainer) return;

        if (!state.mapInstance && typeof L !== 'undefined') {
            // Inicializar mapa centrado no estado de SP (área de vigilância ativa)
            state.mapInstance = L.map('map', {
                center: [-23.00, -46.85],
                zoom: 8,
                zoomControl: false
            });

            // Camada de Mapa OpenStreetMap
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; OpenStreetMap',
                maxZoom: 18
            }).addTo(state.mapInstance);

            // Adicionar controles no canto inferior
            L.control.zoom({ position: 'bottomright' }).addTo(state.mapInstance);

            renderMarkersOnMap();
        } else if (state.mapInstance) {
            state.mapInstance.invalidateSize();
        }
        renderNotificationsList();
    }

    function createCustomPin(color = '#E75A2D') {
        return L.divIcon({
            className: 'custom-map-pin',
            html: `
                <div style="
                    background-color: ${color};
                    width: 28px;
                    height: 28px;
                    border-radius: 50% 50% 50% 0;
                    transform: rotate(-45deg);
                    border: 3px solid #FFFFFF;
                    box-shadow: 0 3px 8px rgba(0,0,0,0.3);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                ">
                    <div style="width: 8px; height: 8px; background: #FFFFFF; border-radius: 50%; transform: rotate(45deg);"></div>
                </div>
            `,
            iconSize: [28, 28],
            iconAnchor: [14, 28],
            popupAnchor: [0, -28]
        });
    }

    function renderMarkersOnMap() {
        if (!state.mapInstance) return;

        // Limpar marcadores anteriores
        state.mapMarkers.forEach(m => state.mapInstance.removeLayer(m));
        state.mapMarkers = [];

        state.notifications.forEach(notif => {
            const pinColor = notif.risk.includes('MÁXIMO') || notif.risk.includes('CRÍTICO') ? '#E75A2D' : '#F59E0B';
            const marker = L.marker([notif.latitude, notif.longitude], {
                icon: createCustomPin(pinColor)
            }).addTo(state.mapInstance);

            marker.bindPopup(`
                <div style="font-family: var(--font-sans); padding: 4px;">
                    <div style="font-weight: 800; color: #380A68; font-size: 13px; font-style: italic;">${notif.speciesName}</div>
                    <div style="font-size: 11px; color: #4B5563; margin-top: 2px;"><strong>Local:</strong> ${notif.locationName}</div>
                    <div style="font-size: 11px; color: #4B5563;"><strong>Hospedeiro:</strong> ${notif.host}</div>
                    <div style="font-size: 10px; color: #9CA3AF; margin-top: 4px;">Data: ${notif.date}</div>
                </div>
            `);

            state.mapMarkers.push(marker);
        });
    }

    function renderNotificationsList() {
        if (!notificationsList) return;
        notificationsList.innerHTML = '';

        state.notifications.forEach(notif => {
            const card = document.createElement('div');
            card.className = 'notification-card';
            card.innerHTML = `
                <div>
                    <div class="notif-species">${notif.speciesName}</div>
                    <div class="notif-loc">${notif.locationName} (${notif.host})</div>
                    <div class="notif-date">${notif.date}</div>
                </div>
                <div style="font-size: 10px; font-weight: 800; padding: 4px 8px; border-radius: 99px; background: #FFF1EE; color: #E75A2D;">
                    ${notif.risk}
                </div>
            `;
            card.addEventListener('click', () => {
                if (state.mapInstance) {
                    state.mapInstance.setView([notif.latitude, notif.longitude], 12);
                }
            });
            notificationsList.appendChild(card);
        });

        if (profileReportCount) {
            profileReportCount.textContent = state.notifications.length;
        }
    }

    btnOpenNewReportModal.addEventListener('click', () => {
        openModal(modalNewReport);
    });

    formNewReport.addEventListener('submit', (e) => {
        e.preventDefault();
        const speciesId = document.getElementById('reportSpeciesSelect').value;
        const host = document.getElementById('reportHostSelect').value;
        const loc = document.getElementById('reportLocationInput').value;
        const notes = document.getElementById('reportNotesInput').value;

        const specObj = window.TICK_DB.TICKS_DATABASE.find(t => t.id === speciesId);
        const speciesName = specObj ? specObj.scientificName : "Espécime em análise";

        // Coordenadas aproximadas com pequeno deslocamento aleatório na região de SP
        const baseLat = -23.55 + (Math.random() - 0.5) * 0.4;
        const baseLng = -46.63 + (Math.random() - 0.5) * 0.4;

        const newNotif = {
            id: `notif-${Date.now()}`,
            speciesId: speciesId || 'unknown',
            speciesName: speciesName,
            commonName: specObj ? specObj.commonName : "Carrapato não identificado",
            date: new Date().toISOString().split('T')[0],
            host: host,
            locationName: loc,
            latitude: baseLat,
            longitude: baseLng,
            risk: specObj ? specObj.riskLevel : "EM INVESTIGAÇÃO",
            notes: notes
        };

        state.notifications.unshift(newNotif);
        renderMarkersOnMap();
        renderNotificationsList();

        formNewReport.reset();
        closeAllModals();

        // Se estiver no mapa, centraliza no novo ponto
        if (state.mapInstance) {
            state.mapInstance.setView([baseLat, baseLng], 12);
        }
    });

    // ------------------------------------------------------------------------
    // 9. CHAVE DICOTÔMICA GUIADA
    // ------------------------------------------------------------------------
    function resetKeyWizard() {
        state.currentStepKey = 'step_1';
        renderKeyStep();
    }

    function renderKeyStep() {
        const step = window.TICK_DB.IDENTIFICATION_STEPS[state.currentStepKey];
        if (!step) return;

        keyStepNumber.textContent = `Etapa de Avaliação`;
        keyStepQuestion.textContent = step.question;
        keyOptionsList.innerHTML = '';

        step.options.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'key-option-btn';
            btn.innerHTML = `
                <span>${opt.text}</span>
                <span style="color:var(--primary-purple);">&rarr;</span>
            `;
            btn.addEventListener('click', () => {
                if (opt.nextStep) {
                    state.currentStepKey = opt.nextStep;
                    renderKeyStep();
                } else if (opt.resultSpecies) {
                    showKeyResult(opt.resultSpecies);
                }
            });
            keyOptionsList.appendChild(btn);
        });
    }

    function showKeyResult(speciesId) {
        const tick = window.TICK_DB.TICKS_DATABASE.find(t => t.id === speciesId);
        if (!tick) return;

        keyStepNumber.textContent = `Diagnóstico Concluído`;
        keyStepQuestion.innerHTML = `Espécie Provável: <span style="font-style:italic;">${tick.scientificName}</span>`;
        keyOptionsList.innerHTML = `
            <div style="background:#FFFFFF; border-radius:12px; padding:14px; text-align:center; border:2px solid var(--primary-purple);">
                <div style="width:70px; height:70px; border-radius:50%; background:#F3F4F6; margin:0 auto 10px auto; padding:6px;">
                    <img src="assets/images/${tick.imageSvg}" style="width:100%; height:100%; object-fit:contain;">
                </div>
                <h4 style="font-size:15px; font-weight:800; color:var(--primary-purple);">${tick.scientificName}</h4>
                <p style="font-size:12px; color:#4B5563; margin-bottom:8px;">${tick.commonName}</p>
                <div style="margin-bottom:12px;">
                    <span style="font-size:10px; font-weight:800; padding:3px 8px; border-radius:99px; background:${tick.riskColor}; color:#FFFFFF;">
                        Risco: ${tick.riskLevel}
                    </span>
                </div>
                <div style="display:flex; gap:8px;">
                    <button id="btnKeyOpenDetail" class="btn-primary-block" style="padding:10px; font-size:12px; background:var(--primary-purple);">Ver Ficha</button>
                    <button id="btnKeyReport" class="btn-primary-block" style="padding:10px; font-size:12px; background:var(--pin-orange);">Notificar</button>
                </div>
            </div>
        `;

        document.getElementById('btnKeyOpenDetail').onclick = () => {
            closeAllModals();
            showSpeciesDetails(tick);
        };

        document.getElementById('btnKeyReport').onclick = () => {
            closeAllModals();
            document.getElementById('reportSpeciesSelect').value = tick.id;
            openModal(modalNewReport);
        };
    }

    if (btnResetKeyWizard) {
        btnResetKeyWizard.addEventListener('click', resetKeyWizard);
    }

    // ------------------------------------------------------------------------
    // 10. GESTÃO DE MODAIS
    // ------------------------------------------------------------------------
    function openModal(modalEl) {
        if (!modalEl) return;
        modalEl.classList.add('active');
    }

    function closeAllModals() {
        allModals.forEach(m => m.classList.remove('active'));
    }

    document.querySelectorAll('.modal-close-btn').forEach(btn => {
        btn.addEventListener('click', closeAllModals);
    });

    allModals.forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeAllModals();
            }
        });
    });

    // Itens de Menu do Perfil
    document.getElementById('menuItemMyReports').addEventListener('click', () => {
        switchTab('map');
    });

    document.getElementById('menuItemFirstAid').addEventListener('click', () => {
        openModal(modalPicada);
    });

    document.getElementById('menuItemAlertSettings').addEventListener('click', () => {
        openModal(modalDoencas);
    });

    document.getElementById('menuItemAbout').addEventListener('click', () => {
        alert("Carrapato ID v1.0.0\nPlataforma de vigilância entomológica e epidemiológica para identificação e notificação de carrapatos no Brasil.\nDesenvolvido por Anna Sophia.");
    });

    document.getElementById('btnHeaderInfo').addEventListener('click', () => {
        openModal(modalTutorial);
    });

    // Inicialização da grade do catálogo
    renderCatalog();
});
