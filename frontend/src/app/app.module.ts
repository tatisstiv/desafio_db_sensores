import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { MatTableModule } from '@angular/material/table';

import { AppComponent } from './app.component';
import { RotasModule } from './rotas.module';
import {PlantaComponentComponent} from './plantaComponent/plantaComponent.component';
import { getRegistroComponent } from './getRegistroComponent/getRegistroComponent.component';
import {inicioComponent} from './inicioComponent/inicio.component';
import {signupComponent} from './signupComponent/signup.component'
import { from } from 'rxjs';



@NgModule({
  declarations: [
    AppComponent,
    PlantaComponentComponent,
    getRegistroComponent,
    inicioComponent,
    signupComponent
  ],
  imports: [
    BrowserModule,
    RotasModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
