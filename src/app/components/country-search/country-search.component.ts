import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SafeUrlPipe } from '../../pipes/safe-url.pipe';
import { CountryService } from '../../services/country.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-country-search',
  standalone: true,
  imports: [FormsModule, SafeUrlPipe, NgIf],
  templateUrl: './country-search.component.html',
  styleUrls: ['./country-search.component.scss'],
})
export class CountrySearchComponent implements OnInit {
  countryName: string = 'Colombia';
  countryData: any;
  error: string = '';

  constructor(private countryService: CountryService) {}
  ngOnInit(): void {
    this.searchCountry();
  }

  searchCountry() {
    this.countryService.getCountryInfo(this.countryName).subscribe(
      (data) => {
        this.countryData = data[0];
        this.error = '';
      },
      (error) => {
        this.error = 'Country not found!';
        this.countryData = null;
      }
    );
  }

  getCurrencies(): string {
    if (this.countryData && this.countryData.currencies) {
      return Object.values(this.countryData.currencies)
        .map((currency: any) => currency.name)
        .join(', ');
    }
    return '';
  }
}
