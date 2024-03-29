
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorldBankApiService {
  private baseUrl = 'https://api.worldbank.org/v2/country';

  constructor(private http: HttpClient) { }

  // Method to retrieve additional information for a selected country

  getCountryInfo(countryName: string): Observable<any> {

    // Construct the API URL with the country name
    const apiUrl = `${this.baseUrl}/${countryName}?format=json`;

    // Make the HTTP GET request to the API
    return this.http.get(apiUrl);
  }

  // Method to trigger API call and set local variable for country information

  triggerApiCall(countryName: string): Observable<any> {
    
    // Call the getCountryInfo method to fetch country information
    return this.getCountryInfo(countryName);
  }
}
