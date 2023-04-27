import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BaseComponent } from '@app/core/interface/base.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { LoginService } from '../../core/service/login.service';
import { UserModel } from './user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent extends BaseComponent implements OnInit {
  public user: UserModel;
  public loginForm: FormGroup;
  public loading: boolean = false;

  constructor(
    private readonly loginService: LoginService,
    private spinner: NgxSpinnerService
  ) {
    super();
    this.loginForm = this.getForm();
  }

  ngOnInit() {
    this.checkCampos();
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

  login() {
    if (this.loginForm.invalid) return;
    this.spinner.show();
    this.loading = true;

    var Username = this.loginForm.controls['username'].value;
    var Password = this.loginForm.controls['password'].value;

    this.loginService.login(Username, Password).subscribe({
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
  }

  goToHome(): void {
    setTimeout(() => this.router.navigate(['']), 1000);
  }

  private checkCampos(): void {
    this.loginForm.get('username')?.valueChanges.subscribe((value: any) => {
      console.log(value);
    });
    this.loginForm.get('password')?.valueChanges.subscribe((value: any) => {
      console.log(value);
    });
  }

  validaSenha(opcao: string) {
    if (this.loginForm.controls['password'].hasError('required')) return true;
    return this.loginForm.controls['password'].hasError(opcao);
  }

  // aplicaCssErro(campo){
  //   return{
  //     'has-error': this.validaCampo(campo),
  //     'has-feedback': this.validaCampo(campo),
  //   }
  // }
  // ChecaSessao(): Observable<any>{

  // }
}
