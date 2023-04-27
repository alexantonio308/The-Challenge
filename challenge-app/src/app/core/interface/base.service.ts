import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {AppInjector} from "../../app.injector";
import {LocalStorageConst} from "../utils/local-storage.const";
import {Observable} from "rxjs";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root',
})
export abstract class BaseService {

  protected http: HttpClient = AppInjector.get(HttpClient);

  router: Router = AppInjector.get(Router);

  get(url: string, params: HttpParams | any = null): Observable<any> {
    const headers: HttpHeaders = this.getHeaders();
    console.log(headers)
    return this.http.get(url, {
      headers: headers,
      params: params,
    });
  }

  post(url: string, body: any = {}): Observable<any> {
    return this.http.post(url, body, {
      headers: this.getHeaders(),
    });
  }

  put(url: string, body: any = {}): Observable<any> {
    return this.http.put(url, body, {
      headers: this.getHeaders(),
    });
  }

  patch(url: string, body: any = {}): Observable<any> {
    return this.http.patch(url, body, {
      headers: this.getHeaders(),
    });
  }

  delete(url: string): Observable<any> {
    return this.http.delete(url, {headers: this.getHeaders()});
  }

  protected getHeaders(): HttpHeaders {
    let httpHeaders: HttpHeaders = new HttpHeaders();
    const authorization: any = localStorage?.getItem(LocalStorageConst.AUTHORIZATION);
    if (authorization) {
      httpHeaders = new HttpHeaders().set(LocalStorageConst.AUTHORIZATION, `Bearer ${authorization}`);
    }
    return httpHeaders;
  }

}
