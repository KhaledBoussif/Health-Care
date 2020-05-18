import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  apiUrl = 'https://services6.arcgis.com/BiTAc9ApDDtL9okN/ArcGIS/rest/services/COVID19_Table_DATESetTOTAL/FeatureServer/info/itemInfo?f=pjson';

  constructor(private http: HttpClient) {
    
    
   }

  getAll() {
    return this.http.get(`${this.apiUrl}all`, );
  }

  getCountries() {
    return this.http.get(`${this.apiUrl}countries`);
  }
}
