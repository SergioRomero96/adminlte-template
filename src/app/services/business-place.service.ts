import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BusinessPlace } from '../models/business-place';

@Injectable({
  providedIn: 'root'
})
export class BusinessPlaceService {

  constructor(private _http:HttpClient) { }

  getBusinessPlacesById(businessId:string): Observable<any> {
    return this._http.get("http://localhost:8080/abinar/api/business-place?id="+businessId);
  }

  addBusinessPlace(businessPlace: BusinessPlace): Observable<any> {
    let body = JSON.stringify(businessPlace);
    return this._http.post("http://localhost:8080/abinar/api/business-place", body);
  }
}
