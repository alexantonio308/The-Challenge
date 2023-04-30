import {Injectable} from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import {LocalStorageConst} from "../utils/local-storage.const";

@Injectable({
  providedIn: 'root'
})
export class AuthService  {

  protected jwtHelper: JwtHelperService = new JwtHelperService();

  constructor() {

  }

  getDecodeToken(): any {
    const token: string = this.getLocalStorageToken();
    if (token !== '') {
      return this.jwtHelper.decodeToken(String(token));
    }
    return null;
  }

  clearToken(): void {
    localStorage.removeItem(LocalStorageConst.AUTHORIZATION);
  }

  getLocalStorageToken() {
    const token: string | any = localStorage.getItem(LocalStorageConst.AUTHORIZATION);
    return token ? String(token) : '';
  }

  setLocalStorageToken(token: any): void {
    localStorage.setItem(LocalStorageConst.AUTHORIZATION, token);
  }

  isAuthenticated(token: string): any {
    return token.length !== 0 && !this.jwtHelper.isTokenExpired(token);
  }
}
