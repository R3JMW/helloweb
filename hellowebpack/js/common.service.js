const httpClient = require('./http-client.service');

class CommonService {

    regex() {
        return httpClient.get('http://someurl');
    }
}

module.exports = CommonService;