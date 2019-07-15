import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { registroService } from '../registro.service';
import { Registro } from '../registro';
import { ActivatedRoute } from '@angular/router';
import { Sensor } from '../sensor';

@Component({
  selector: 'app-addRegistroComponent',
  templateUrl: './addRegistroComponent.component.html',
  styleUrls: ['./addRegistroComponent.component.css']
})
export class addRegistroComponent implements OnInit {
  registroString: string;
  registros: Registro[]
  registro: Registro = {sensor:this.route.snapshot.data.sensor, valorLeitura: 70} ;
  cadastro = new FormGroup({
    sensor: new FormControl(this.registro.sensor),
    valorLeitura: new FormControl(this.registro.valorLeitura)
  });

  constructor(
    private registroServ: registroService,
    private route: ActivatedRoute
  ){ }
  ngOnInit(){

  }

  onSubmit(){
    this.registro.sensor ={_id: this.route.snapshot.params._id, planta: this.route.snapshot.params.planta }
    this.registroServ.addRegistro({valorLeitura: this.registro.valorLeitura, sensor: this.registro.sensor}).subscribe(
      registro => this.registroString = JSON.stringify(registro),
      erro => console.log(erro));
  }


}
