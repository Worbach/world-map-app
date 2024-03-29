import { Component } from '@angular/core';
import { WorldBankApiService } from './world-bank-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedCountry: any;

  constructor(private worldBankApiService: WorldBankApiService) { }

  onCountryClicked(countryName: string): void {
    this.worldBankApiService.getCountryInfo(countryName).subscribe((data: any) => {
      if (data && data.length > 1 && Array.isArray(data[1]) && data[1].length > 0) {
        this.selectedCountry = data[1][0];
      } else {
        console.error('Country data format is not as expected:', data);
      }
    }, error => {
      console.error('Error fetching country information:', error);
    });
  }
}
