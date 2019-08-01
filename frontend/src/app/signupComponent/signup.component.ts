import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { registroService } from '../registro.service';
import { ActivatedRoute, Router } from '@angular/router';
import {signup} from '../signup';


@Component({
  selector: 'app-signupComponent',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class signupComponent implements OnInit {
  signup: signup = {username: "username", password: "1234"} ;
  cadastro = new FormGroup({
    username: new FormControl(this.signup.username, [Validators.required, Validators.minLength(1)]),
    password: new FormControl(this.signup.password, [Validators.required, Validators.minLength(1)])
  });

  constructor(
    private signupServ: registroService,
    private router: Router
  ){ }
  ngOnInit(){

  }

  onSubmit(){
    this.signupServ.addsignup({username: this.signup.username, password: this.signup.password}).subscribe(
      signup => this.router.navigate(['/listar']),
      erro => console.log(erro));
  }


  }
