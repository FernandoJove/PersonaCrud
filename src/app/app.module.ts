import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonaComponent } from './persona/persona.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { AddPersonaComponent } from './components/persona/add-persona/add-persona.component';
import { UpdatePersonaComponent } from './components/persona/update-persona/update-persona.component';
import { MatIconModule } from '@angular/material/icon';
import { ListPersonaComponent } from './components/persona/list-persona/list-persona.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    AddPersonaComponent,
    UpdatePersonaComponent,
    ListPersonaComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    //fdasd
  
    MatBadgeModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule ,
    MatToolbarModule,
    BrowserModule,
    MatFormFieldModule,
    MatInputModule,
    
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
