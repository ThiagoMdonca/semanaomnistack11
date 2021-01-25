const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection')
describe('ONG', () => {
    beforeEach(async () => {
        await connection.migrate.latest();
    })
    it('Should be able to create a new ONG', async () => {
        const response = await request(app)
            .post('/ongs')
            .send({
                name: "Thiago",
                email: "thiagolimamdonca@gmail.com",
                whatsapp: "47000000000",
                city: "São PAulo",
                uf: "SP"
            });
            expect(response.body).toHaveProper('id');
            expect(response.body.id).tohavLength(8);
        });
});