import {BaseComponent} from "./base.component";
import {Component, OnInit} from "@angular/core";
import {CrudService} from "../service/crud.service";
import {AppInjector} from "../../app.injector";
import {debounceTime, distinctUntilChanged, map, Observable, OperatorFunction, switchMap, takeUntil} from "rxjs";

@Component({
  template: '',
})
export abstract class BaseListComponent extends BaseComponent implements OnInit {

  protected crudService: CrudService = AppInjector.get(CrudService);

  items: any[] = [];
  allPages: number = 0;
  params: any = this.getDefoultParam();

  search: OperatorFunction<string, readonly string[]> = this.whenSearch();

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.loadAll();
  }

  protected loadAll(): void {
    this.crudService.list(this.getUrl(), this.getParams()).subscribe({
      next: (result: any) => this.onLoadSuccess(result),
      error: (error: any) => this.onLoadError(error),
    });
  }

  abstract getUrl(): string;

  private onLoadSuccess(success: any): void {
    this.items = success?.items || [];
    this.allPages = success?.totalPage || [];
  }

  private onLoadError(error: any): void {
    console.error(error.message);
  }

  getDefoultParam(): any {
    this.allPages = 0;
    return {
      filter: null,
      limit: 10,
      page: 1
    };
  }

  removeItem(id: any): void {
    this.crudService.remove(this.getUrl(), id).subscribe(() => {
      this.loadAll();
    });
  }

  pageChange(page: number): void {
    this.params.page = page;
    this.loadAll();
  }

  private getParams(): any {
    const params: any = this.removeEmpty(this.params);
    return params;
  }

  private removeEmpty = (value: any) => {
    Object.keys(value).forEach((item: string) =>
      (value[item] && typeof value[item] === 'object') && this.removeEmpty(value[item]) ||
      (!value[item] && value[item] !== undefined) && delete value[item]
    );
    return value;
  };

  whenSearch(): any {
    return (text$: Observable<string>) =>
      text$.pipe(
        takeUntil(this.componentDestroyed$), debounceTime(300), distinctUntilChanged(),
        switchMap((value: any) => {
          if (value as String) {
            this.params = this.getDefoultParam();
            this.params.filter = value;
            this.loadAll();
          }
          return value;
        }),
        map((result: any) => result?.body)
      );
  }
}
