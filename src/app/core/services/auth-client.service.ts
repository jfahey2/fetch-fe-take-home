import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthClient {
  constructor(private http: HttpClient) {}

  public login(name: string, email: string): Observable<string> {
    return this.http.post(
      environment.apiUrl + '/auth/login',
      {
        name: name,
        email: email
      },
      { withCredentials: true, responseType: 'text' }
    );
  }

  public logout(name: string, email: string): Observable<string> {
    return this.http.post(
      environment.apiUrl + '/auth/logout',
      {
        name: name,
        email: email
      },

      { withCredentials: true, responseType: 'text' }
    );
  }
}
