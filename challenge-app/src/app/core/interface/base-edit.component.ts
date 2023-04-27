import {Component, OnInit} from "@angular/core";
import {FormGroup} from "@angular/forms";
import {BaseComponent} from "./base.component";

@Component({
  template: '',
})
export abstract class BaseEditComponent extends BaseComponent implements OnInit {

  public formGroup: FormGroup | any = this.getForm();

  public domain: any = null;

  protected constructor() {
    super();
  }

  ngOnInit(): void {
    this.formGroup = this.getForm();
    this.updateForm();
  }

  abstract getForm(): any;

  abstract updateForm(): void;

  getSpecificForm(name: string): any {
    return this.formGroup.get(name);
  }

  onTouchedInputForm(name: string, formGroup: any = null): boolean {
    return formGroup
      ? formGroup.get(name).invalid && (formGroup.get(name).dirty || formGroup.get(name).touched)
      : this.formGroup.get(name).invalid && (this.formGroup.get(name).dirty || this.formGroup.get(name).touched);
  }

}
