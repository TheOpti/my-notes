import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: 'login.html',
  styleUrls: ['login.scss']
})
export class LoginComponent {

  constructor(private router: Router) { }

  login() {
    // TODO implement login logic
    this.router.navigate(['/application/notes']);
  }

}
