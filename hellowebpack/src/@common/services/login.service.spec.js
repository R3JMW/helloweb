const HttpClient = require('./http-client.service');

describe('Test HTTP method', () => {

    it('Test GET', async () => {
        const httpClient = new HttpClient();
        const regex = await httpClient.get('/noauth/users/password-strategy').toPromise();
        expect(regex).toBe(true);
    });
});