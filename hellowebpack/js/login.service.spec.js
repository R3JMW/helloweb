const LoginService = require('./login.service');

xdescribe('Test Login method', () => {

    let token = null;

    beforeAll(async () => {
        // console.log('Prepare token');
        const loginService = new LoginService();
        token = await loginService.login({
            username: 'chris.yang.cui@kingland.com',
            password: 'K1ngland!'
        }).toPromise();
        // console.log(token);
    });

    it('Test Login', () => {
        expect(token).not.toBeNull();
    });
});