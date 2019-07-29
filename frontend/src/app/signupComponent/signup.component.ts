import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { registroService } from '../registro.service';
import { ActivatedRoute, Router } from '@angular/router';
import {signup} from '../signup';


@Component({
  selector: 'app-signupComponent',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class signupComponent implements OnInit {
  //displayedColumns: string[] = ['valorLeitura', 'created_at'];
  dataSource: signup[] = [];

  constructor(
    private signupServ: registroService,
    private route: Router
  ){ }

  ngOnInit(){
    console.log('entrou no signup');

      }

  }
