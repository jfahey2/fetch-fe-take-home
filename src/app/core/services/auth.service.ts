import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthClient } from './auth-client.service';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenKey = 'token';

  currentUser$ = new BehaviorSubject<
    { name: string; email: string } | null | undefined
  >(undefined);

  isLoggedIn$ = new BehaviorSubject<boolean>(this.isLoggedIn());

  constructor(
    private http: HttpClient,
    private router: Router,
    private authClient: AuthClient
  ) {}

  public login(name: string, email: string): void {
    this.authClient.login(name, email).subscribe((token) => {
      localStorage.setItem(this.tokenKey, token);

      this.currentUser$.next({ name: name, email: email });

      this.router.navigate(['/']);
    });
  }

  public logout() {
    localStorage.removeItem(this.tokenKey);
    this.router.navigate(['/login']);
  }

  public isLoggedIn(): boolean {
    const token = localStorage.getItem(this.tokenKey);
    return token != null && token.length > 0;
  }

  public updateLoginStatus(): void {
    this.isLoggedIn$.next(this.isLoggedIn());
  }

  public getToken(): string | null {

    return this.isLoggedIn() ? localStorage.getItem(this.tokenKey) : null;
  }
}
