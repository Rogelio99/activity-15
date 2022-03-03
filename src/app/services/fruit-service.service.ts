import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import { HttpClient } from '@angular/common/http';
const apiUrl = environment.fruitApiUrl;

@Injectable({
  providedIn: 'root'
})
export class FruitServiceService {

  constructor(private http: HttpClient) { }

  getFruits() {
    return this.http.get(`${apiUrl}/fruit/all`);
  }

  getFruitByFilter(filter: number , value: string) {
    let filtered = '';
    switch (filter) {
      case 1:
        filtered = 'family';
        break;
      case 2:
        filtered = 'genus';
        break;
      case 3:
        filtered = 'order';
        break;
      default:
        filtered = '';
        break;
    }
    return this.http.get(`${apiUrl}/fruit/${filtered}/${value}`);
  }
}
