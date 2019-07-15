import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sensor } from './sensor';
import { Registro } from './registro';

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

    addRegistro(registro: Registro) {
      return this.http.post('http://localhost:3000/registro', registro);
    }
}
