import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LoginService } from "@app/core/service/login.service";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class BasicService {
  constructor(
    private http: HttpClient,
    private loginService: LoginService
    ) {
    }

  list(url: string, params: any = {}): Observable<any> {
    const headers: HttpHeaders = this.loginService.getHeaders();
    return this.http.get(url, {params, headers});
  }

  findById(url: string, id: any, params: HttpParams | any = null): Observable<any> {
    const headers: HttpHeaders = this.loginService.getHeaders();
    return this.http.get(`${url}/${id}`, {headers, params} );
  }

  insert(url: string, item: any = {}): Observable<any> {
    const headers: HttpHeaders = this.loginService.getHeaders();
    return this.http.post(url, item, {headers});
  }

  update(url: string, id: any, item: any = {}): Observable<any> {
    const headers: HttpHeaders = this.loginService.getHeaders();
    return this.http.put(`${url}/${id}`,item,{headers});
  }

  updatePartial(url: string, id: any, item: any = {}): Observable<any> {
    const headers: HttpHeaders = this.loginService.getHeaders();
    return this.http.put(`${url}/${id}`,item,{headers});
  }

  remove(url: string, id: any, header: any = {}): Observable<any> {
    const headers: HttpHeaders = this.loginService.getHeaders();
    return this.http.delete(`${url}/${id}`, {headers});
  }
}
