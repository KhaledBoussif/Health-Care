import { Component, OnInit } from '@angular/core';
import { CovidService } from '../../covid.service';
import * as datac from '../../../assets/data/datacovid19.json';


@Component({
  selector: 'app-Statistical',
  templateUrl: 'Statistical.page.html',
  styleUrls: ['Statistical.page.scss']
})
export class StatisticalPage implements OnInit {

  products: any = (datac as any).default;
  countries: any = null;
  searchCountry: any;
  Datalist: Array<any>;

  constructor(private covidService: CovidService) { 
    this.countries=[];
    this.covidService.getCountries().subscribe((data)=>{
      this.countries.push(data[108]) ;
      console.log(this.countries);
    });
    
    
  
  }
  filterItemsOfType(type){
    return this.countries.filter(x => x.countries.country == type);
}

  ngOnInit(){
    this.Datalist=[]
    //console.log(data.features[0]);
    
    for(var i=0 ; i<= datac.features.length ;i++ ){
      if(datac.features[i] != undefined){
        this.Datalist.push(datac.features[i].properties)
      }
      
    }
    
    //console.log(this.Datalist);
    
    
  }

  

}
