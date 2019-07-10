import {RegistroModel} from './registroModel';
import {Registro} from '../entidades/registro';
import { SensorModel } from './sensorModel';

export class RegistroRepositorio{
    static async criar(registro: Registro): Promise<Registro>{
        let novoRegistro = await RegistroModel.create(registro);
        return novoRegistro.save();
    }

    static async buscaPorId(id: string): Promise<Registro|null>{
        return RegistroModel.findById(id).exec();
    }

    static async buscaPorSensor(id: string): Promise<Registro[]>{
        return RegistroModel.where('sensor').equals(id).populate('sensor', SensorModel).exec();
    }
}