import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { HeaderModule } from './components/header/header.module';
import { ModalModule } from './components/modal/modal.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HeaderModule,
    ModalModule
  ]
})
export class SharedModule {
}
