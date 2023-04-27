import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {BaseService} from "../interface/base.service";


@Injectable({
  providedIn: 'root',
})
export class CrudService extends BaseService {
  constructor() {
    super();
  }

  list(url: string, params: any = {}): Observable<any> {
    return this.get(url, params);
  }

  findById(url: string, id: any, params: any = {}): Observable<any> {
    return this.get(`${url}/${id}`, params);
  }

  insert(url: string, item: any = {}): Observable<any> {
    return this.post(url, item);
  }

  update(url: string, id: any, item: any = {}): Observable<any> {
    return this.put(`${url}/${id}`, item);
  }

  updatePartial(url: string, id: any, item: any = {}): Observable<any> {
    return this.put(`${url}/${id}`, item);
  }

  remove(url: string, id: any): Observable<any> {
    return this.delete(`${url}/${id}`);
  }
}
