import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { RotasModule } from './rotas.module';
import {PlantaComponentComponent} from './plantaComponent/plantaComponent.component';
import { getRegistroComponent } from './getRegistroComponent/getRegistroComponent.component';

@NgModule({
  declarations: [
    AppComponent,
    PlantaComponentComponent,
    getRegistroComponent
  ],
  imports: [
    BrowserModule,
    RotasModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
