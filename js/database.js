/**
 * ============================================================================
 * Carrapato ID - Banco de Dados Científico de Espécies e Chave Dicotômica
 * Autora / Projeto: Anna Sophia
 * ============================================================================
 */

const TICKS_DATABASE = [
    {
        id: "amblyomma_sculptum",
        scientificName: "Amblyomma sculptum",
        commonName: "Carrapato-estrela (Complexo Cajennense)",
        family: "Ixodidae",
        ornate: true,
        hostTypes: ["Capivaras", "Equinos (Cavalos)", "Seres Humanos", "Antas", "Cães"],
        primaryVectorOf: [
            "Febre Maculosa Brasileira (Rickettsia rickettsii)",
            "Rickettsia parkeri"
        ],
        riskLevel: "CRÍTICO",
        riskColor: "#EF4444",
        morphology: {
            capitulum: "Longo, bem projetado para a frente",
            scutum: "Escudo ornamentado com manchas cinza-esbranquiçadas ou amareladas",
            size: "3 a 5 mm (não ingurgitado); até 15 mm (fêmea ingurgitada)",
            festons: "Presentes e bem delimitados na margem posterior"
        },
        distribution: "Sudeste, Centro-Oeste, Sul e partes do Nordeste do Brasil",
        habitat: "Margens de rios, represas, pastagens e áreas com presença de capivaras e cavalos",
        description: "É a espécie de maior relevância em saúde pública no Brasil, sendo o principal vetor da Febre Maculosa Brasileira (FMB). Na fase de larva e ninfa (micuins e vermelhinhos), atacam agressivamente humanos em grande número.",
        imageSvg: "amblyomma_sculptum.svg"
    },
    {
        id: "rhipicephalus_sanguineus",
        scientificName: "Rhipicephalus sanguineus",
        commonName: "Carrapato-vermelho-do-cão",
        family: "Ixodidae",
        ornate: false,
        hostTypes: ["Cães domésticos", "Gatos", "Ocasionalmente Humanos"],
        primaryVectorOf: [
            "Erliquiose Canina (Ehrlichia canis)",
            "Babesiose Canina (Babesia vogeli)",
            "Febre Maculosa (em ambientes periurbanos)"
        ],
        riskLevel: "ALTO",
        riskColor: "#F59E0B",
        morphology: {
            capitulum: "Curto, com base tipicamente hexagonal proeminente",
            scutum: "Inornado, castanho-avermelhado escuro homogêneo",
            size: "3 a 4 mm (não ingurgitado)",
            festons: "Visíveis e regulares"
        },
        distribution: "Cosmopolita, presente em todo o território nacional",
        habitat: "Ambientes domésticos e periurbanos, canis, frestas de muros, rodapés e casinhas de cachorro",
        description: "Espécie adaptada ao ambiente urbano e intra-domiciliar. Apresenta comportamento geotrópico negativo, escalando paredes e muros para realizar a ecdise ou oviposição em frestas.",
        imageSvg: "rhipicephalus_sanguineus.svg"
    },
    {
        id: "dermacentor_nitens",
        scientificName: "Dermacentor nitens",
        commonName: "Carrapato-da-orelha-do-cavalo",
        family: "Ixodidae",
        ornate: false,
        hostTypes: ["Equinos", "Muares", "Asininos"],
        primaryVectorOf: [
            "Babesiose Equina (Babesia caballi)"
        ],
        riskLevel: "MODERADO",
        riskColor: "#10B981",
        morphology: {
            capitulum: "Curto e largo, base quadrangular",
            scutum: "Inornado, coloração castanho-brilhante",
            size: "4 a 6 mm",
            festons: "Presentes, porém fundidos em 7 lobos na margem posterior"
        },
        distribution: "Amplamente distribuído em regiões de criação equina no Brasil",
        habitat: "Interior do pavilhão auditivo e crinas de equinos",
        description: "Carrapato monóxeno que realiza todo o ciclo parasitário (larva, ninfa e adulto) em um único hospedeiro, alojando-se quase que exclusivamente nas orelhas de cavalos.",
        imageSvg: "dermacentor_nitens.svg"
    },
    {
        id: "amblyomma_aureolatum",
        scientificName: "Amblyomma aureolatum",
        commonName: "Carrapato-amarelo-do-cão (Silvestre)",
        family: "Ixodidae",
        ornate: true,
        hostTypes: ["Cães rurais", "Carnívoros silvestres", "Aves", "Humanos"],
        primaryVectorOf: [
            "Febre Maculosa Brasileira (Cepa virulenta R. rickettsii na Mata Atlântica)"
        ],
        riskLevel: "CRÍTICO",
        riskColor: "#EF4444",
        morphology: {
            capitulum: "Longo, bem destacado",
            scutum: "Fortemente ornamentado com padrão marmorizado dourado/amarelado",
            size: "3.5 a 5 mm",
            festons: "Presentes"
        },
        distribution: "Regiões montanhosas e remanescentes do bioma Mata Atlântica",
        habitat: "Florestas úmidas de encosta, bordas de matas e sítios próximos à vegetação nativa",
        description: "Importante vetor da Febre Maculosa na Região Metropolitana de São Paulo e áreas serranas. Cães que adentram a mata entram em contato com o carrapato e o trazem para o domicílio.",
        imageSvg: "amblyomma_aureolatum.svg"
    },
    {
        id: "rhipicephalus_microplus",
        scientificName: "Rhipicephalus (Boophilus) microplus",
        commonName: "Carrapato-do-boi",
        family: "Ixodidae",
        ornate: false,
        hostTypes: ["Bovinos", "Ocasionalmente equinos e cervídeos"],
        primaryVectorOf: [
            "Tristeza Parasitária Bovina (Babesia bovis, B. bigemina, Anaplasma marginale)"
        ],
        riskLevel: "MODERADO",
        riskColor: "#10B981",
        morphology: {
            capitulum: "Muito curto, formato hexagonal",
            scutum: "Inornado, castanho claro amarelado",
            size: "2 a 3 mm (machos); até 12 mm (fêmeas repletas)",
            festons: "Ausentes na margem posterior"
        },
        distribution: "Presente em praticamente todas as bacias leiteiras e de corte do Brasil",
        habitat: "Pastagens e corpos de rebanhos bovinos",
        description: "A maior praga parasitológica da pecuária brasileira, causando anemia, perda de peso, desvalorização do couro e perdas econômicas de bilhões de dólares ao ano.",
        imageSvg: "rhipicephalus_microplus.svg"
    },
    {
        id: "ixodes_scapularis",
        scientificName: "Ixodes scapularis",
        commonName: "Carrapato-de-pernas-pretas (Carrapato-do-veado)",
        family: "Ixodidae",
        ornate: false,
        hostTypes: ["Roedores", "Cervídeos", "Aves", "Humanos"],
        primaryVectorOf: [
            "Doença de Lyme (Borrelia burgdorferi)",
            "Anaplasmose granulocítica",
            "Babesia microti"
        ],
        riskLevel: "ALTO",
        riskColor: "#F59E0B",
        morphology: {
            capitulum: "Longo, sulco anal contornando o ânus anteriormente",
            scutum: "Inornado, escudo escuro sobre corpo avermelhado",
            size: "2 a 4 mm",
            festons: "Ausentes"
        },
        distribution: "América do Norte e com espécies correlatas do gênero no Brasil (Ixodes loricatus)",
        habitat: "Serapilheira em florestas temperadas e subtropicais",
        description: "Vetor primordial da Doença de Lyme em nível mundial. Apresenta pernas escuras características contrastando com o abdômen avermelhado.",
        imageSvg: "ixodes_scapularis.svg"
    },
    {
        id: "argas_miniatus",
        scientificName: "Argas miniatus",
        commonName: "Carrapato-de-galinha (Carrapato-mole)",
        family: "Argasidae",
        ornate: false,
        hostTypes: ["Galinhas", "Perus", "Patos", "Pombos"],
        primaryVectorOf: [
            "Espiroquetose Aviária (Borrelia anserina)",
            "Bouba aviária"
        ],
        riskLevel: "MODERADO",
        riskColor: "#10B981",
        morphology: {
            capitulum: "Ventral (escondido sob o corpo, não visível dorsalmente)",
            scutum: "Ausente (corpo mole, coriáceo e enrugado)",
            size: "5 a 8 mm",
            festons: "Ausentes; margem com sutura fina celular"
        },
        distribution: "Nacional, associado a criações de aves e granjas",
        habitat: "Frestas de poleiros, paredes de galinheiros e ninhos de aves",
        description: "Carrapato da família Argasidae (carrapatos moles). Possui hábitos hematófagos noturnos, alimentando-se rapidamente durante a noite e escondendo-se de dia nas frestas do galinheiro.",
        imageSvg: "argas_miniatus.svg"
    },
    {
        id: "amblyomma_ovale",
        scientificName: "Amblyomma ovale",
        commonName: "Carrapato-ovalado-silvestre",
        family: "Ixodidae",
        ornate: true,
        hostTypes: ["Carnívoros silvestres", "Cães rurais", "Humanos"],
        primaryVectorOf: [
            "Rickettsia sp. cepa Mata Atlântica"
        ],
        riskLevel: "ALTO",
        riskColor: "#F59E0B",
        morphology: {
            capitulum: "Longo, robusto",
            scutum: "Ornamentado com faixas avermelhadas e acobreadas",
            size: "3 a 4.5 mm",
            festons: "Presentes"
        },
        distribution: "Regiões florestadas de todo o Brasil",
        habitat: "Florestas tropicais, áreas de transição e ecótonos",
        description: "Espécie silvestre associada a quatis, felídeos e canídeos nativos. Pode picar humanos que realizam trilhas ou trabalham em matas preservadas.",
        imageSvg: "amblyomma_ovale.svg"
    }
];

