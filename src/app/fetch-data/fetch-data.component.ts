import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {
  public exchangers: Exchanger[];
//http://localhost:49385/rates
//http://mon-api.azurewebsites.net
  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Exchanger[]>('http://mon-api.azurewebsites.net/mocks').subscribe(result => {
      this.exchangers = result;
    }, error => console.error(error));
  }
}

interface Exchanger {
  usd: Rate;
  eur: Rate;
  rub: Rate;
  name: string;
  url: string;
  address: string;
}

interface Rate {
  buyRate: string;
  sellRate: string;
}
