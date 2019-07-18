import {Sensor} from './sensor'

export interface Registro {
    valorLeitura: number,
    sensor: Sensor,
    created_at: Date
}
