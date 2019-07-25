import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { registroService } from '../registro.service';
import { ActivatedRoute, Router } from '@angular/router';
import {inicio} from '../inicio';


@Component({
  selector: 'app-inicioComponent',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class inicioComponent implements OnInit {
  //displayedColumns: string[] = ['valorLeitura', 'created_at'];
  dataSource: inicio[] = [];

  constructor(
    private inicioServ: registroService,
    private route: Router
  ){ }

  ngOnInit(){
    console.log('entrou no inicio');

      }

  }
