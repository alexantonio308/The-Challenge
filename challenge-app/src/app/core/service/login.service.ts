import { Injectable } from '@angular/core';
import { UserModel } from '../../components/login/user.model';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '@app/core/service/auth.service';
import { environment } from 'src/assets/environments/environment';
import { AuthURL, LoginURL } from '@app/shared/url/url.domain';

@Injectable({
  providedIn: 'root',
})
export class LoginService extends AuthService{
  public user: UserModel;

  private url: string = `${environment.BASE_URL}/${AuthURL.BASE}`;

  constructor() {
    super();
  }

  login(username: string, password: string): Observable<UserModel> {
    console.log("...LOGANDO");
    return this.http.post<UserModel>(`${this.url}/${LoginURL.BASE}`, { username, password })  }

  logout() {
    this.clearToken();
    this.router.navigate([`/${LoginURL.BASE}`]);
  }

  storeAuthenticationToken(jwt: any): void {
    this.setLocalStorageToken(jwt['access_token']);
  }

}
