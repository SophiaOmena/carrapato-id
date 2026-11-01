# Carrapato ID 🔍🕷️

> **Plataforma Mobile de Identificação Morfológica, Vigilância Epidemiológica e Notificação de Carrapatos no Brasil**

O **Carrapato ID** é uma aplicação web mobile progressiva voltada para a saúde pública, medicina veterinária e conscientização comunitária. O sistema permite identificar espécies de carrapatos por meio de características morfológicas (chave dicotômica e scanner visual), consultar um banco de dados taxonômico ilustrado e registrar ocorrências geolocalizadas em um mapa colaborativo de focos — com atenção especial à vigilância da **Febre Maculosa Brasileira (FMB)**.

---

## 📱 Telas e Funcionalidades

O aplicativo foi projetado seguindo as diretrizes de design mobile (9:16) com identidade visual nas paletas púrpura, verde sálvia e lilás:

1. **Splash Screen**: Tela de abertura com retículo de mira e logotipo estilizado.
2. **Início (Home)**:
   - Banner guia: *Tutorial de como notificar a presença de carrapatos*.
   - Ações rápidas circulares:
     - **Picada do carrapato**: Procedimentos de remoção correta com pinça e o que nunca fazer.
     - **Doenças transmitidas**: Informações sobre Febre Maculosa (*Rickettsia rickettsii*), Borreliose de Lyme-símile, Erliquiose e Babesiose.
     - **Cuidados e prevenção**: Roupas claras, uso de icaridina/DEET e proteção de animais domésticos.
   - Carrossel de módulos:
     - **Chave de identificação**: Questionário taxonômico guiado.
     - **Catálogo**: Acesso direto ao acervo de espécies.
     - **Medidas de controle alternativo**: Controle biológico (*Metarhizium*, *Beauveria*), manejo de pastagens e predadores naturais.
3. **Scanner / Câmera**:
   - Mira com cantos de retículo e linha animada de escaneamento.
   - Suporte à câmera do dispositivo ou upload de fotos da galeria.
   - Diagnóstico morfológico assistido com cálculo de confiança e nível de risco.
4. **Catálogo de Espécies**:
   - Grade em 2 colunas com cartões púrpuras e avatares anatômicos em SVG.
   - Filtros rápidos por pílula (*Febre Maculosa*, *Alto Risco*, *Cães*, *Cavalos*, *Capivaras*).
   - Busca em tempo real por nome científico, popular, hospedeiro ou doença.
   - Dossiê detalhado por espécie com morfologia do escudo, capítulo e festões.
5. **Mapa de Ocorrências**:
   - Mapa geoespacial interativo baseado em Leaflet com marcadores de focos.
   - Botão flutuante para **Nova Notificação de Campo** com preenchimento de hospedeiro, localização e notas ecológicas.
   - Lista cronológica de notificações e centralização rápida ao clicar.
6. **Perfil do Pesquisador**:
   - Dados de perfil da pesquisadora **Anna Sophia**.
   - Painel de estatísticas (ocorrências registradas, espécies catalogadas e status de vigilância).
   - Acesso rápido a protocolos de primeiros socorros e alertas sanitários.

---

## 🔬 Banco de Dados Taxonômico Integrado

O sistema inclui 12 espécies de máxima importância médica e veterinária no Brasil, representadas por ilustrações anatômicas vetoriais (SVG) com detalhes de ornamentação dorsal, festões e peças bucais:

