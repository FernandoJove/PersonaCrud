import { Component, OnInit } from '@angular/core';
import { Persona } from './persona';
import { PersonaService } from './persona.service';


@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  displayedColumns: string[] = ['idPersona', 'Nombre', 'Apellidos', 'Edad','Telefono','Correo','DNI'];
  personaLista:Persona[];  

  constructor(private _personaService:PersonaService) {}
   
  ngOnInit(){
    this.getPersonas();
   }

  getPersonas(){  
    this._personaService.getPersonas().subscribe(data=> {console.log(data);this.personaLista = data}); 
  }
  
  
  
}
