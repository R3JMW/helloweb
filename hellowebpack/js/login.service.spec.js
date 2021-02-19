const LoginService = require('./login.service');

xdescribe('Test Login method', () => {

    let token = null;

    beforeAll(async () => {
        // console.log('Prepare token');
        const loginService = new LoginService();
        token = await loginService.login({
            username: 'username',
            password: 'password'
        }).toPromise();
        // console.log(token);
    });

    it('Test Login', () => {
        expect(token).not.toBeNull();
    });
});