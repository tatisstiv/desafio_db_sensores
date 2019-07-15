import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PlantaComponentComponent } from './plantaComponent/plantaComponent.component';
import { addRegistroComponent} from './addRegistroComponent/addRegistroComponent.component';

const routes: Routes = [
  { path: 'listar', component: PlantaComponentComponent},
    {path: '**', redirectTo: 'listar'},
  {path: 'registros/add', component: addRegistroComponent}
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
