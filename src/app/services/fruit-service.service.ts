import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
const axios = require('axios')
const apiUrl = environment.fruitApiUrl;

@Injectable({
  providedIn: 'root'
})
export class FruitServiceService {

  async getFruits() {
    return await axios.get(`${apiUrl}/fruit/all`)
    .then((response: { data: any}) => response.data)
    .catch((error: any) => {
      console.log(error);
      return error;
    });
  }

  async getFruitByFilter(filter: number , value: string) {
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
    return await axios.get(`${apiUrl}/fruit/${filtered}/${value}`)
    .then((response: { data: any}) => response.data)
    .catch((error: any) => error);
  }
}
