import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { registroService } from '../registro.service';
import { ActivatedRoute, Router } from '@angular/router';
import {login} from '../login';
import { signup } from '../signup';


@Component({
  selector: 'app-loginComponent',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class loginComponent implements OnInit {
  signup: signup = {username: "username", password: "1234"} ;
  login = new FormGroup({
    username: new FormControl(this.signup.username, [Validators.required, Validators.minLength(1)]),
    password: new FormControl(this.signup.password, [Validators.required, Validators.minLength(1)])
  })

  constructor(
    private loginServ: registroService,
    private router: Router
  ){ }

  ngOnInit(){

  }

  onSubmit(){
    this.loginServ.fazerLogin({username: this.signup.username, password: this.signup.password}).subscribe(
      token => {localStorage.setItem('token', token.token);
      this.router.navigate(['/listar'])},
      erro => console.log(erro));
  }

}
