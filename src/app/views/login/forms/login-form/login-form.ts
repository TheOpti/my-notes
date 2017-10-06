import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'login-form',
  templateUrl: 'login-form.html',
  styleUrls: ['../../login.scss']
})
export class LoginFormComponent {

  constructor(private router: Router) { }

  login() {
    // TODO implement login logic
    this.router.navigate(['/application/notes']);
  }

}
