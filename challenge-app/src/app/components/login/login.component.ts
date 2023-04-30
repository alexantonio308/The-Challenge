import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { LoginService } from '../../core/service/login.service';
import { UserModel } from './user.model';
import { LoginFormConst } from './login-form.const';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public user: UserModel;
  public loginForm: FormGroup;
  public showToggle = false;
  LoginFormConst = LoginFormConst;

  constructor(
    private readonly loginService: LoginService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.loginForm = this.getForm();
  }

  ngOnInit() {

  }

  getForm() {
    return this.formBuilder.group({
      username: this.formBuilder.control(null, [
        Validators.required,
        Validators.minLength(3),
      ]),
      password: this.formBuilder.control(null, [
        Validators.required,
        Validators.minLength(3),
      ]),
    });
  }

  togglePassword() {
    this.showToggle = !this.showToggle;
  }

  login() {
    if (this.loginForm.invalid) return;
    this.spinner.show();
    this.loginService.login(this.loginForm?.value).subscribe({
      next: (result: any) => this.whenIsOk(result),
      error: (error: any) => this.whenThereIsError(error),
    });
  }

  whenIsOk(result: any): void {
    this.spinner.hide();
    this.loginService.storeAuthenticationToken(result);
    this.goToHome();
  }

  whenThereIsError(error: any): void {
    console.log(error);
    this.spinner.hide();

  }

  goToHome(): void {
    setTimeout(() => this.router.navigate(['']), 1000);
  }

}

export interface ILogin {
  username?: any;
  senha?: string;
}
