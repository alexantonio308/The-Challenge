import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '@app/core/service/login.service';
import { LoginURL } from '@app/shared/url/url.domain';
import { Observable, tap } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private readonly loginService: LoginService, private readonly router: Router) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      tap({
        next: (value: any) => {
        },
        error: (err: any) => {
          if (err instanceof HttpErrorResponse && err.status === 401) {
            this.loginService.logout();
            this.router.navigate([`/${LoginURL.BASE}`]);
          }
        },
      })
    );
  }
}
