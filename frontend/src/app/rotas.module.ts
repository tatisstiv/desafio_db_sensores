import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PlantaComponentComponent } from './plantaComponent/plantaComponent.component';
import { getRegistroComponent} from './getRegistroComponent/getRegistroComponent.component';
import {loginComponent} from './loginComponent/login.component';
import { signupComponent } from './signupComponent/signup.component';

const routes: Routes = [
  {path: 'signup', component: signupComponent},
  { path:'login', component: loginComponent},
  { path: 'listar', component: PlantaComponentComponent},
  {path: 'registros/get', component: getRegistroComponent},
  {path: '', redirectTo: '/listar', pathMatch: 'full'}
]

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class RotasModule { }
