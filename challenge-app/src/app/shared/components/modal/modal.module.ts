import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ModalActionAdapterComponent} from './modal-action-adapter/modal-action-adapter.component';


@NgModule({
  declarations: [
    ModalActionAdapterComponent
  ],
  exports: [
    ModalActionAdapterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ModalModule { }
