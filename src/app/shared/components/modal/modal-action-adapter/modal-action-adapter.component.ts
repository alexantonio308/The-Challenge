import {Component, Input} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-modal-action-adapter',
  templateUrl: './modal-action-adapter.component.html',
  styleUrls: ['./modal-action-adapter.component.scss']
})
export class ModalActionAdapterComponent {

  @Input() title: any = null;
  @Input() body: any = null;

  constructor(public activeModal: NgbActiveModal) {
  }

}
