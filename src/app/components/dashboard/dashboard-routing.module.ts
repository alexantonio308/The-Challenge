import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { PaymentListComponent } from './payment-list/payment-list.component';
import { AuthGuard } from '@app/core/security/auth.guard.';


const routes: Routes = [
  { path: '',
  component: DashboardComponent,
  canActivate: [AuthGuard],
  canLoad: [AuthGuard],
  children: [
    {
      path: '',
      component: PaymentListComponent,
      canLoad: [AuthGuard],
    },
  ]
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
