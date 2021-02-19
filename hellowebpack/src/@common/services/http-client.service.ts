import fetch from 'node-fetch';
import { Observable } from 'rxjs';

export class HttpClient {

    constructor() {}

    public get(url: string): Observable<any> {
        return new Observable<any>(observer => {
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

    public post(url: string, data: any): Observable<any> {
        return new Observable<any>(observer => {
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
        })
    }
}