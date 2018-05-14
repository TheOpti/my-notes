import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  saveToken(token) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  removeToken() {
    localStorage.removeItem('token');
  }

  login(login, password) {
    return this.http.post('http://localhost:3000/login', { login, password })
      .toPromise()
      .then((response) => {
        this.saveToken(response.token);
        this.router.navigate(['/application/notes']);
      })
      .catch((error) => {
        return error;
      });
  }

  register(user) {
    this.http.post('http://localhost:3000/register', { user })
      .subscribe(
        () => {
          this.router.navigate(['/registration-complete']);
        },
        (error) => { return error; }
      );
  }

  logout() {
    this.removeToken();
    this.router.navigate(['/login']);
  }

}
