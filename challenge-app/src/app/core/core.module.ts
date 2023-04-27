import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AuthService} from "./service/auth.service";
import { AuthGuard } from './security/auth.guard.';
import { LoginService } from './service/login.service';
import { FormBuilder } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers: [AuthGuard, AuthService, LoginService, FormBuilder]
})
export class CoreModule { }
