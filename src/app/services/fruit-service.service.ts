import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FruitServiceService {
  constructor(private http: HttpClient) { }

  getFruits(): Observable<any> {
    return this.http.get<any>('/api/fruit/all')
  }

  getFruitByFilter(filter: string , value: string): Observable<any>{
    return this.http.get<any>('/api/fruit/' + filter + '/' + value);
  }
}
