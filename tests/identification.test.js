const test = require('node:test');
const assert = require('node:assert/strict');

const { IDENTIFICATION_STEPS, IDENTIFICATION_KEY_TREE, TICKS_DATABASE } = require('../js/database.js');

test('Chave Dicotômica - Validação de Rotas e Consistência Taxonômica', async (t) => {
    await t.test('todas as etapas da chave dicotômica devem ter estrutura válida', () => {
        assert.ok(IDENTIFICATION_STEPS);
        const validSpeciesIds = new Set(TICKS_DATABASE.map(t => t.id));
        const stepKeys = Object.keys(IDENTIFICATION_STEPS);

        assert.ok(stepKeys.includes('step_1'), 'step_1 deve ser o ponto de entrada');

        stepKeys.forEach(stepKey => {
            const step = IDENTIFICATION_STEPS[stepKey];
            assert.ok(step.question, `Pergunta ausente na etapa ${stepKey}`);
            assert.ok(Array.isArray(step.options) && step.options.length >= 2, `Opções insuficientes na etapa ${stepKey}`);

            step.options.forEach(option => {
                assert.ok(option.text, `Texto de opção ausente na etapa ${stepKey}`);
                const hasNext = Boolean(option.nextStep);
                const hasResult = Boolean(option.resultSpecies);

                assert.ok(hasNext || hasResult, `Opção deve apontar para nextStep ou resultSpecies: ${option.text}`);
                if (hasNext) {
                    assert.ok(IDENTIFICATION_STEPS[option.nextStep], `Próximo passo inexistente: ${option.nextStep}`);
                }
                if (hasResult) {
                    assert.ok(validSpeciesIds.has(option.resultSpecies), `Espécie resultante inexistente no banco: ${option.resultSpecies}`);
                }
            });
        });
    });

    await t.test('deve navegar corretamente na rota de Argasidae (carrapato mole sem escudo)', () => {
        const step1 = IDENTIFICATION_STEPS['step_1'];
        const softOption = step1.options.find(opt => opt.text.toLowerCase().includes('mole') || opt.text.toLowerCase().includes('argasidae'));
        assert.ok(softOption, 'Deve haver opção para corpo mole/sem escudo dorsal');
        assert.strictEqual(softOption.nextStep, 'step_argasidae');

        const stepArgas = IDENTIFICATION_STEPS['step_argasidae'];
        const galinhaOpt = stepArgas.options.find(opt => opt.resultSpecies === 'argas_miniatus');
        assert.ok(galinhaOpt, 'Opção para Argas miniatus deve existir');

        const mouroOpt = stepArgas.options.find(opt => opt.resultSpecies === 'ornithodoros_brasiliensis');
        assert.ok(mouroOpt, 'Opção para Ornithodoros brasiliensis deve existir');
    });

    await t.test('deve navegar até Amblyomma sculptum pelo caminho morfológico correto', () => {
        // Passo 1: Escudo duro -> step_2
        const step1 = IDENTIFICATION_STEPS['step_1'];
        const hardOption = step1.options.find(opt => opt.text.toLowerCase().includes('duro'));
        assert.strictEqual(hardOption.nextStep, 'step_2');

        // Passo 2: Escudo ornamentado -> step_3_ornate
        const step2 = IDENTIFICATION_STEPS['step_2'];
        const ornateOption = step2.options.find(opt => opt.text.toLowerCase().includes('ornamentado'));
        assert.strictEqual(ornateOption.nextStep, 'step_3_ornate');

        // Passo 3: Capivara / manchas cinza-esbranquiçadas -> amblyomma_sculptum
        const step3 = IDENTIFICATION_STEPS['step_3_ornate'];
        const sculptumOption = step3.options.find(opt => opt.resultSpecies === 'amblyomma_sculptum');
        assert.ok(sculptumOption, 'Opção de identificação para Amblyomma sculptum deve existir');
    });

    await t.test('deve navegar até Rhipicephalus sanguineus para base hexagonal inornada', () => {
        // Passo 2: Inornado -> step_3_inornate
        const step2 = IDENTIFICATION_STEPS['step_2'];
        const inornateOption = step2.options.find(opt => opt.text.toLowerCase().includes('inornado'));
        assert.strictEqual(inornateOption.nextStep, 'step_3_inornate');

        // Passo 3: Base hexagonal e cão -> rhipicephalus_sanguineus
        const step3Inornate = IDENTIFICATION_STEPS['step_3_inornate'];
        const dogOption = step3Inornate.options.find(opt => opt.resultSpecies === 'rhipicephalus_sanguineus');
        assert.ok(dogOption, 'Opção de identificação para Rhipicephalus sanguineus deve existir');
    });
});
