import app from './app';
import {connect} from 'mongoose';
import {SensorRepositorio} from './persistencia/sensorRepositorio';
import { ObjectId } from 'bson';

(async() => {
    try{
        //Conectar ao MongoDB
        const servidorMongoDB = `mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/estufa`;
 
        await connect(servidorMongoDB, {useNewUrlParser:true});

        await SensorRepositorio.criar({
            planta: 'Morango'
        });
        await SensorRepositorio.criar({
            planta: 'Morango'
        });
        await SensorRepositorio.criar({
            planta: 'Cacto'
        });
        await SensorRepositorio.criar({
            planta: 'Cacto'
        });
        await SensorRepositorio.criar({
            planta: 'Cogumelo'
        });
        await SensorRepositorio.criar({
            planta: 'Cogumelo'
        });
        await SensorRepositorio.criar({
            planta: 'Violeta'
        });
        await SensorRepositorio.criar({
            planta: 'Violeta'
        });
        await SensorRepositorio.criar({
            planta: 'Lavanda'
        });
        await SensorRepositorio.criar({
            planta: 'Lavanda'
        });
        
        
        //Iniciar Express
        app.listen(app.get('port'), () => {
            console.log(`Express executando em http://localhost:${app.get('port')} no modo ${app.get('env')}`);
        });
    }
    catch(error){
        console.log(`Erro: ${error}`);
    }
})();