import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { registroService } from '../registro.service';
import { ActivatedRoute, Router } from '@angular/router';
import {login} from '../login';


@Component({
  selector: 'app-loginComponent',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class loginComponent implements OnInit {
  //displayedColumns: string[] = ['valorLeitura', 'created_at'];
  dataSource: login[] = [];

  constructor(
    private loginServ: registroService,
    private route: Router
  ){ }

  ngOnInit(){
    console.log('entrou no login');

      }

  }
