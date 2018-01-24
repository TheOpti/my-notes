import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AuthService } from "./auth.service";

@Injectable()
export class BaseHttpClient {

  constructor(private http: HttpClient, private auth: AuthService) {}

  createAuthorizationHeader() {
    return new HttpHeaders()
      .set('Token',  this.auth.getToken());
  }

  get(url) {
    const headers = this.createAuthorizationHeader();
    return this.http.get(url, { headers });
  }

  post(url, data) {
    const headers = this.createAuthorizationHeader();
    return this.http.post(url, data, { headers });
  }

  put(url, data) {
    const headers = this.createAuthorizationHeader();
    return this.http.put(url, data, { headers });
  }

  delete(url) {
    const headers = this.createAuthorizationHeader();
    return this.http.delete(url, { headers });
  }

}
