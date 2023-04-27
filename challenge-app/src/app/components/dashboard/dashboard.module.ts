import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { PaymentListComponent } from './payment-list/payment-list.component';


@NgModule({
  declarations: [
    DashboardComponent,
    PaymentListComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule
  ],
})
export class DashboardModule { }
