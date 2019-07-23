import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { registroService } from '../registro.service';
import { Registro } from '../registro';
import { ActivatedRoute } from '@angular/router';
import { Sensor } from '../sensor';

@Component({
  selector: 'app-getRegistroComponent',
  templateUrl: './getRegistroComponent.component.html',
  styleUrls: ['./getRegistroComponent.component.css']
})
export class getRegistroComponent implements OnInit {
  displayedColumns: string[] = ['valorLeitura', 'created_at'];
  dataSource: Registro[] = [];
  registro: Registro = {sensor:this.route.snapshot.data.sensor, valorLeitura: 70, created_at: new Date('2019-07-18T03:24:00')} ;

  constructor(
    private registroServ: registroService,
    private route: ActivatedRoute
  ){ }
  ngOnInit(){
    this.registro.sensor ={_id: this.route.snapshot.params._id, planta: this.route.snapshot.params.planta, status: this.route.snapshot.params.status }
    this.registroServ.buscarRegPorSensor(this.registro.sensor).subscribe(
      dados => this.dataSource = dados,
      erro => {
        console.log(erro);
      }
    );
  }

  /*onSubmit(){
    this.registro.sensor ={_id: this.route.snapshot.params._id, planta: this.route.snapshot.params.planta, status: this.route.snapshot.params.status }
    this.registroServ.addRegistro({valorLeitura: this.registro.valorLeitura, sensor: this.registro.sensor}).subscribe(
      registro => this.registroString = JSON.stringify(registro),
      erro => console.log(erro));
  }*/


}