| Espécie | Nome Popular | Família | Escudo | Vetor Principal / Risco | Nível de Risco |
| :--- | :--- | :--- | :--- | :--- | :--- |
| *Amblyomma sculptum* | Carrapato-estrela | Ixodidae | Ornamentado | Febre Maculosa Brasileira (*R. rickettsii*) | **CRÍTICO** |
| *Rhipicephalus sanguineus* | Carrapato-vermelho-do-cão | Ixodidae | Inornado | Erliquiose e Babesiose canina | **ALTO** |
| *Amblyomma aureolatum* | Carrapato-amarelo-do-cão | Ixodidae | Ornamentado | Febre Maculosa (Mata Atlântica) | **CRÍTICO** |
| *Dermacentor nitens* | Carrapato-da-orelha-do-cavalo | Ixodidae | Inornado | Babesiose Equina (7 festões fundidos) | **MODERADO** |
| *Rhipicephalus microplus* | Carrapato-do-boi | Ixodidae | Inornado | Tristeza Parasitária Bovina | **MODERADO** |
| *Ixodes scapularis* | Carrapato-de-pernas-pretas | Ixodidae | Inornado | Doença de Lyme (*Borrelia burgdorferi*) | **ALTO** |
| *Argas miniatus* | Carrapato-de-galinha | Argasidae | Ausente (Mole) | Espiroquetose Aviária | **MODERADO** |
| *Amblyomma ovale* | Carrapato-ovale | Ixodidae | Ornamentado | *Rickettsia parkeri* (Mata Atlântica) | **ALERTA** |
| *Ornithodoros brasiliensis* | Carrapato-mouro | Argasidae | Ausente (Mole) | Toxina salivar necrótica e Febre Recorrente (RS/SC) | **CRÍTICO** |
| *Amblyomma triste* | Carrapato-triste | Ixodidae | Ornamentado | *Rickettsia parkeri* (Pampa e Pantanal) | **ALERTA** |
| *Ornithodoros rostratus* | Carrapato-do-chão | Argasidae | Ausente (Mole) | Choque tóxico tecidual em solo arenoso do Pantanal | **ALTO** |
| *Amblyomma brasiliense* | Carrapato-brasiliense | Ixodidae | Ornamentado | Riquetsioses associadas a queixadas e matas | **ALERTA** |

---

## 🛠️ Tecnologias Utilizadas

- **HTML5 Semântico**: Estruturação acessível com modais, formulários e viewport responsiva.
- **CSS3 Moderno**: Variáveis CSS (Custom Properties), Grid responsivo, Flexbox, animações de escaneamento e componentes baseados no protótipo.
- **JavaScript (ES6+)**: Arquitetura modular sem dependências pesadas, compatível com execução em navegadores e em Node.js via CommonJS.
- **Leaflet.js & OpenStreetMap**: Visualização cartográfica de focos e marcadores customizados.
- **Node.js Test Runner (`node:test`)**: Suíte de testes automatizados de garantia de qualidade (QA).

---

## 🧪 Testes de Garantia de Qualidade (QA)

O projeto conta com uma suíte de testes de QA automatizada cobrindo:

1. **Integridade do Banco de Dados**: Verificação de todos os campos obrigatórios e existência de todos os arquivos de imagem SVG no disco.
2. **Chave Dicotômica**: Validação das ramificações taxonômicas (família Argasidae vs Ixodidae, ornamentado vs inornado, base hexagonal vs retangular).
3. **Notificações e Geoespacial**: Validação de coordenadas em território brasileiro e fluxo de cadastro de novos focos.
4. **Busca e Classificador**: Busca insensível a maiúsculas/minúsculas e assertividade da classificação morfológica.

Para rodar os testes:

```bash
npm test
```

Saída esperada:
```
✔ Banco de Dados de Carrapatos - Validação de Integridade e Estrutura
✔ Chave Dicotômica - Validação de Rotas e Consistência Taxonômica
✔ Sistema de Notificações e Ocorrências - QA
✔ Scanner, Busca e Qualidade dos Vetores SVG
ℹ tests 19
ℹ pass 19
ℹ fail 0
```

---

## 🚀 Como Executar Localmente

Como a aplicação é construída com tecnologias web padrão, não é necessário build complexo:

1. Clone o repositório:
   ```bash
   git clone https://github.com/SophiaOmena/carrapato-id.git
   cd carrapato-id
   ```

2. Abra o arquivo `index.html` diretamente em seu navegador web preferido ou utilize um servidor local:
   ```bash
   # Utilizando Python 3:
   python3 -m http.server 8080

   # Ou utilizando o npx serve:
   npx serve .
   ```

3. Acesse `http://localhost:8080` no navegador (recomenda-se o modo de inspeção responsivo para visualização mobile).

---

## 📄 Licença

Este projeto é distribuído sob a licença MIT. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.

**Desenvolvido por Anna Sophia (SophiaOmena)**.