// -------------------------------------------------------------
// Árvore de Decisão da Chave Dicotômica Interativa
// -------------------------------------------------------------
const IDENTIFICATION_STEPS = {
    step_1: {
        id: "step_1",
        question: "O carrapato possui uma carapaça rígida (escudo quitinoso dorsal) cobrindo suas costas?",
        options: [
            {
                text: "Não, o corpo é mole, coriáceo e enrugado. Peças bucais ocultas sob o ventre (Argasidae).",
                resultSpecies: "argas_miniatus",
                matchReason: "Carrapato da família Argasidae (carrapatos moles), típico de galinheiros e aves."
            },
            {
                text: "Sim, possui escudo dorsal duro e peças bucais visíveis projetadas para a frente (Ixodidae).",
                nextStep: "step_2"
            }
        ]
    },
    step_2: {
        id: "step_2",
        question: "O escudo dorsal apresenta manchas coloridas, prateadas ou amareladas (escudo ornamentado)?",
        options: [
            {
                text: "Sim! Escudo ornamentado com desenhos, linhas ou manchas marmorizadas claras sobre o escudo dorsal.",
                nextStep: "step_3_ornate"
            },
            {
                text: "Não. Escudo inornado com cor uniforme (castanho, avermelhado ou amarelado sem ornamentos).",
                nextStep: "step_3_inornate"
            }
        ]
    },
    step_3_ornate: {
        id: "step_3_ornate",
        question: "Em que ambiente ou hospedeiro o carrapato foi encontrado?",
        options: [
            {
                text: "Margens de rios, áreas com capivaras, cavalos, pastos ou picando humanos (manchas cinza-claras).",
                resultSpecies: "amblyomma_sculptum",
                matchReason: "Padrão clássico do Carrapato-estrela (Amblyomma sculptum), vetor primário da Febre Maculosa."
            },
            {
                text: "Em cão doméstico em regiões serranas ou bordas de Mata Atlântica.",
                resultSpecies: "amblyomma_aureolatum",
                matchReason: "Padrão morfológico e ecológico do Amblyomma aureolatum (Carrapato-amarelo-do-cão)."
            },
            {
                text: "Em áreas de mata preservada ou carnívoros silvestres.",
                resultSpecies: "amblyomma_ovale",
                matchReason: "Morfologia e ecologia condizente com Amblyomma ovale."
            }
        ]
    },
    step_3_inornate: {
        id: "step_3_inornate",
        question: "Qual o hospedeiro primário e características morfológicas observadas?",
        options: [
            {
                text: "Em cão doméstico, canil ou paredes; corpo avermelhado e base do capítulo tipicamente hexagonal.",
                resultSpecies: "rhipicephalus_sanguineus",
                matchReason: "Características do Carrapato-vermelho-do-cão (Rhipicephalus sanguineus)."
            },
            {
                text: "Fixado no interior da orelha ou crina de cavalos; 7 festões na borda posterior.",
                resultSpecies: "dermacentor_nitens",
                matchReason: "Diagnóstico de Dermacentor nitens (Carrapato-da-orelha-do-cavalo)."
            },
            {
                text: "Em rebanhos de gado bovino no pasto.",
                resultSpecies: "rhipicephalus_microplus",
                matchReason: "Morfologia característica do Carrapato-do-boi (Rhipicephalus microplus)."
            },
            {
                text: "Espécime pequeno com patas pretas e abdômen avermelhado em área florestal.",
                resultSpecies: "ixodes_scapularis",
                matchReason: "Morfologia compatível com o gênero Ixodes (vetor da Doença de Lyme)."
            }
        ]
    }
};

