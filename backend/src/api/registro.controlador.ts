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
           
            if(sensor.planta === 'Morango'){
                if(registro.valorLeitura < 60){
                    res.send({"message": `Pouca umidade no sensor ${sensor}`});
                } else if(registro.valorLeitura > 80){
                    res.send({"message": `Muita umidade no sensor ${sensor}`});
                }
            } else if(sensor.planta === 'Cacto'){
                if(registro.valorLeitura < 20){
                    res.send({"message":`Pouca umidade no sensor ${sensor}`});
                } else if(registro.valorLeitura > 50){
                    res.send({"message": `Muita umidade no sensor ${sensor}`});
                }
            } else if(sensor.planta === 'Cogumelo'){
                if(registro.valorLeitura < 80){
                    res.send({"message": `Pouca umidade no sensor ${sensor}`});
                } else if(registro.valorLeitura > 90){
                    res.send({"message": `Muita umidade no sensor ${sensor}`});
                }
            } else if(sensor.planta === 'Violeta'){
                if(registro.valorLeitura < 40){
                    res.send({"message": `Pouca umidade no sensor ${sensor}`});
                } else if(registro.valorLeitura > 80){
                    res.send({"message": `Muita umidade no sensor ${sensor}`});
                }
            } else if(sensor.planta === 'Lavanda'){
                if(registro.valorLeitura < 20){
                    res.send({"messsage": `Pouca umidade no sensor ${sensor}`});
                } else if(registro.valorLeitura > 30){
                    res.send({"message": `Muita umidade no sensor ${sensor}`});
                }
            }

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