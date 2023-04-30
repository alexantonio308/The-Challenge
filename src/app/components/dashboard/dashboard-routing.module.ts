import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { PaymentListComponent } from './payment-list/payment-list.component';
import { AuthGuard } from '@app/core/security/auth.guard.';


const routes: Routes = [
  { path: '',
  component: DashboardComponent,
  canActivate: [AuthGuard],
  children: [
    {
      path: '',
      component: PaymentListComponent,
    },
  ]
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
