import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from "../../../../services/auth.service";
import { Router } from '@angular/router';

@Component({
  selector: 'login-form',
  templateUrl: 'login-form.html',
  styleUrls: ['../../login.scss']
})
export class LoginFormComponent {

  public form: FormGroup;
  public submitted: boolean;
  public events: any[] = [];
  public showCredentialsError: boolean;
  public showLoadingSpinner: boolean;

  constructor(private authService: AuthService, private _fb: FormBuilder, private router: Router) {
    this.submitted = false;
    this.showCredentialsError = false;
    this.showLoadingSpinner = false;
  }

  ngOnInit() {
    this.form = this._fb.group({
      login: ['', [<any>Validators.required]],
      password: ['', [<any>Validators.required]]
    });

    this.subcribeToFormChanges();
  }


  subcribeToFormChanges() {
    const formStatusChanges$ = this.form.statusChanges;
    const formValueChanges$ = this.form.valueChanges;

    formStatusChanges$.subscribe(x => this.events.push({ event: 'STATUS_CHANGED', object: x }));
    formValueChanges$.subscribe(x => this.events.push({ event: 'VALUE_CHANGED', object: x }));
  }


  login(model, isValid) {
    this.showLoadingSpinner = true;
    this.submitted = true;
    if (isValid) {
      this.authService.login(model.login, model.password)
        .then(() => {
          this.showLoadingSpinner = false;
          this.router.navigate(['/application/notes']);
        })
        .catch(() => {
          this.showCredentialsError = true;
          this.showLoadingSpinner = false;
        });
    }
  }

}
