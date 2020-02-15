import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Business } from '../models/business';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  constructor(private _http: HttpClient) { }

  getBusinessAll(): Observable<any> {
    return this._http.get("http://localhost:8080/abinar/api/business");
  }

  addBusiness(business: Business): Observable<any> {
    let body = JSON.stringify(business);
    return this._http.post("http://localhost:8080/abinar/api/business", body);
  }
}
