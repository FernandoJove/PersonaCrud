import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-update-persona',
  templateUrl: './update-persona.component.html',
  styleUrls: ['./update-persona.component.css']
})
export class UpdatePersonaComponent implements OnInit {

  _persona:any;
  persona:Persona =new Persona();

  constructor(private _personaService:PersonaService,private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarPersona();
  }
  id:number;
  cargarPersona():void{
    this.activatedRoute.params.subscribe(params=>{
      let id = params['id']
      if(id){
        this._personaService.getPersonaById(id).subscribe(
          (data)=>{
            console.log(data);
            this._persona=data; 
          this.persona.idPersona=this._persona.idPersona;
          this.persona.Nombre=this._persona.Nombre;
          this.persona.Apellidos=this._persona.Apellidos;
          this.persona.Edad=this._persona.Edad;
          this.persona.Telefono=this._persona.Telefono;
          this.persona.Correo=this._persona.Correo;
          this.persona.DNI=this._persona.DNI;
        })
      }
    })
    //this._personaService.getPersonaById(this.id).subscribe();
  }

  updatePersona():void{
    this._personaService.updatePersona(this.persona);
    console.log("llegue al updatepersona"+this.persona.Nombre.toString())
    
  }
}
