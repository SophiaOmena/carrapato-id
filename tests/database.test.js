const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const { TICKS_DATABASE } = require('../js/database.js');

test('Banco de Dados de Carrapatos - Validação de Integridade e Estrutura', async (t) => {
    await t.test('deve conter exatamente 8 espécies catalogadas', () => {
        assert.ok(Array.isArray(TICKS_DATABASE));
        assert.strictEqual(TICKS_DATABASE.length, 8);
    });

    await t.test('todas as espécies devem possuir campos obrigatórios preenchidos', () => {
        const requiredFields = [
            'id',
            'scientificName',
            'commonName',
            'family',
            'riskLevel',
            'riskColor',
            'morphology',
            'hostTypes',
            'primaryVectorOf',
            'distribution',
            'habitat',
            'description',
            'imageSvg'
        ];

        TICKS_DATABASE.forEach(tick => {
            requiredFields.forEach(field => {
                assert.ok(tick[field] !== undefined && tick[field] !== null, `Campo ausente ${field} em ${tick.scientificName}`);
            });
            assert.ok(tick.hostTypes.length > 0, `Hospedeiros vazios em ${tick.scientificName}`);
            assert.ok(typeof tick.morphology === 'object');
            assert.ok(tick.morphology.capitulum, `Capítulo ausente em ${tick.scientificName}`);
            assert.ok(tick.morphology.scutum, `Escudo ausente em ${tick.scientificName}`);
        });
    });

    await t.test('todas as imagens SVG associadas devem existir no disco', () => {
        const assetsDir = path.join(__dirname, '..', 'assets', 'images');
        TICKS_DATABASE.forEach(tick => {
            const imagePath = path.join(assetsDir, tick.imageSvg);
            assert.ok(fs.existsSync(imagePath), `Arquivo de imagem não encontrado: ${tick.imageSvg}`);
            const stat = fs.statSync(imagePath);
            assert.ok(stat.size > 200, `Arquivo de imagem corrompido ou vazio: ${tick.imageSvg}`);
        });
    });

    await t.test('deve conter as espécies de maior relevância em saúde pública (FMB)', () => {
        const sculptum = TICKS_DATABASE.find(t => t.id === 'amblyomma_sculptum');
        assert.ok(sculptum, 'Amblyomma sculptum deve estar presente');
        assert.strictEqual(sculptum.riskLevel, 'CRÍTICO');
        assert.ok(sculptum.primaryVectorOf.some(v => v.includes('Febre Maculosa')));

        const aureolatum = TICKS_DATABASE.find(t => t.id === 'amblyomma_aureolatum');
        assert.ok(aureolatum, 'Amblyomma aureolatum deve estar presente');
        assert.strictEqual(aureolatum.riskLevel, 'CRÍTICO');

        const sanguineus = TICKS_DATABASE.find(t => t.id === 'rhipicephalus_sanguineus');
        assert.ok(sanguineus, 'Rhipicephalus sanguineus deve estar presente');
        assert.ok(sanguineus.hostTypes.includes('Cães domésticos'));
    });
});
