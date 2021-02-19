const httpClient = require('./http-client.service');
class LoginService {
    
    login(user) {
        return httpClient.post(`http://someurl?username=${user.username}&password=${encodeURIComponent(user.password)}`, user);
    }
}

// const loginService = new LoginService();
// loginService.login({
//     username: 'chris.yang.cui@kingland.com',
//     password: 'K1ngland!'
// }).subscribe(res => console.log(res), err => console.log(err));

module.exports = LoginService;