import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sensor } from './sensor';
import { Registro } from './registro';
import { signup } from './signup';

@Injectable({
    providedIn: 'root'
})

export class registroService {
    private urlBase = 'http://localhost:3000/sensor';

    constructor(
        private http: HttpClient,
    ) {}

    lerTodos(): Observable<Sensor[]> {
        return this.http.get<Sensor[]>(`${this.urlBase}`);
    }

    addRegistro(registro: Registro): Observable<Registro> {
      return this.http.post<Registro>('http://localhost:3000/registro', registro);
    }

    buscarRegPorSensor(sensor: Sensor) {
      return this.http.get<Registro[]>(`http://localhost:3000/registro/sensor/${sensor._id}`);
    }

    addsignup(signup: signup): Observable<signup> {
      return this.http.post<signup>('http://localhost:3000/auth/signup', signup);
    }
}
