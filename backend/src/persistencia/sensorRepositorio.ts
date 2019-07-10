import {SensorModel} from './sensorModel';
import{Sensor} from '../entidades/sensor';

export class SensorRepositorio{
    static async criar(sensor: Sensor): Promise<Sensor>{
        let novoSensor = await SensorModel.create(sensor);
        return novoSensor.save();
    }
    //buscar por id
    static async buscaPorId(id: string): Promise<Sensor|null>{
        return SensorModel.findById(id).exec();
    }
    //buscar por planta
    static async buscarPorPlanta(planta: string): Promise<Sensor[]>{
        return SensorModel.where('planta').equals(planta).exec();
    }
    //leitura
    static async lerTodos(): Promise<Sensor[]> {
        return SensorModel.find().exec();
    }
}