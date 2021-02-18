const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const { Observable } = require('rxjs');

class HttpClient {
    constructor() {}

    get(url, headers, responseType) {
        return new Observable((observer) => {
            const xhr = new XMLHttpRequest();
            xhr.open('GET', url, true);
            headers && headers.forEach(({key, value}) => {
                xhr.setRequestHeader(key, value);
            });
            xhr.responseType = responseType;
            xhr.onload = () => {
                observer.next(xhr.response);
                observer.complete();
            }
            xhr.onerror = err => {
                observer.next(err);
                observer.complete();
            };
            xhr.send(null);
        });
    }

    post() {}

    put() {}

}

module.exports = HttpClient;