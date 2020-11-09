import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPersonaComponent } from './components/persona/add-persona/add-persona.component';
import { ListPersonaComponent } from './components/persona/list-persona/list-persona.component';
import { UpdatePersonaComponent } from './components/persona/update-persona/update-persona.component';
import { PersonaComponent } from './persona/persona.component';

const routes: Routes = [
  {
    path:'listar',component:ListPersonaComponent
  },
  {
    path:"persona/add",component:AddPersonaComponent
  },
  {
    path:"persona/:id",component:UpdatePersonaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
