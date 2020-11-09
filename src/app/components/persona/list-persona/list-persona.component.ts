import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-list-persona',
  templateUrl: './list-persona.component.html',
  styleUrls: ['./list-persona.component.css']
})
export class ListPersonaComponent implements OnInit {

  displayedColumns: string[] = ['idPersona', 'Nombre', 'Apellidos', 'Edad','Telefono','Correo','DNI','Editar','Eliminar'];
  personaLista:Persona[];  

  constructor(private _personaService:PersonaService) {}
   
  id:number;
  ngOnInit(){
    this.getPersonas();
   }

  getPersonas(){  
    this._personaService.getPersonas().subscribe(data=> {this.personaLista = data}); 
   }  

  deletePersona(idPersona:number){
   
    this._personaService.deletePersona(idPersona).subscribe(response=>{});

    console.log(idPersona)
  }
}
  