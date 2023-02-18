import { Component } from '@angular/core';
import arrayWords from "../utils/words"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'random-country-generator-app';

  limit =10;
  
  
  handleSlideChange(newLimit: Event){
    let htmlElement = newLimit.target as HTMLInputElement
    this.limit =parseInt(htmlElement.value)
    /* Now limit value updated in prev snippet */

    /* now we want to pull the value from the array and display based on limit */

  }
  country='';
  countries='';
  
  minCountry=1;
  maxCountries=20;
  randomNumber=0;
  generateRandomCountry(){
    this.minCountry=Math.ceil(this.minCountry);
    this.maxCountries=Math.floor(this.maxCountries);
    
    for(let i=0;i < this.limit; i++){
      this.randomNumber=Math.round(Math.random()*(arrayWords.length));
      this.country = arrayWords[this.randomNumber];
      
        this.countries= this.country + '-'+ this.countries;
        this.countries=this.countries.substring(0,this.countries.length-1)
      
    }

    
   
    /* this.countries= arrayWords.slice(this.randomNumber, this.randomNumber+this.limit).join('-') */
  }


}
