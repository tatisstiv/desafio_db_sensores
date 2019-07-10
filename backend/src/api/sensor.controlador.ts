import {Request, Response, NextFunction} from 'express';
import {SensorRepositorio} from '../persistencia/sensorRepositorio';

export async function postSensor(req: Request, res: Response, next: NextFunction){
    try {
        const sensor = await SensorRepositorio.criar(req.body);
        res.json(sensor);
    }
    catch (error) {
        next(error);
    }
}

export async function getSensores(req: Request, res: Response, next: NextFunction) {
    try{
        const sensores = await SensorRepositorio.lerTodos();
        res.json(sensores);
    } catch (error) {
        next(error);
    }
}

export async function getSensorId(req: Request, res: Response, next: NextFunction) {
    try {
        const id = req.params.id;
        const sensor = await SensorRepositorio.buscaPorId(id);
        if(sensor === null){
            res.status(404).end();
        } else {
            const {valorLeitura, planta} = sensor;
            res.json({valorLeitura, planta});
        }
    } catch (error) {
        next(error);
    }
}

export async function getSensorPlanta(req: Request, res: Response, next: NextFunction) {
    try {
        const planta = req.params.planta;
        const sensores = await SensorRepositorio.buscarPorPlanta(planta);
        res.json(sensores);
    } catch (error) {
        next(error);
    }
}