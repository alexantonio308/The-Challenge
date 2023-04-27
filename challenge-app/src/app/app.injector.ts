import {Injector} from '@angular/core';

export let AppInjector: Injector;

export function setAppInjector(injector: Injector): void {
  if (AppInjector) {
    console.error('Error: AppInjector was already set');
  } else {
    AppInjector = injector;
  }
}
