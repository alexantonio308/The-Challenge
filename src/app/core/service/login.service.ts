import { Injectable } from '@angular/core';
import { UserModel } from '../../components/login/user.model';
import { Observable, tap } from 'rxjs';
import { AuthService } from '@app/core/service/auth.service';
import { environment } from 'src/assets/environments/environment';
import { AuthURL, LoginURL } from '@app/shared/url/url.domain';
import { ILogin } from '@app/components/login/login.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LocalStorageConst } from '../utils/local-storage.const';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService extends AuthService{
  public user: UserModel;

  private url: string = `${environment.BASE_URL}/${AuthURL.BASE}`;

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {
    super();
  }

  public getHeaders(): HttpHeaders {
    let httpHeaders: HttpHeaders = new HttpHeaders();
    const authorization: any = localStorage?.getItem(LocalStorageConst.AUTHORIZATION);
    if (authorization) {
      httpHeaders = new HttpHeaders().set(LocalStorageConst.AUTHORIZATION, `Bearer ${authorization}`);
    }
    return httpHeaders;
  }

  login(iLogin: ILogin): Observable<UserModel> {
    return this.http.post<UserModel>(`${this.url}/${LoginURL.BASE}`,iLogin )  }

  logout() {

    this.clearToken();
    this.router.navigate([`/${LoginURL.BASE}`]);
  }

  update(iUser: IUser): Observable<any> {
    const headers: HttpHeaders = this.getHeaders();
    return this.http.put(`${this.url}/${AuthURL.UPDATE}`, iUser, {headers});
  }

  storeAuthenticationToken(jwt: any): void {
    this.setLocalStorageToken(jwt['access_token']);
  }
}

export interface IUser {
  firstName?: string;
  lastName?: string;
  bio?: string;
  avatar?: string;
}

