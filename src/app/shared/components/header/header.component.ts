import { Component, OnInit } from '@angular/core';
import { LoginFormConst } from '@app/components/login/login-form.const';
import { LoginService } from '@app/core/service/login.service';
import { PaymentURL } from '@app/shared/url/url.domain';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  username: string = '';

  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
    this.getUsername();
  }

  getUsername(): void {
    const token: any = this.loginService.getDecodeToken();
    this.username = token[LoginFormConst.USERNAME];
  }

  logoutSystem(): void {
    this.loginService.logout();
  }

  getPaymentUrl(): string {
    return `${PaymentURL.BASE}`;
  }
}
