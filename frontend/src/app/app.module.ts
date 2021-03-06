import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { MatTableModule } from '@angular/material/table';

import { AppComponent } from './app.component';
import { RotasModule } from './rotas.module';
import {PlantaComponentComponent} from './plantaComponent/plantaComponent.component';
import { getRegistroComponent } from './getRegistroComponent/getRegistroComponent.component';
import {loginComponent} from './loginComponent/login.component';
import {signupComponent} from './signupComponent/signup.component'
import { TokenInterceptor } from './token.interceptor';



@NgModule({
  declarations: [
    AppComponent,
    PlantaComponentComponent,
    getRegistroComponent,
    loginComponent,
    signupComponent
  ],
  imports: [
    BrowserModule,
    RotasModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
