import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
 
  
form;

  constructor(
       formBuilder: FormBuilder
  ) {
    this.form = formBuilder.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      edad: ['', [Validators.required]],
      genero: ['', [Validators.required]],
      pais: ['', [Validators.required]],
      provincia: ['', [Validators.required]]
    });
  }
  selectedCountry: String = "--Pais--";
  
	Countries: Array<any> = [
		{ name: 'Mexico', states: [ {name: 'A', cities: ['CDMX', 'Culiacan', 'Veracruz']} ] },
		{ name: 'España', states: [ {name: 'B', cities: ['Barcelona','Madrid','Cordoba']} ] },
		{ name: 'Argentina', states: [ {name: 'C', cities: ['Buenos aires','Mar delplata','Santa fe']} ] },
	];

   //states: Array<any>; //Angular 8
	states: Array<any> = []; //Angular 11

	//cities: Array<any>; //Angular 8
	cities: Array<any> = []; //Angular 11
	
	//changeCountry(country) { //Angular 8
	changeCountry(country: any) { //Angular 11
		//this.states = this.Countries.find(cntry => cntry.name == country).states; //Angular 8
		this.states = this.Countries.find((cntry: any) => cntry.name == country.target.value).states; //Angular 11
	}

	//changeState(state) { //Angular 8
	changeState(state: any) { //Angular 11
		//this.cities = this.Countries.find(cntry => cntry.name == this.selectedCountry).states.find(stat => stat.name == state).cities; //Angular 8
		this.cities = this.Countries.find((cntry: any) => cntry.name == this.selectedCountry).states.find((stat: any) => stat.name == state.target.value).cities; //Angular 11
	}


   submit() {
    if (this.form.valid) {
      console.log(this.form.value)
    }
    else{
      alert("Favor de llenar todos los campos")
    }
  }

  ngOnInit(): void {
  }

}
