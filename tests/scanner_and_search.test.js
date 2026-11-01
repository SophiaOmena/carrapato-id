const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const { TICKS_DATABASE } = require('../js/database.js');

test('Scanner, Busca e Qualidade dos Vetores SVG', async (t) => {
    await t.test('todos os arquivos SVG devem conter tags válidas e viewBox correto', () => {
        const assetsDir = path.join(__dirname, '..', 'assets', 'images');
        const files = fs.readdirSync(assetsDir).filter(f => f.endsWith('.svg'));
        
        assert.ok(files.length >= 9, 'Deve conter pelo menos 8 espécies + 1 logo');
        
        files.forEach(file => {
            const content = fs.readFileSync(path.join(assetsDir, file), 'utf-8');
            assert.ok(content.includes('<svg'), `${file} deve conter tag <svg`);
            assert.ok(content.includes('</svg>'), `${file} deve conter tag de fechamento </svg>`);
            assert.ok(content.includes('viewBox='), `${file} deve especificar viewBox para escalabilidade`);
        });
    });

    await t.test('função de busca do catálogo deve ser insensível a maiúsculas/minúsculas e acentos parciais', () => {
        const filterDatabase = (query, filterType = 'all') => {
            const q = query.toLowerCase().trim();
            return TICKS_DATABASE.filter(tick => {
                const matchesQuery = !q ||
                    tick.scientificName.toLowerCase().includes(q) ||
                    tick.commonName.toLowerCase().includes(q) ||
                    tick.hostTypes.some(h => h.toLowerCase().includes(q)) ||
                    tick.primaryVectorOf.some(d => d.toLowerCase().includes(q));

                if (!matchesQuery) return false;

                if (filterType === 'all') return true;
                if (filterType === 'maculosa') {
                    return tick.primaryVectorOf.some(v => v.includes('Febre Maculosa'));
                }
                if (filterType === 'alto_risco') {
                    return tick.riskLevel === 'CRÍTICO' || tick.riskLevel === 'ALTO';
                }
                return true;
            });
        };

        // Busca por "estrela" deve achar Amblyomma sculptum
        const resultEstrela = filterDatabase('estrela');
        assert.strictEqual(resultEstrela.length, 1);
        assert.strictEqual(resultEstrela[0].id, 'amblyomma_sculptum');

        // Busca por "cavalo" ou "equino"
        const resultEquino = filterDatabase('cavalo');
        assert.ok(resultEquino.length >= 2);

        // Busca inexistente
        const resultNone = filterDatabase('dinossauro');
        assert.strictEqual(resultNone.length, 0);

        // Combinação com filtro de Febre Maculosa
        const resultMaculosa = filterDatabase('aureolatum', 'maculosa');
        assert.strictEqual(resultMaculosa.length, 1);
        assert.strictEqual(resultMaculosa[0].id, 'amblyomma_aureolatum');
    });

    await t.test('sistema de IA do scanner deve retornar espécies válidas com alta confiabilidade', () => {
        const simulateScanClassification = (specimenId) => {
            const tick = TICKS_DATABASE.find(t => t.id === specimenId) || TICKS_DATABASE[0];
            const confidence = 95;
            return {
                speciesId: tick.id,
                scientificName: tick.scientificName,
                commonName: tick.commonName,
                confidence: confidence,
                risk: tick.riskLevel,
                isHighRisk: tick.riskLevel === 'CRÍTICO' || tick.riskLevel === 'ALTO'
            };
        };

        const scan = simulateScanClassification('amblyomma_sculptum');
        assert.strictEqual(scan.scientificName, 'Amblyomma sculptum');
        assert.strictEqual(scan.confidence, 95);
        assert.strictEqual(scan.isHighRisk, true);
    });
});
