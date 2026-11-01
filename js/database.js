/**
 * ============================================================================
 * Carrapato ID - Banco de Dados Científico Aprofundado e Chave Dicotômica
 * Autora / Projeto: Anna Sophia
 * ============================================================================
 */

const TICKS_DATABASE = [
    {
        id: "amblyomma_sculptum",
        scientificName: "Amblyomma sculptum",
        commonName: "Carrapato-estrela (Complexo Cajennense)",
        family: "Ixodidae",
        taxonomy: {
            kingdom: "Animalia",
            phylum: "Arthropoda",
            class: "Arachnida",
            subclass: "Acari",
            order: "Ixodida",
            family: "Ixodidae",
            genus: "Amblyomma"
        },
        ornate: true,
        hostTypes: ["Capivaras", "Equinos (Cavalos)", "Seres Humanos", "Antas", "Cães rurais"],
        primaryVectorOf: [
            "Febre Maculosa Brasileira (Rickettsia rickettsii)",
            "Rickettsia parkeri"
        ],
        lethality: "Crítica: até 80% de letalidade em humanos se não tratado até o 5º dia de sintomas.",
        riskLevel: "CRÍTICO",
        riskColor: "#EF4444",
        morphology: {
            capitulum: "Longo, bem projetado para a frente; palpos articulados longos e delgados",
            scutum: "Ricamente ornamentado com filigranas cinza-esbranquiçadas e amareladas",
            size: "3.5 a 5 mm (não ingurgitado); até 16 mm (fêmea ingurgitada)",
            festons: "11 festões bem delimitados e uniformes na margem posterior",
            hypostome: "Fórmula dentária 3/3 na metade apical"
        },
        lifeCycle: {
            type: "Trióxeno (necessita de 3 hospedeiros distintos para completar o ciclo)",
            duration: "Aproximadamente 1 ano em condições naturais brasileiras",
            activeStages: "Larva ('micuim'), Ninfa ('vermelhinho') e Adulto (macho e fêmea)"
        },
        seasonality: {
            larvae: "Pico no outono/inverno (março a julho)",
            nymphs: "Pico no inverno/primavera (julho a outubro - fase de maior risco para humanos)",
            adults: "Pico na primavera/verão (outubro a março)"
        },
        clinicalManifestations: "Picada inicial muitas vezes indolor. Após incubação (2 a 14 dias), febre alta súbita, cefaleia intensa, mialgia, sufusões hemorrágicas e exantema máculo-papular centrípeto (palmas e plantas).",
        treatment: "Doxiciclina (100 mg VO a cada 12h por 7 a 14 dias) iniciada imediatamente sob mera suspeita clínica. Cloranfenicol em gestantes.",
        distribution: "Sudeste (SP, MG, RJ, ES), Centro-Oeste, Sul e partes do Nordeste do Brasil",
        habitat: "Margens de rios, represas, pastagens degradadas e matas ciliares com presença de capivaras e cavalos",
        description: "Espécie de máxima relevância em saúde pública no Brasil. As ninfas ('vermelhinhos') são vorazes e atacam humanos em grande número, permanecendo fixadas discretamente por horas a dias, facilitando a transmissão da bactéria Rickettsia rickettsii.",
        imageSvg: "amblyomma_sculptum.svg"
    },
    {
        id: "rhipicephalus_sanguineus",
        scientificName: "Rhipicephalus sanguineus",
        commonName: "Carrapato-vermelho-do-cão",
        family: "Ixodidae",
        taxonomy: {
            kingdom: "Animalia",
            phylum: "Arthropoda",
            class: "Arachnida",
            subclass: "Acari",
            order: "Ixodida",
            family: "Ixodidae",
            genus: "Rhipicephalus"
        },
        ornate: false,
        hostTypes: ["Cães domésticos", "Gatos", "Ocasionalmente Seres Humanos"],
        primaryVectorOf: [
            "Erliquiose Canina (Ehrlichia canis)",
            "Babesiose Canina (Babesia vogeli)",
            "Anaplasmose (Anaplasma platys)",
            "Febre Maculosa (em ambientes periurbanos)"
        ],
        lethality: "Alta letalidade para cães sem tratamento hematológico; risco zoonótico relevante em humanos debilitados.",
        riskLevel: "ALTO",
        riskColor: "#F59E0B",
        morphology: {
            capitulum: "Curto, com base tipicamente hexagonal proeminente com projeções laterais agudas",
            scutum: "Inornado, castanho-avermelhado escuro brilhante e uniforme",
            size: "3 a 4 mm (não ingurgitado); até 12 mm (fêmea ingurgitada cinza-chumbo)",
            festons: "Presentes, 11 festões visíveis no macho",
            hypostome: "Curto, dentição 3/3"
        },
        lifeCycle: {
            type: "Trióxeno monohospedeiro facultativo (as 3 fases preferem cães domésticos)",
            duration: "2 a 3 meses em condições de ambiente aquecido e urbano",
            activeStages: "Larva, ninfa e adulto no mesmo ambiente residencial"
        },
        seasonality: {
            larvae: "Presente durante todo o ano em ambientes domiciliares",
            nymphs: "Picos na primavera e verão",
            adults: "Atividade contínua em áreas tropicais"
        },
        clinicalManifestations: "Em cães: febre, apatia, epistaxe (sangramento nasal), petéquias, uveíte e trombocitopenia severa. Em humanos: erupções pruriginosas e risco de riquetsioses.",
        treatment: "Em cães: Doxiciclina associada a imidocarb (para Babesia). Banhos com acaricidas e comprimidos isoxazolinas (Fluralaner, Sarolaner, Afoxolaner).",
        distribution: "Cosmopolita; presente em todos os estados brasileiros e áreas urbanas",
        habitat: "Áreas urbanas, residências, canis, frestas de alvenaria e paredes (comportamento geotrópico negativo)",
        description: "Espécie altamente adaptada ao ambiente intradomiciliar. Tem o hábito característico de subir paredes, muros e rodapés para realizar a ecdise ou colocar ovos nas frestas das casas de cães.",
        imageSvg: "rhipicephalus_sanguineus.svg"
    },
    {
        id: "amblyomma_aureolatum",
        scientificName: "Amblyomma aureolatum",
        commonName: "Carrapato-amarelo-do-cão (Silvestre)",
        family: "Ixodidae",
        taxonomy: {
            kingdom: "Animalia",
            phylum: "Arthropoda",
            class: "Arachnida",
            subclass: "Acari",
            order: "Ixodida",
            family: "Ixodidae",
            genus: "Amblyomma"
        },
        ornate: true,
        hostTypes: ["Cães rurais", "Carnívoros silvestres (cachorro-do-mato, guaxinim)", "Aves passeriformes", "Humanos"],
        primaryVectorOf: [
            "Febre Maculosa Brasileira (Cepa altamente virulenta de R. rickettsii na Mata Atlântica)"
        ],
        lethality: "Crítica: associada a surtos de febre maculosa com letalidade superior a 60% na Grande SP.",
        riskLevel: "CRÍTICO",
        riskColor: "#EF4444",
        morphology: {
            capitulum: "Longo, bem destacado",
            scutum: "Fortemente ornamentado com padrão marmorizado dourado/amarelado e faixas escuras",
            size: "3.5 a 5 mm",
            festons: "Presentes e claros",
            hypostome: "Longo, 3/3"
        },
        lifeCycle: {
            type: "Trióxeno silvestre",
            duration: "1 a 2 anos",
            activeStages: "Larvas e ninfas parasitam aves e pequenos roedores; adultos parasitam carnívoros"
        },
        seasonality: {
            larvae: "Fim do verão e outono",
            nymphs: "Inverno e início da primavera",
            adults: "Primavera e verão (quando cães adentram a mata)"
        },
        clinicalManifestations: "Quadro clássico e fulminante de Febre Maculosa: febre súbita, mialgia extrema, manifestações neurológicas e falência de múltiplos órgãos se não medicado rapidamente.",
        treatment: "Doxiciclina imediata antes da confirmação sorológica ou PCR.",
        distribution: "Regiões montanhosas e remanescentes do bioma Mata Atlântica (SP, PR, SC, RS, RJ)",
        habitat: "Florestas úmidas de encosta, bordas de matas e chácaras próximas à vegetação nativa",
        description: "Vetor primário da Febre Maculosa na Região Metropolitana de São Paulo (Serra da Cantareira, Paranapiacaba, Parelheiros). O cão doméstico entra na floresta, é infestado pelos carrapatos adultos e os leva para o ambiente humano.",
        imageSvg: "amblyomma_aureolatum.svg"
    },
    {
        id: "dermacentor_nitens",
        scientificName: "Dermacentor nitens",
        commonName: "Carrapato-da-orelha-do-cavalo",
        family: "Ixodidae",
        taxonomy: {
            kingdom: "Animalia",
            phylum: "Arthropoda",
            class: "Arachnida",
            subclass: "Acari",
            order: "Ixodida",
            family: "Ixodidae",
            genus: "Dermacentor"
        },
        ornate: false,
        hostTypes: ["Equinos (Cavalos)", "Muares", "Asininos", "Ocasionalmente Bovinos"],
        primaryVectorOf: [
            "Babesiose Equina (Babesia caballi)",
            "Theileria equi"
        ],
        lethality: "Moderada a severa para equinos de esporte e lida; sem impacto direto em humanos.",
        riskLevel: "MODERADO",
        riskColor: "#10B981",
        morphology: {
            capitulum: "Curto e largo, base quadrangular",
            scutum: "Inornado, coloração castanho-brilhante homogênea",
            size: "4 a 6 mm (não ingurgitado); até 14 mm (fêmea ingurgitada)",
            festons: "Presentes, porém fundidos em 7 lobos na margem posterior (marca diagnóstica exclusiva)",
            hypostome: "Curto com dentição 4/4"
        },
        lifeCycle: {
            type: "Monóxeno (completa larva, ninfa e adulto no mesmo cavalo)",
            duration: "Ciclo parasitário de cerca de 25 a 30 dias na orelha",
            activeStages: "Todas as fases ocorrem simultaneamente no pavilhão auditivo"
        },
        seasonality: {
            larvae: "Constante ao longo de todo o ano",
            nymphs: "Constante em criatórios equinos",
            adults: "Constante em regiões tropicais"
        },
        clinicalManifestations: "Otite parasitária purulenta, inclinação da cabeça ('head-shaking'), perda de performance, anemia crônica e febre alta decorrente de Babesiose equina.",
        treatment: "Limpeza mecânica das orelhas, uso tópico de pomadas carrapaticidas com piretróides/organofosforados e Ivermectina/Moxidectina injetável.",
        distribution: "Amplamente distribuído em todas as regiões de criação equina no Brasil",
        habitat: "Interior do pavilhão auditivo, crinas, cauda e divertículo nasal de cavalos",
        description: "Carrapato monóxeno de hábito estritamente localizado no pavilhão auditivo de equinos. Os 7 festões posteriores fundidos permitem sua separação imediata de qualquer outra espécie.",
        imageSvg: "dermacentor_nitens.svg"
    },
    {
        id: "rhipicephalus_microplus",
        scientificName: "Rhipicephalus (Boophilus) microplus",
        commonName: "Carrapato-do-boi",
        family: "Ixodidae",
        taxonomy: {
            kingdom: "Animalia",
            phylum: "Arthropoda",
            class: "Arachnida",
            subclass: "Acari",
            order: "Ixodida",
            family: "Ixodidae",
            genus: "Rhipicephalus"
        },
        ornate: false,
        hostTypes: ["Bovinos de corte e leite", "Ocasionalmente equinos e cervídeos"],
        primaryVectorOf: [
            "Tristeza Parasitária Bovina (Babesia bovis, Babesia bigemina)",
            "Anaplasmose Bovina (Anaplasma marginale)"
        ],
        lethality: "Causa perdas econômicas bilionárias no agronegócio e alta mortalidade de bezerros.",
        riskLevel: "MODERADO",
        riskColor: "#10B981",
        morphology: {
            capitulum: "Muito curto, base hexagonal com palpos pequenos e estriados",
            scutum: "Inornado, castanho-amarelado pálido",
            size: "3 mm (macho); até 12 mm (teleógina ingurgitada azulada/esverdeada)",
            festons: "Ausentes ou indistintos na margem posterior",
            hypostome: "Dentição 4/4"
        },
        lifeCycle: {
            type: "Monóxeno (permanece no mesmo bovino por cerca de 21 a 23 dias)",
            duration: "Fase de vida livre na pastagem de 30 a 60 dias dependendo do calor/umidade",
            activeStages: "Larva sobe no boi, sofre muda para ninfa e adulto no mesmo animal"
        },
        seasonality: {
            larvae: "4 a 5 gerações por ano em climas tropicais",
            nymphs: "Picos após estações chuvosas",
            adults: "Intensa proliferação de teleóginas no verão"
        },
        clinicalManifestations: "Queda drástica na produção de leite, anemia profunda, prostração, febre alta, hemoglobinúria ('urina escura com sangue') e morte por choque anêmico.",
        treatment: "Acaricidas por aspersão ou pour-on (Fluazuron, Fipronil), vacina contra carrapato e rotação de pastagens.",
        distribution: "Presente em praticamente todo o território nacional pecuário",
        habitat: "Pastagens cultivadas (Brachiaria) e corpos de bovinos",
        description: "É a praga de maior prejuízo financeiro para a pecuária bovina na América Latina, gerando resistência química severa a quase todas as classes de acaricidas sintéticos.",
        imageSvg: "rhipicephalus_microplus.svg"
    },
    {
        id: "ixodes_scapularis",
        scientificName: "Ixodes scapularis",
        commonName: "Carrapato-de-pernas-pretas (Carrapato do cervo)",
        family: "Ixodidae",
        taxonomy: {
            kingdom: "Animalia",
            phylum: "Arthropoda",
            class: "Arachnida",
            subclass: "Acari",
            order: "Ixodida",
            family: "Ixodidae",
            genus: "Ixodes"
        },
        ornate: false,
        hostTypes: ["Roedores silvestres", "Cervídeos", "Aves", "Humanos"],
        primaryVectorOf: [
            "Doença de Lyme (Borrelia burgdorferi)",
            "Anaplasma phagocytophilum",
            "Babesia microti"
        ],
        lethality: "Baixa letalidade imediata, porém alta morbidade crônica (artrite, sequelas neurológicas e fadiga crônica).",
        riskLevel: "ALTO",
        riskColor: "#F59E0B",
        morphology: {
            capitulum: "Longo, sem olhos marginais",
            scutum: "Inornado, castanho escuro a preto contrastando com o corpo avermelhado",
            size: "2.5 a 3.5 mm (muito pequeno)",
            festons: "Ausentes na margem posterior (marca anatômica de Ixodes)",
            hypostome: "Longo, sulco anal contornando o ânus anteriormente"
        },
        lifeCycle: {
            type: "Trióxeno de ciclo bienal",
            duration: "2 anos completos",
            activeStages: "Larva e ninfa alimentam-se em roedores (camundongo de patas brancas); adultos em cervos"
        },
        seasonality: {
            larvae: "Final do verão",
            nymphs: "Final da primavera e início do verão (fase mais perigosa para transmissão humana)",
            adults: "Outono"
        },
        clinicalManifestations: "Eritema migratório ('olho de boi' ou lesão em anel expansiva avermelhada no local da picada), fadiga extrema, artrite migratória e paralisia facial periférica (de Bell).",
        treatment: "Doxiciclina (100mg 2x/dia por 14 a 21 dias) ou Amoxicilina/Cefuroxima em crianças e gestantes.",
        distribution: "América do Norte e com espécies correlatas do gênero Ixodes na América do Sul e Brasil",
        habitat: "Áreas de mata temperada e úmida, serapilheira e vegetação densa",
        description: "Vetor clássico da Doença de Lyme no mundo. No Brasil, quadros similares com carrapatos neotropicais são diagnosticados como Síndrome Baggio-Yoshinari (Lyme-símile brasileira).",
        imageSvg: "ixodes_scapularis.svg"
    },
    {
        id: "argas_miniatus",
        scientificName: "Argas miniatus",
        commonName: "Carrapato-de-galinha (Carrapato-de-parede)",
        family: "Argasidae",
        taxonomy: {
            kingdom: "Animalia",
            phylum: "Arthropoda",
            class: "Arachnida",
            subclass: "Acari",
            order: "Ixodida",
            family: "Argasidae",
            genus: "Argas"
        },
        ornate: false,
        hostTypes: ["Galinhas", "Perus", "Pombos", "Aves silvestres", "Humanos (acidentalmente)"],
        primaryVectorOf: [
            "Espiroquetose Aviária (Borrelia anserina)",
            "Bouba aviária (vetor mecânico)"
        ],
        lethality: "Alta letalidade em lotes de aves domésticas por choque anêmico e espiroquetose.",
        riskLevel: "MODERADO",
        riskColor: "#10B981",
        morphology: {
            capitulum: "Ventral, totalmente oculto pela projeção anterior do corpo em vista dorsal",
            scutum: "Ausente (carrapato mole com tegumento coriáceo e rugoso)",
            size: "5 a 8 mm de comprimento",
            festons: "Ausentes; contorno lateral com linha nítida de placas quadrangulares ('quadrículas')",
            hypostome: "Localizado no gnatossoma ventral"
        },
        lifeCycle: {
            type: "Múltiplos estágios ninfais e repastos rápidos e noturnos",
            duration: "Pode sobreviver anos em jejum nas frestas de galinheiros",
            activeStages: "Larva (alimenta-se por dias presa à ave), ninfas e adultos (alimentam-se à noite em minutos)"
        },
        seasonality: {
            larvae: "Todo o ano em instalações avícolas",
            nymphs: "Picos em períodos quentes",
            adults: "Atividade estritamente noturna"
        },
        clinicalManifestations: "Em aves: anemia intensa, prostração, queda da postura e paralisia flácida por neurotoxina salivar. Em humanos: prurido intenso e pápulas urticantes dolorosas.",
        treatment: "Em aves: Penicilina procaína para espiroquetose. Desinfecção das instalações com fogo (lança-chamas), caiação de frestas e pulverização de acaricidas.",
        distribution: "Presente em todo o Brasil rural e criações de aves de fundo de quintal",
        habitat: "Frestas de poleiros, paredes de madeira de galinheiros e ninhos",
        description: "Representante típico da família Argasidae (carrapatos moles). Seu corpo é achatado dorsoventralmente com bordas finas e peças bucais invisíveis quando visto de cima. Alimenta-se rapidamente à noite enquanto as aves dormem.",
        imageSvg: "argas_miniatus.svg"
    },
    {
        id: "amblyomma_ovale",
        scientificName: "Amblyomma ovale",
        commonName: "Carrapato-ovale",
        family: "Ixodidae",
        taxonomy: {
            kingdom: "Animalia",
            phylum: "Arthropoda",
            class: "Arachnida",
            subclass: "Acari",
            order: "Ixodida",
            family: "Ixodidae",
            genus: "Amblyomma"
        },
        ornate: true,
        hostTypes: ["Carnívoros silvestres", "Cães domésticos rurais", "Antas", "Humanos"],
        primaryVectorOf: [
            "Rickettsia parkeri cepa Atlantic Rainforest (Rickettsia da Mata Atlântica)"
        ],
        lethality: "Moderada a severa (causa febre maculosa branda com escara de inoculação e baixa taxa de mortalidade).",
        riskLevel: "ALERTA",
        riskColor: "#3B82F6",
        morphology: {
            capitulum: "Longo",
            scutum: "Ornamentado com faixas castanho-claras e pontuações regulares",
            size: "3.5 a 4.5 mm",
            festons: "Presentes e salientes",
            hypostome: "Longo 3/3"
        },
        lifeCycle: {
            type: "Trióxeno associado a matas preservadas",
            duration: "1 a 2 anos",
            activeStages: "Larvas e ninfas parasitam roedores; adultos parasitam canídeos e felídeos"
        },
        seasonality: {
            larvae: "Outono",
            nymphs: "Inverno",
            adults: "Primavera/Verão"
        },
        clinicalManifestations: "Febre, mialgia, cefaleia moderada e presença quase constante de 'escara de inoculação' (tache noire - crosta preta necrótica no ponto exato da picada).",
        treatment: "Doxiciclina por via oral por 7 a 10 dias com excelente resposta clínica.",
        distribution: "Biomas Mata Atlântica, Cerrado e Amazônia em todo o Brasil",
        habitat: "Áreas de floresta preservada, trilhas ecológicas e reservas biológicas",
        description: "Espécie silvestre de grande interesse eco-epidemiológico. É o vetor primário da riquetsiose por Rickettsia parkeri, forma de febre maculosa que tipicamente produz uma escara escura de necrose no local da inoculação.",
        imageSvg: "amblyomma_ovale.svg"
    },
    {
        id: "ornithodoros_brasiliensis",
        scientificName: "Ornithodoros brasiliensis",
        commonName: "Carrapato-mouro (Carrapato-das-tocas do RS)",
        family: "Argasidae",
        taxonomy: {
            kingdom: "Animalia",
            phylum: "Arthropoda",
            class: "Arachnida",
            subclass: "Acari",
            order: "Ixodida",
            family: "Argasidae",
            genus: "Ornithodoros"
        },
        ornate: false,
        hostTypes: ["Seres Humanos", "Cães", "Tatus", "Gambás", "Animais cavadores"],
        primaryVectorOf: [
            "Borrelia spp. (Febre Recorrente transmitida por carrapato mole)",
            "Neurotoxinas salivares potentes"
        ],
        lethality: "Causa síndrome toxêmica severa (prurigo do mouro) com necrose cutânea e risco de choque anafilático.",
        riskLevel: "CRÍTICO",
        riskColor: "#EF4444",
        morphology: {
            capitulum: "Ventral, totalmente oculto sob a borda anterior do corpo",
            scutum: "Ausente; corpo mole, mamelonado e enrugado com tegumento áspero",
            size: "4 a 7 mm (achatado como semente de girassol)",
            festons: "Ausentes; margem contínua mamelonada",
            hypostome: "Armado com dentes retráteis curtos e potentes"
        },
        lifeCycle: {
            type: "Fases ninfais múltiplas em tocas e subterrâneos",
            duration: "Sobrevive até 5 anos sem se alimentar em fendas de pedras e tocas",
            activeStages: "Ninfas e adultos emergem da terra para picar rapidamente por 20 a 40 minutos"
        },
        seasonality: {
            larvae: "Primavera em tocas",
            nymphs: "Verão em abrigos subterrâneos",
            adults: "Ano todo no interior de tocas e assoalhos de cabanas de madeira"
        },
        clinicalManifestations: "Picada extremamente dolorosa. Em 24-48h, surge lesão bolhosa com centro necrótico violáceo, edema regional acentuado, febre alta, calafrios e prurido intratável que dura semanas.",
        treatment: "Anti-histamínicos, corticosteroides para controle da toxemia local, antibioticoterapia preventiva contra infecções secundárias e Doxiciclina se houver suspeita de Borreliose.",
        distribution: "Restrito às regiões serranas do Rio Grande do Sul (Serra Gaúcha, São Francisco de Paula) e Santa Catarina",
        habitat: "Tocas de tatus, assoalhos de madeira de casas rurais antigas, galpões de pedra e cavernas",
        description: "Espécie endêmica do Sul do Brasil com saliva intensamente tóxica. Conhecido historicamente como 'carrapato-mouro', ataca com avidez qualquer humano ou cão que entre em tocas ou permaneça sobre assoalhos de madeira em áreas infestadas.",
        imageSvg: "ornithodoros_brasiliensis.svg"
    },
    {
        id: "amblyomma_triste",
        scientificName: "Amblyomma triste",
        commonName: "Carrapato-triste (Carrapato do Pampa e Pantanal)",
        family: "Ixodidae",
        taxonomy: {
            kingdom: "Animalia",
            phylum: "Arthropoda",
            class: "Arachnida",
            subclass: "Acari",
            order: "Ixodida",
            family: "Ixodidae",
            genus: "Amblyomma"
        },
        ornate: true,
        hostTypes: ["Humanos", "Cães domésticos", "Cervídeos dos pântanos", "Capivaras", "Gado"],
        primaryVectorOf: [
            "Rickettsia parkeri (Febre Maculosa do Pampa e Uruguai)"
        ],
        lethality: "Moderada a alta em áreas alagáveis; causa febre eruptiva aguda.",
        riskLevel: "ALERTA",
        riskColor: "#3B82F6",
        morphology: {
            capitulum: "Longo, bem esclerotizado e proeminente",
            scutum: "Ornamentado com padrão metálico bronze-amarelado em filigrana",
            size: "4 a 5 mm",
            festons: "11 festões visíveis",
            hypostome: "Longo 3/3"
        },
        lifeCycle: {
            type: "Trióxeno associado a ambientes alagados",
            duration: "1 a 2 anos",
            activeStages: "Larvas e ninfas parasitam pequenos roedores de banhado; adultos atacam grandes mamíferos e humanos"
        },
        seasonality: {
            larvae: "Outono",
            nymphs: "Inverno",
            adults: "Fim do inverno e primavera"
        },
        clinicalManifestations: "Febre súbita, exantema máculo-papular, presença típica de escara de inoculação e linfoadenopatia regional.",
        treatment: "Doxiciclina 100 mg VO a cada 12h por 10 dias.",
        distribution: "Bioma Pampa (Rio Grande do Sul) e Pantanal (Mato Grosso do Sul e Mato Grosso)",
        habitat: "Áreas de banhado, campos nativos úmidos e margens de lagoas e várzeas",
        description: "Principal vetor de riquetsioses no extremo sul do Brasil e Uruguai. Tem alta afinidade por seres humanos em áreas de banhado e pastagens nativas do Pampa gaúcho.",
        imageSvg: "amblyomma_triste.svg"
    },
    {
        id: "ornithodoros_rostratus",
        scientificName: "Ornithodoros rostratus",
        commonName: "Carrapato-do-chão (Carrapato de areia do Pantanal)",
        family: "Argasidae",
        taxonomy: {
            kingdom: "Animalia",
            phylum: "Arthropoda",
            class: "Arachnida",
            subclass: "Acari",
            order: "Ixodida",
            family: "Argasidae",
            genus: "Ornithodoros"
        },
        ornate: false,
        hostTypes: ["Humanos", "Cães de caça", "Porcos domésticos e queixadas", "Gado bovino"],
        primaryVectorOf: [
            "Borrelia spp.",
            "Toxinas indutoras de choque tóxico tecidual"
        ],
        lethality: "Provoca necrose cutânea severa e debilitação acentuada em cães e animais jovens.",
        riskLevel: "ALTO",
        riskColor: "#F59E0B",
        morphology: {
            capitulum: "Totalmente ventral em sulco camerostomal anterior cônico (rostrado)",
            scutum: "Ausente; tegumento coriáceo grosso cor de areia ou terra seca",
            size: "6 a 10 mm (porte grande para carrapato mole)",
            festons: "Ausentes; contorno mamelonado com fossetas circulares",
            hypostome: "Ventral com dentículos afiados"
        },
        lifeCycle: {
            type: "Habitante de solo arenoso sob telheiros e currais",
            duration: "Resiste a longas secas enterrado no pó ou terra",
            activeStages: "Repastos rápidos (30-60 minutos) durante o repouso do hospedeiro"
        },
        seasonality: {
            larvae: "Estação seca",
            nymphs: "Transição seca/chuvas",
            adults: "Ativo em noites quentes do Pantanal"
        },
        clinicalManifestations: "Dor aguda no momento da picada, formação de nódulo endurecido e ulcerado com necrose central de difícil cicatrização e prurido intenso.",
        treatment: "Assepsia rigorosa da lesão necrótica, curativos tópicos, anti-inflamatórios e profilaxia antitetânica.",
        distribution: "Centro-Oeste (Pantanal sul-mato-grossense e mato-grossense), Goiás e Minas Gerais",
        habitat: "Chão de terra batida de mangueirões de gado, galpões de fazenda e solos arenosos secos",
        description: "Espécie rústica temida por peões do Pantanal. Fica enterrado na areia e no pó dos currais e ataca ferozmente animais e pessoas deitadas no chão ou dormindo em galpões rurais.",
        imageSvg: "ornithodoros_rostratus.svg"
    },
    {
        id: "amblyomma_brasiliense",
        scientificName: "Amblyomma brasiliense",
        commonName: "Carrapato-brasiliense (Carrapato silvestre de mata)",
        family: "Ixodidae",
        taxonomy: {
            kingdom: "Animalia",
            phylum: "Arthropoda",
            class: "Arachnida",
            subclass: "Acari",
            order: "Ixodida",
            family: "Ixodidae",
            genus: "Amblyomma"
        },
        ornate: true,
        hostTypes: ["Queixadas", "Catetos (porcos-do-mato)", "Antas", "Humanos"],
        primaryVectorOf: [
            "Rickettsia spp. de potencial patogênico em investigação"
        ],
        lethality: "Alerta sanitário devido à agressividade das picadas e exposição de trabalhadores em matas nativas.",
        riskLevel: "ALERTA",
        riskColor: "#3B82F6",
        morphology: {
            capitulum: "Longo, bem robusto",
            scutum: "Ornamentado com tonalidades acobreadas e grandes manchas circulares claras",
            size: "4 a 5.5 mm",
            festons: "Presentes e salientes",
            hypostome: "Longo 3/3"
        },
        lifeCycle: {
            type: "Trióxeno florestal silvestre",
            duration: "1 a 2 anos",
            activeStages: "Associado intimamente a bandos de queixadas em florestas primárias"
        },
        seasonality: {
            larvae: "Fim do outono",
            nymphs: "Inverno",
            adults: "Primavera e verão"
        },
        clinicalManifestations: "Pápulas inflamatórias dolorosas no local da fixação e risco de febre eruptiva em pesquisadores e mateiros.",
        treatment: "Remoção precoce com pinça e acompanhamento de sintomas febris com Doxiciclina.",
        distribution: "Mata Atlântica e Cerrado preservado em SP, PR, RJ, MG e GO",
        habitat: "Interior de matas preservadas com fauna nativa exuberante",
        description: "Espécie com forte ligação ecológica com porcos-do-mato (Tayassuidae). Ao passar por trilhas onde queixadas descansam, humanos são rapidamente infestados por adultos desta espécie.",
        imageSvg: "amblyomma_brasiliense.svg"
    }
];

