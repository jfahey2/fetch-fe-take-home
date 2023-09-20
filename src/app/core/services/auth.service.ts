import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(name: string, email: string) {
    return this.http.post(`${environment.apiUrl}/auth/login`, { name, email}, {
      withCredentials: true,
      responseType: 'text',
    });
  }

  logout() {
    return this.http.post(`${environment.apiUrl}/auth/logout`, {
      responseType: 'text',
    });
  }
}
