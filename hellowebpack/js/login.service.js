const httpClient = require('./http-client.service');
class LoginService {
    
    login(user) {
        return httpClient.post(`https://dv2-alb.kingland-kroger-vcp.com/oauth/token?client_id=hub_next_user&grant_type=password&username=${user.username}&password=${encodeURIComponent(user.password)}&scope=trust`, user);
    }
}

// const loginService = new LoginService();
// loginService.login({
//     username: 'chris.yang.cui@kingland.com',
//     password: 'K1ngland!'
// }).subscribe(res => console.log(res), err => console.log(err));

module.exports = LoginService;