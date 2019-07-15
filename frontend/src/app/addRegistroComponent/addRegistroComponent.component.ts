import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { registroService } from '../registro.service';
import { Registro } from '../registro';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-addRegistroComponent',
  templateUrl: './addRegistroComponent.component.html',
  styleUrls: ['./addRegistroComponent.component.css']
})
export class addRegistroComponent implements OnInit {
  registro: Registro;
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
    this.registro.sensor = this.route.snapshot.data.sensor;
    this.registroServ.addRegistro({valorLeitura: this.registro.valorLeitura, sensor: this.registro.sensor});
  }


}
