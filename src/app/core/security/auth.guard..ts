import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from '@app/core/service/auth.service';
import { LoginURL } from '@app/shared/url/url.domain';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private readonly authService: AuthService,
     private readonly router: Router) {}

  canLoad(router: Route): boolean {
    console.log("Verificando se o usuario pode acessar");
    return this.handleLogin();
  }

  canActivate(
    router: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    return this.handleLogin();
  }

  public handleLogin(): boolean {
    if (this.authService.getLocalStorageToken()) {
      if (this.authService.isAuthenticated(this.authService.getLocalStorageToken())) {
        return true;
      }
    }
    this.router.navigate([`/${LoginURL.BASE}`]).then(
      (result: any) => {
        console.log(result);
      }, (error: any) => {
        console.log(error);
      });
    return false;
  }
}
