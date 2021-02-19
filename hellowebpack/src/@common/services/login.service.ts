import { Observable } from 'rxjs';
import { HttpClient } from './http-client.service';

export class LoginService {

    private readonly httpClient;

    constructor(){
        this.httpClient = new HttpClient();
    }

    public login(user: { username: string, password: string }): Observable<any> {
        return this.httpClient.post(`http://someurl?grant_type=password&username=${user.username}&password=${encodeURIComponent(user.password)}`, user);
    }

    private persistToken(token: any): boolean {
        localStorage.setItem('token', token.access_token);
        return true;
    }
}