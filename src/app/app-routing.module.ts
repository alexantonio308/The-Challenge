import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './core/security/auth.guard.';
import { LoginURL } from './shared/url/url.domain';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
    children :[
      {
        path: '',
        loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule),
      }
    ]
  },
  {
    path: LoginURL.BASE,
    loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule),
  },
  {path: '**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
