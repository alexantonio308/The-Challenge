import { Component, Input, OnInit } from '@angular/core';
import { environment } from '../../../../assets/environments/environment';
import { PaymentURL } from '../../../shared/url/url.domain';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ModalActionAdapterComponent } from '../../../shared/components/modal/modal-action-adapter/modal-action-adapter.component';
import { PaymentEditComponent } from '../payment-edit/payment-edit.component';
import { PaymentFormConst } from '../payment-edit/payment-form.const';
import { Observable, Subject } from 'rxjs';
import { BasicService } from '@app/core/service/basic.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-payment-list',
  templateUrl: './payment-list.component.html',
  styleUrls: ['./payment-list.component.scss'],
})
export class PaymentListComponent implements OnInit {
  @Input() item: any = null;
  public componentDestroyed$: Subject<null> = new Subject();

  modalRef: NgbModalRef | any = null;
  items: any[] = [];
  allItems: any;

  allPages: number = 0;
  params: any = this.getDefaultParam();

  formGroup: FormGroup | any = this.getForm();

  constructor(
    private modalService: NgbModal,
    private paymentList: BasicService,
    private toastService: ToastrService,
    private spinner: NgxSpinnerService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.formGroup = this.getForm();
    this.findAll();
    this.loadAll();
  }
  public getForm(): any {
    return this.formBuilder.group({});
  }

  public findAll(): void {
    this.spinner.show();
    this.paymentList.list(this.getUrl()).subscribe({
      next: (result: any) => this.onLoadSuccessAll(result),
      error: (error: any) => this.onLoadError(error),
    });
  }

  public onLoadSuccessAll(success: any) {
    this.spinner.hide();
    this.allItems = success?.items || [];
    return this.allItems;
  }

  public getPayment(): void {
    this.spinner.show();
    let idAux;
    idAux =
      this.allItems.find((element: any) => element.firstName == this.item) ||
      ' ';
    if (idAux._id != undefined) {
      this.paymentList.findById(this.getUrl(), idAux._id).subscribe({
        next: (result: any) => {
          this.onLoadSuccess(result);
          this.items = [result];
          this.toastService.success(
            result.firstName + ' ' + result.lastName + ' WAS FOUND'
          );
        },
        error: (error: any) => {
          this.spinner.hide();
          this.toastService.error(error.message + ' WAS NOT FOUND');
        },
      });
    } else {
      this.spinner.hide();
      this.toastService.error(this.item + ' WAS NOT FOUND');
    }
    this.spinner.hide();
  }

  public treatingDate(item: string): Date {
    return new Date(item);
  }

  public getUrl(): string {
    return `${environment.BASE_URL}/${PaymentURL.BASE}`;
  }

  public gotToRemoveItem(item: any): void {
    this.spinner.show();
    this.modalRef = this.modalService.open(ModalActionAdapterComponent, {
      centered: true,
    });
    this.modalRef.componentInstance.title = 'Remove a payment';
    this.modalRef.componentInstance.body = 'Are you sure you want to remove?';
    this.modalRef.result
      .then((results: any) => {
        if (results) {
          this.removeItem(item[PaymentFormConst.ID]);
          this.loadAll();
        }
      })
      .catch(() => {});
    this.spinner.hide();
  }

  public goToEditItem(item: any): void {
    this.spinner.show();
    this.modalRef = this.modalService.open(PaymentEditComponent, {
      centered: true,
      size: 'lg',
    });
    this.modalRef.componentInstance.item = item;
    this.onClosedModal();
    this.spinner.hide();
  }

  public goToNewItem(): void {
    this.modalRef = this.modalService.open(PaymentEditComponent, {
      centered: true,
      size: 'lg',
    });
    this.modalRef.componentInstance.item = null;
    this.onClosedModal();
  }

  public onClosedModal(): void {
    this.modalRef.result
      .then((results: any) => {
        if (results) {
          this.getDefaultParam();
          this.paymentList.list(this.getUrl(), this.getParams()).subscribe({
            next: (result: any) => this.onLoadSuccess(result),
            error: (error: any) => this.onLoadError(error),
          });
        }
      })
      .catch(() => {});
    this.spinner.hide();
  }

  refresh(){
    this.spinner.show();
    this.paymentList.list(this.getUrl(), this.getParams()).subscribe({
      next: (result: any) => this.onLoadSuccess(result),
      error: (error: any) => this.onLoadError(error),
    });
    this.searchTrack('');
  }

  searchTrack($value: any){
    this.item = $value;
  }

  public loadAll(): void {
    this.spinner.show();
    this.paymentList.list(this.getUrl(), this.getParams()).subscribe({
      next: (result: any) => this.onLoadSuccess(result),
      error: (error: any) => this.onLoadError(error),
    });
  }

  public onLoadSuccess(success: any): void {
    this.spinner.hide();
    this.items = success?.items || [];
    this.allPages = success?.totalPage || [];
  }

  public onLoadError(error: any): void {
    this.spinner.hide();
    console.error(error.message);
  }

  public onRemoveSuccess(value: any) {
    this.toastService.success(value.message);
    this.getDefaultParam();
    this.loadAll();
  }
  public getParams(): any {
    const params: any = this.params;
    return params;
  }

  public getDefaultParam(): any {
    this.allPages = 0;
    return {
      limit: 10,
      page: 1,
    };
  }

  public pageChange(page: number): void {
    this.params.page = page;
    this.loadAll();
  }

  public delete(url: string, id: any): Observable<any> {
    return this.paymentList.remove(url, id);
  }

  public removeItem(id: any): void {
    this.spinner.show();
    this.delete(this.getUrl(), id).subscribe({
      next: (result: any) => this.onRemoveSuccess(result),
      error: (error: any) => this.onLoadError(error),
    });
  }
}
