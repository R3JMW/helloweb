const { Observable } = require('rxjs');
const fetch = require('node-fetch');

class HttpClient {
    constructor() {}

    get(url) {
        return new Observable(observer => {
            fetch(url, {
                method: 'GET'
            }).then(res => res.json()).then(res => {
                observer.next(res);
                observer.complete();
            }).catch(err => {
                observer.error(err);
                observer.complete();
            });            
        });
    }

    post(url, data) {
        return new Observable(observer => {
            fetch(url, {
                method: 'POST',
                body: JSON.stringify(data)
            }).then(res => res.json()).then(res => {
                observer.next(res);
                observer.complete();
            }).catch(err => {
                observer.error(err);
                observer.complete();
            });
        });
    }
}

module.exports = new HttpClient();