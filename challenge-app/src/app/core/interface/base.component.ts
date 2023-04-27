import {Component, OnDestroy} from "@angular/core";
import {Subject} from "rxjs";
import {Router} from "@angular/router";
import {AppInjector} from "../../app.injector";
import {FormBuilder} from "@angular/forms";

@Component({
  template: '',
})
export abstract class BaseComponent implements OnDestroy {

  protected router: Router = AppInjector.get(Router);

  protected formBuilder: FormBuilder = AppInjector.get(FormBuilder);

  protected componentDestroyed$: Subject<null> = new Subject();

  ngOnDestroy(): void {
    this.componentDestroyed$.next(null);
    this.componentDestroyed$.complete();
  }

  protected navigate(urls: any[]): Promise<any> {
    return this.router.navigate(urls);
  }
}
