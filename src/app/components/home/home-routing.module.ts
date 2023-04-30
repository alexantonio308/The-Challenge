import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@app/core/security/auth.guard.';
import { AuthURL, DashboardURL } from '@app/shared/url/url.domain';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: DashboardURL.BASE, pathMatch: 'full' },
      {
        path: DashboardURL.BASE,
        loadChildren: () =>
          import('../dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
          canActivate: [AuthGuard],
          canLoad: [AuthGuard],
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
