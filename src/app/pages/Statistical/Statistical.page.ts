import { Component } from '@angular/core';
import { CovidService } from '../../covid.service';

@Component({
  selector: 'app-Statistical',
  templateUrl: 'Statistical.page.html',
  styleUrls: ['Statistical.page.scss']
})
export class StatisticalPage {


  countries: any = null;
  searchCountry: any;

  constructor(private covidService: CovidService) { 

    this.covidService.getAll().subscribe((Data)=>{
      this.countries = Data;
      console.log(Data)
    });

  }

}
