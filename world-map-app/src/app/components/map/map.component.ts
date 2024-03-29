
import { Component, ElementRef, ViewChild, Output, EventEmitter, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { WorldBankApiService } from '../../world-bank-api.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  @ViewChild('svgMap')
  svgMap!: ElementRef;
  @ViewChildren('countryPath')
  countryPaths!: QueryList<ElementRef<SVGPathElement>>;
  @Output() countryClicked = new EventEmitter<any>();

  constructor(private worldBankApiService: WorldBankApiService) { }

  ngAfterViewInit() {
    this.countryPaths.forEach((countryPath: ElementRef<SVGPathElement>) => {
      countryPath.nativeElement.addEventListener('mouseover', (event: MouseEvent) => this.onCountryMouseOver(event));
      countryPath.nativeElement.addEventListener('mouseout', (event: MouseEvent) => this.onCountryMouseOut(event));
      countryPath.nativeElement.addEventListener('click', (event: MouseEvent) => this.onCountryClicked(event));
    });
  }

  onCountryMouseOver(event: MouseEvent) {
    const countryPath = event.target as SVGPathElement;
    const countryCode = countryPath.getAttribute('id');

    // Check if the path represents a country (has a non-empty id attribute)
    if (countryCode) {
      countryPath.classList.add('country-highlight');
    }
  }

  onCountryMouseOut(event: MouseEvent) {
    const countryPath = event.target as SVGPathElement;
    const countryCode = countryPath.getAttribute('id');

    // Check if the path represents a country (has a non-empty id attribute)
    if (countryCode) {
      countryPath.classList.remove('country-highlight');
    }
  }

  onCountryClicked(event: MouseEvent) {
    const countryPath = event.target as SVGPathElement;
    const countryCode = countryPath.getAttribute('id');

    // Ensure the clicked element represents a country (has a non-empty id attribute)
    if (countryCode) {
      // Retrieve data for clicked country
      this.worldBankApiService.getCountryInfo(countryCode).subscribe((data: any) => {
        this.countryClicked.emit(data);
      });
    } else {
      // Log a message or handle the case where the clicked element is not a country
      console.error('Clicked element does not represent a country.');
    }
  }
}