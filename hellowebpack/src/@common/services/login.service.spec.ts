import { LoginService } from './login.service';

describe('Test login method', () => {
    let loginService: LoginService;

    beforeEach(() => {
        loginService = new LoginService();
    });

    it('Asynchronous test', async () => {
        const token = await loginService.login({
            username: 'username',
            password: 'password'
        }).toPromise();
        expect(token).not.toBeNull();
    });

    it('Test private methods', () => {
        const persistToken = loginService['persistToken'];
        if(persistToken) {
            expect(persistToken({ access_token: 'token string' })).not.toBeTrue();
        } else {
            throw new Error('persistToken is undefined');
        }
    });
});