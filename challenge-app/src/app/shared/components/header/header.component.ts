import { Component, OnInit } from '@angular/core';
import { LoginService } from '@app/core/service/login.service';

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
    this.username = token[this.username];
  }

  logoutSystem(): void {
    this.loginService.logout();
  }

}
