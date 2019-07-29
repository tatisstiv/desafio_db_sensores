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
  signupString: string;
  signups: signup[]
  signup: signup = {username: "Miau", password: "ATATIEHUMAFOFURA"} ;
  cadastro = new FormGroup({
    username: new FormControl(this.signup.username),
    password: new FormControl(this.signup.password)
  });

  constructor(
    private signupServ: registroService,
    private route: ActivatedRoute
  ){ }
  ngOnInit(){

  }

  onSubmit(){
    this.signupServ.addsignup({username: this.signup.username, password: this.signup.password}).subscribe(
      signup => this.signupString = JSON.stringify(signup),
      erro => console.log(erro));
  }


  }
