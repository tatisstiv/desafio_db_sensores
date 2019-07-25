import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PlantaComponentComponent } from './plantaComponent/plantaComponent.component';
import { getRegistroComponent} from './getRegistroComponent/getRegistroComponent.component';
import {inicioComponent} from './inicioComponent/inicio.component';

const routes: Routes = [
  { path:'inicio', component: inicioComponent},
  { path: 'listar', component: PlantaComponentComponent},
  {path: 'registros/get', component: getRegistroComponent}
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
