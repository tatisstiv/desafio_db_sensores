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
            _id: new ObjectId(),
            valorLeitura: 50,
            planta: 'Morango'
        });
        await SensorRepositorio.criar({
            _id: new ObjectId(),
            valorLeitura: 85,
            planta: 'Morango'
        });
        await SensorRepositorio.criar({
            _id: new ObjectId(),
            valorLeitura: 30,
            planta: 'Cacto'
        });
        await SensorRepositorio.criar({
            _id: new ObjectId(),
            valorLeitura: 10,
            planta: 'Cacto'
        });
        await SensorRepositorio.criar({
            _id: new ObjectId(),
            valorLeitura: 85,
            planta: 'Cogumelo'
        });
        await SensorRepositorio.criar({
            _id: new ObjectId(),
            valorLeitura: 60,
            planta: 'Cogumelo'
        });
        await SensorRepositorio.criar({
            _id: new ObjectId(),
            valorLeitura: 50,
            planta: 'Violeta'
        });
        await SensorRepositorio.criar({
            _id: new ObjectId(),
            valorLeitura: 95,
            planta: 'Violeta'
        });
        await SensorRepositorio.criar({
            _id: new ObjectId(),
            valorLeitura: 25,
            planta: 'Lavanda'
        });
        await SensorRepositorio.criar({
            _id: new ObjectId(),
            valorLeitura: 10,
            planta: 'Lavanda'
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