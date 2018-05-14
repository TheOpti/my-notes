import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {AuthService} from "../../../../services/auth.service";

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

  constructor(private authService: AuthService, private _fb: FormBuilder) {
    this.submitted = false;
    this.showCredentialsError = false;
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


  save(model, isValid) {
    this.submitted = true;
    if (isValid) {
      this.authService.login(model.login, model.password).then((err) => {
        this.showCredentialsError = true;
      });
    }
  }

}
