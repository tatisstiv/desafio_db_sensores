import {Request, Response, NextFunction} from 'express';
import {RegistroRepositorio} from '../persistencia/registroRepositorio';
import { SensorRepositorio } from '../persistencia/sensorRepositorio';

export async function postRegistro(req: Request, res: Response, next: NextFunction){
    try {
        const sensor = await SensorRepositorio.buscaPorId(req.body.sensor);
        if(sensor === null){
            res.status(404).end();
        } else {
            const registro = await RegistroRepositorio.criar({valorLeitura: req.body.valorLeitura, sensor: sensor});
            res.json(registro);
        }
    }
    catch (error) {
        next(error);
    }
}

export async function getRegistrosSensor(req: Request, res: Response, next: NextFunction) {
    try {
        const id_sensor = req.params.id_sensor;
        const registros = await RegistroRepositorio.buscaPorSensor(id_sensor);
        res.json(registros);
    } catch (error) {
        next(error);
    }
}