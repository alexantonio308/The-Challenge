import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    HeaderComponent,

  ],
  exports:[HeaderComponent],
  imports: [
    CommonModule,
    NgbDropdownModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [HeaderComponent]
})
export class HeaderModule { }
