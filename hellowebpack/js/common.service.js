const httpClient = require('./http-client.service');

class CommonService {

    regex() {
        return httpClient.get('https://dv2-alb.kingland-kroger-vcp.com/noauth/users/password-strategy');
    }
}

module.exports = CommonService;