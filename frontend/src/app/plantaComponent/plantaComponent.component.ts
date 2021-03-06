import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { registroService} from '../registro.service';
import {Sensor } from '../sensor';


@Component({
  selector: 'app-plantaComponent',
  templateUrl: './plantaComponent.component.html',
  styleUrls: ['./plantaComponent.component.css']
})
export class PlantaComponentComponent implements OnInit {
  displayedColumns: string[] = ['id', 'planta','status' , 'actions'];
  dataSource: Sensor[] = [];

  constructor(
    private plantaServ: registroService,
    private router: Router
  ) { }

  ngOnInit() {
    this.plantaServ.lerTodos().subscribe(
      dados => this.dataSource = dados,
      erro => {
        console.log(erro);
      }
    );
  }

  verHistorico(sensor: Sensor){
    this.router.navigate(['registros/get', sensor]);
  }

}
