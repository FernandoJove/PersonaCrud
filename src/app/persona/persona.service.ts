import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Persona } from './persona';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PersonaService {
  htpHeaders = new HttpHeaders({'Content-Type':'application/json'});

  public url:string ='http://localhost:2020/';
  private urlPersona= this.url+'persona/';

  constructor(private http:HttpClient){

  }
  getPersonas():Observable<Persona[]>{
    
    return this.http.get<Persona[]>(this.urlPersona);
    
  }


  
}
