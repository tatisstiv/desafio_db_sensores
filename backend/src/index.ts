import app from './app';
import {connect} from 'mongoose';
import {SensorRepositorio} from './persistencia/sensorRepositorio';
import { ObjectId } from 'bson';

(async() => {
    try{
        //Conectar ao MongoDB
        const servidorMongoDB = `mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/estufa`;
 
        await connect(servidorMongoDB, {useNewUrlParser:true});

        /*await SensorRepositorio.criar({
            planta: 'Morango',
            status: 'Umidade ideal'
        });
        await SensorRepositorio.criar({
            planta: 'Morango',
            status: 'Umidade ideal'
        });
        await SensorRepositorio.criar({
            planta: 'Cacto',
            status: 'Umidade ideal'
        });
        await SensorRepositorio.criar({
            planta: 'Cacto',
            status: 'Umidade ideal'
        });
        await SensorRepositorio.criar({
            planta: 'Cogumelo',
            status: 'Umidade ideal'
        });
        await SensorRepositorio.criar({
            planta: 'Cogumelo',
            status: 'Umidade ideal'
        });
        await SensorRepositorio.criar({
            planta: 'Violeta',
            status: 'Umidade ideal'
        });
        await SensorRepositorio.criar({
            planta: 'Violeta',
            status: 'Umidade ideal'
        });
        await SensorRepositorio.criar({
            planta: 'Lavanda',
            status: 'Umidade ideal'
        });
        await SensorRepositorio.criar({
            planta: 'Lavanda',
            status: 'Umidade ideal'
        });*/
        
        
        //Iniciar Express
        app.listen(app.get('port'), () => {
            console.log(`Express executando em http://localhost:${app.get('port')} no modo ${app.get('env')}`);
        });
    }
    catch(error){
        console.log(`Erro: ${error}`);
    }
})();