const IDENTIFICATION_KEY_TREE = IDENTIFICATION_STEPS;

// -------------------------------------------------------------
// Ocorrências Pré-carregadas para o Mapa de Monitoramento
// -------------------------------------------------------------
const INITIAL_NOTIFICATIONS = [
    {
        id: "notif-1",
        speciesId: "amblyomma_sculptum",
        speciesName: "Amblyomma sculptum",
        commonName: "Carrapato-estrela",
        date: "2026-10-28",
        host: "Capivara / Vegetação",
        locationName: "Parque Ecológico do Rio Tietê, SP",
        latitude: -23.518,
        longitude: -46.545,
        risk: "ALERTA MÁXIMO",
        notes: "Presença de micuins e adultos fixados na vegetação ciliar."
    },
    {
        id: "notif-2",
        speciesId: "rhipicephalus_sanguineus",
        speciesName: "Rhipicephalus sanguineus",
        commonName: "Carrapato-vermelho-do-cão",
        date: "2026-10-30",
        host: "Cão doméstico",
        locationName: "Bairro Santa Cruz, Campinas - SP",
        latitude: -22.905,
        longitude: -47.060,
        risk: "MODERADO",
        notes: "Infestação em canil domiciliar, animal com suspeita de erliquiose."
    },
    {
        id: "notif-3",
        speciesId: "amblyomma_aureolatum",
        speciesName: "Amblyomma aureolatum",
        commonName: "Carrapato-amarelo-do-cão",
        date: "2026-10-25",
        host: "Cão rural",
        locationName: "Serra da Cantareira, Mairiporã - SP",
        latitude: -23.318,
        longitude: -46.586,
        risk: "ALERTA MÁXIMO",
        notes: "Espécime coletado após passeio em trilha de mata nativa."
    },
    {
        id: "notif-4",
        speciesId: "dermacentor_nitens",
        speciesName: "Dermacentor nitens",
        commonName: "Carrapato-da-orelha-do-cavalo",
        date: "2026-10-29",
        host: "Equino",
        locationName: "Haras Vale Verde, Sorocaba - SP",
        latitude: -23.501,
        longitude: -47.458,
        risk: "MONITORAMENTO",
        notes: "Localizado no pavilhão auditivo de potro."
    }
];

// Exportação universal (Browser e Node.js)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        TICKS_DATABASE,
        IDENTIFICATION_KEY_TREE,
        IDENTIFICATION_STEPS,
        INITIAL_NOTIFICATIONS
    };
} else {
    window.TICK_DB = {
        TICKS_DATABASE,
        IDENTIFICATION_KEY_TREE,
        IDENTIFICATION_STEPS,
        INITIAL_NOTIFICATIONS
    };
}
