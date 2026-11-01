const test = require('node:test');
const assert = require('node:assert/strict');

const { INITIAL_NOTIFICATIONS, TICKS_DATABASE } = require('../js/database.js');

test('Sistema de Notificações e Ocorrências - QA', async (t) => {
    await t.test('notificações iniciais devem conter campos válidos e coordenadas geográficas válidas', () => {
        assert.ok(Array.isArray(INITIAL_NOTIFICATIONS));
        assert.ok(INITIAL_NOTIFICATIONS.length >= 3);

        INITIAL_NOTIFICATIONS.forEach(notif => {
            assert.ok(notif.id, 'ID da notificação obrigatório');
            assert.ok(notif.speciesName, 'Nome da espécie obrigatório');
            assert.ok(notif.locationName, 'Nome do local obrigatório');
            assert.ok(notif.date, 'Data da notificação obrigatória');
            assert.ok(typeof notif.latitude === 'number', 'Latitude deve ser número');
            assert.ok(typeof notif.longitude === 'number', 'Longitude deve ser número');

            // Validação das coordenadas brasileiras
            assert.ok(notif.latitude < 5 && notif.latitude > -35, `Latitude fora da faixa do Brasil: ${notif.latitude}`);
            assert.ok(notif.longitude < -34 && notif.longitude > -74, `Longitude fora da faixa do Brasil: ${notif.longitude}`);
        });
    });

    await t.test('todas as espécies nas notificações iniciais devem corresponder ao catálogo', () => {
        const validIds = new Set(TICKS_DATABASE.map(t => t.id));
        INITIAL_NOTIFICATIONS.forEach(notif => {
            assert.ok(validIds.has(notif.speciesId), `Espécie referenciada desconhecida: ${notif.speciesId}`);
        });
    });

    await t.test('simulação de criação de nova notificação com validação de dados', () => {
        const createNotification = (data) => {
            if (!data.speciesId) throw new Error('Espécie é obrigatória');
            if (!data.locationName || data.locationName.trim().length === 0) throw new Error('Localização é obrigatória');
            if (!data.host) throw new Error('Hospedeiro é obrigatório');

            const specObj = TICKS_DATABASE.find(t => t.id === data.speciesId);
            return {
                id: `notif-${Date.now()}`,
                speciesId: data.speciesId,
                speciesName: specObj ? specObj.scientificName : 'Espécime não catalogado',
                commonName: specObj ? specObj.commonName : 'Desconhecido',
                date: new Date().toISOString().split('T')[0],
                host: data.host,
                locationName: data.locationName.trim(),
                latitude: data.latitude || -23.55,
                longitude: data.longitude || -46.63,
                risk: specObj ? specObj.riskLevel : 'EM INVESTIGAÇÃO',
                notes: data.notes || ''
            };
        };

        const validNotif = createNotification({
            speciesId: 'amblyomma_sculptum',
            host: 'Capivara',
            locationName: 'Lagoa do Taquaral, Campinas - SP',
            notes: 'Múltiplos carrapatos observados em área de piquenique'
        });

        assert.strictEqual(validNotif.speciesName, 'Amblyomma sculptum');
        assert.strictEqual(validNotif.risk, 'CRÍTICO');
        assert.ok(validNotif.id.startsWith('notif-'));

        assert.throws(() => {
            createNotification({ speciesId: '', host: 'Cão', locationName: 'Parque' });
        }, /Espécie é obrigatória/);

        assert.throws(() => {
            createNotification({ speciesId: 'amblyomma_sculptum', host: 'Cão', locationName: '   ' });
        }, /Localização é obrigatória/);
    });

    await t.test('filtros do catálogo devem retornar resultados corretos', () => {
        // Filtro por febre maculosa
        const maculosaTicks = TICKS_DATABASE.filter(t => t.primaryVectorOf.some(v => v.includes('Febre Maculosa')));
        assert.ok(maculosaTicks.length >= 2, 'Pelo menos Amblyomma sculptum e A. aureolatum devem ser vetores de Febre Maculosa');
        assert.ok(maculosaTicks.some(t => t.id === 'amblyomma_sculptum'));
        assert.ok(maculosaTicks.some(t => t.id === 'amblyomma_aureolatum'));

        // Filtro por hospedeiro cão
        const dogTicks = TICKS_DATABASE.filter(t => t.hostTypes.some(h => h.toLowerCase().includes('cão') || h.toLowerCase().includes('cães')));
        assert.ok(dogTicks.some(t => t.id === 'rhipicephalus_sanguineus'));

        // Filtro por alto risco ou crítico
        const highRisk = TICKS_DATABASE.filter(t => t.riskLevel === 'CRÍTICO' || t.riskLevel === 'ALTO');
        assert.ok(highRisk.length >= 3);
    });
});
