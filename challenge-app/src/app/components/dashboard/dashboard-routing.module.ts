import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { PaymentListComponent } from './payment-list/payment-list.component';


const routes: Routes = [
  { path: '',
  component: DashboardComponent,
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
