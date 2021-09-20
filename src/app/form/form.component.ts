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

	states: Array<any> = []; 

	cities: Array<any> = []; 
	
	changeCountry(country: any) { 
		this.states = this.Countries.find((cntry: any) => cntry.name == country.target.value).states; 
	}

	
	changeState(state: any) { 
	
		this.cities = this.Countries.find((cntry: any) => cntry.name == this.selectedCountry).states.find((stat: any) => stat.name == state.target.value).cities; 
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
