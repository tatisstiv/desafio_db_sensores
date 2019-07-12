import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { RotasModule } from './rotas.module';
import {PlantaComponentComponent} from './plantaComponent/plantaComponent.component';

@NgModule({
  declarations: [
    AppComponent,
    PlantaComponentComponent
  ],
  imports: [
    BrowserModule,
    RotasModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
