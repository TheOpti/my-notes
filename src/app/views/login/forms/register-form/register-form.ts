import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'register-form',
  templateUrl: 'register-form.html',
  styleUrls: ['../../login.scss']
})
export class RegisterFormComponent {

  constructor(private router: Router) { }

  register() {
    console.log('register()');
  }

}
