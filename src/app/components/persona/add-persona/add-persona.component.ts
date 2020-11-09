import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-add-persona',
  templateUrl: './add-persona.component.html',
  styleUrls: ['./add-persona.component.css']
})
export class AddPersonaComponent implements OnInit {

  constructor(private _personaService:PersonaService,private router: Router,) { }

  ngOnInit(): void {
  }
  personaModel:Persona = new Persona();
  onSubmit(){

  }
  public create(){
      this._personaService.addPersona(this.personaModel).subscribe()
      console.log(this.personaModel)
  }

}
