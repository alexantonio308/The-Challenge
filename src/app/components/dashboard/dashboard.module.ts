import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { PaymentListComponent } from './payment-list/payment-list.component';
import { PaymentEditComponent } from './payment-edit/payment-edit.component';
import { NgbDropdownModule, NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    DashboardComponent,
    PaymentListComponent,
    PaymentEditComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    NgbPaginationModule,
    NgbDropdownModule,
    NgbTypeaheadModule,
    NgbTypeaheadModule,
    ReactiveFormsModule,
  ],
  providers: [  ]
})
export class DashboardModule { }
