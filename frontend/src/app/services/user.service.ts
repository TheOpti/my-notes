import { Injectable } from '@angular/core';
import { BaseHttpClient } from './baseHttp.service';

@Injectable()
export class UserService {

  constructor(private http: BaseHttpClient) { }

  getUserData() {
    return this.http.get('http://localhost:3000/user');
  }

}
