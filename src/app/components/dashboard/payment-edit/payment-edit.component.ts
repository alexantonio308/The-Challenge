import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { environment } from '../../../../assets/environments/environment';
import { PaymentURL } from '../../../shared/url/url.domain';
import { PaymentFormConst } from './payment-form.const';
import { LoginService } from '../../../core/service/login.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import { BasicService } from '@app/core/service/basic.service';
import { ToastrService } from 'ngx-toastr';
import { FormGroup } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-payment-edit',
  templateUrl: './payment-edit.component.html',
  styleUrls: ['./payment-edit.component.scss'],
})
export class PaymentEditComponent implements OnInit {
  @Input() item: any;

  PaymentFormConst = PaymentFormConst;
  formGroup: FormGroup | any = this.getForm();

  constructor(
    public activeModal: NgbActiveModal,
    private readonly loginService: LoginService,
    private paymentedit: BasicService,
    private spinner: NgxSpinnerService,
    private toastService: ToastrService,
    private formBuilder: FormBuilder,
    private datePipe: DatePipe
  ) {

  }

  ngOnInit(): void {
    this.formGroup = this.getForm();
    this.disableForm();
    this.updateForm(this.item);
  }

  public getForm(): any {
    return this.formBuilder.group({
      [PaymentFormConst.ID]: [null, []],
      [PaymentFormConst.DATE]: [null, [Validators.required]],
      [PaymentFormConst.FIRST_NAME]: [null, [Validators.required]],
      [PaymentFormConst.LAST_NAME]: [null, [Validators.required]],
      [PaymentFormConst.IS_PAYED]: [false, [Validators.required]],
      [PaymentFormConst.TITLE]: [null, []],
      [PaymentFormConst.USERNAME]: [null, [Validators.required]],
      [PaymentFormConst.VALUE]: [null, [Validators.required]],
      [PaymentFormConst.IMAGE]: [null, []],
    });
  }

  public getSpecificForm(name: string): any {
    return this.formGroup.get(name);
  }
  public updateForm(item: any): void {
    if (this.item?._id) {
      this.formGroup.get(PaymentFormConst.ID).setValue(this.item[PaymentFormConst.ID]);
      this.formGroup.get(PaymentFormConst.DATE).setValue(this.getDateBrazilianFormat(this.item[PaymentFormConst.DATE]));
      this.formGroup.get(PaymentFormConst.FIRST_NAME).setValue(this.item[PaymentFormConst.FIRST_NAME]);
      this.formGroup.get(PaymentFormConst.LAST_NAME).setValue(this.item[PaymentFormConst.LAST_NAME]);
      this.formGroup.get(PaymentFormConst.IS_PAYED).setValue(this.item[PaymentFormConst.IS_PAYED]);
      this.formGroup.get(PaymentFormConst.TITLE).setValue(this.item[PaymentFormConst.TITLE]);
      this.formGroup.get(PaymentFormConst.USERNAME).setValue(this.item[PaymentFormConst.USERNAME]);
      this.formGroup.get(PaymentFormConst.VALUE).setValue(this.item[PaymentFormConst.VALUE]);
      this.formGroup.get(PaymentFormConst.IMAGE).setValue(this.item[PaymentFormConst.IMAGE]);
    } else {
      const token: any = this.getUsernameFromLoggedUser();
      this.getSpecificForm(PaymentFormConst.ID).setValue(token[PaymentFormConst.ID]);
      this.getSpecificForm(PaymentFormConst.USERNAME).setValue(token[PaymentFormConst.USERNAME]);
      this.getSpecificForm(PaymentFormConst.DATE).setValue(this.getDateBrazilianFormat(new Date().toISOString()));
    }
  }

  getUrl(): string {
    return `${environment.BASE_URL}/${PaymentURL.BASE}`;
  }

  public disableForm(): void {
    this.getSpecificForm(PaymentFormConst.USERNAME).disable();
  }

  public getUsernameFromLoggedUser(): any {
    return this.loginService.getDecodeToken();
  }

  save(): void {
    this.spinner.show();
    this.insertOrUpdate().subscribe({
      next: (result: any) => {
        this.toastService.success(result.message);
        this.spinner.hide();
        this.activeModal.close(true);
      },
      error: (error: any) => {
        this.toastService.error(error.message);
        this.spinner.hide();
      },
    });
  }
  public insertOrUpdate(): Observable<any> {
    const form: any = this.convertFormToSend(this.formGroup?.value);
    return this.item?._id == undefined || null
    ? this.paymentedit.insert(this.getUrl(), form)
    : this.paymentedit.update(this.getUrl(),this.getSpecificForm(PaymentFormConst.ID).value,form)

  }

  public convertFormToSend(formGroup: any): any {
    delete formGroup[PaymentFormConst.ID];
    formGroup[PaymentFormConst.USERNAME] = this.getSpecificForm(
      PaymentFormConst.USERNAME
    )?.value;
    formGroup[PaymentFormConst.DATE] = this.setDateBrazilianFormat(
      this.getSpecificForm(PaymentFormConst.DATE)?.value
    );
    return formGroup;
  }

  public getDateBrazilianFormat(date: string): any {
    let currentDate = new Date(date);
    currentDate.setDate(currentDate.getDate());
    return this.datePipe.transform(currentDate, 'yyyy-MM-dd');

  }

  public setDateBrazilianFormat(date: string): any {
    const items: string[] = date.split('-');
    let newDate: Date = new Date();
    newDate.setFullYear(
      Number(items[0]),
      Number(items[1]) - 1,
      Number(items[2])
    );
    return newDate.toISOString();
  }
}