// -------------------------------------------------------------
// Árvore de Decisão da Chave Dicotômica Interativa Aprofundada
// -------------------------------------------------------------
const IDENTIFICATION_STEPS = {
    step_1: {
        id: "step_1",
        question: "O carrapato possui uma carapaça rígida (escudo quitinoso dorsal) cobrindo suas costas?",
        options: [
            {
                text: "Não, o corpo é mole, coriáceo e enrugado. Peças bucais ocultas sob o ventre (Família Argasidae).",
                nextStep: "step_argasidae"
            },
            {
                text: "Sim, possui escudo dorsal duro e peças bucais visíveis projetadas para a frente (Família Ixodidae).",
                nextStep: "step_2"
            }
        ]
    },
    step_argasidae: {
        id: "step_argasidae",
        question: "Onde o carrapato mole foi encontrado ou qual o tipo de lesão provocada?",
        options: [
            {
                text: "Em galinheiro ou poleiro de aves domésticas; corpo achatado com borda em quadrículas.",
                resultSpecies: "argas_miniatus",
                matchReason: "Diagnóstico clássico de Argas miniatus (Carrapato-de-galinha)."
            },
            {
                text: "Na Serra Gaúcha (RS/SC), em tocas de tatu, assoalhos antigos de madeira; picada intensamente dolorosa com necrose.",
                resultSpecies: "ornithodoros_brasiliensis",
                matchReason: "Diagnóstico de Ornithodoros brasiliensis (Carrapato-mouro), transmissor de neurotoxinas salivares e febre recorrente."
            },
            {
                text: "No Pantanal ou solo arenoso seco de currais/galpões rurais; carrapato grande e áspero.",
                resultSpecies: "ornithodoros_rostratus",
                matchReason: "Diagnóstico de Ornithodoros rostratus (Carrapato-do-chão do Pantanal)."
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
                matchReason: "Padrão clássico do Carrapato-estrela (Amblyomma sculptum), vetor primário da Febre Maculosa Brasileira."
            },
            {
                text: "Em cão doméstico em regiões serranas ou bordas de Mata Atlântica (desenho marmorizado dourado).",
                resultSpecies: "amblyomma_aureolatum",
                matchReason: "Padrão morfológico e ecológico do Amblyomma aureolatum (Carrapato-amarelo-do-cão)."
            },
            {
                text: "Em campos alagados ou banhados do Pampa gaúcho ou Pantanal (escudo bronzeado brilhante).",
                resultSpecies: "amblyomma_triste",
                matchReason: "Diagnóstico de Amblyomma triste, vetor de Rickettsia parkeri no Sul e Centro-Oeste."
            },
            {
                text: "Em floresta nativa preservada associada a carnívoros silvestres ou escara de inoculação escura.",
                resultSpecies: "amblyomma_ovale",
                matchReason: "Morfologia e ecologia condizente com Amblyomma ovale."
            },
            {
                text: "Em trilha de mata onde há porcos-do-mato (queixadas/catetos); escudo acobreado com manchas circulares.",
                resultSpecies: "amblyomma_brasiliense",
                matchReason: "Diagnóstico de Amblyomma brasiliense."
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
        longitude: -46.512,
        risk: "ALERTA MÁXIMO",
        notes: "Múltiplos espécimes em capim na margem do lago. Sinalização de FMB presente."
    },
    {
        id: "notif-2",
        speciesId: "rhipicephalus_sanguineus",
        speciesName: "Rhipicephalus sanguineus",
        commonName: "Carrapato-vermelho-do-cão",
        date: "2026-10-27",
        host: "Cão doméstico",
        locationName: "Bairro Cambuí, Campinas - SP",
        latitude: -22.898,
        longitude: -47.054,
        risk: "ALTO RISCO",
        notes: "Cão com sintomas de apatia e erliquiose confirmada por hemograma."
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
    },
    {
        id: "notif-5",
        speciesId: "ornithodoros_brasiliensis",
        speciesName: "Ornithodoros brasiliensis",
        commonName: "Carrapato-mouro",
        date: "2026-10-30",
        host: "Ser Humano (Pesquisador)",
        locationName: "São Francisco de Paula - RS",
        latitude: -29.448,
        longitude: -50.583,
        risk: "ALERTA MÁXIMO",
        notes: "Espécime coletado no assoalho de cabana antiga com reação necrótica local na perna."
    },
    {
        id: "notif-6",
        speciesId: "ornithodoros_rostratus",
        speciesName: "Ornithodoros rostratus",
        commonName: "Carrapato-do-chão",
        date: "2026-10-31",
        host: "Cão e Porco",
        locationName: "Fazenda Rio Negro, Aquidauana - MS (Pantanal)",
        latitude: -19.588,
        longitude: -56.248,
        risk: "ALTO RISCO",
        notes: "Solo arenoso sob o curral com alta infestação noturna."
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
