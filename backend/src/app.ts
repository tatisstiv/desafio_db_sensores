import express from 'express';
import bodyParser from 'body-parser';
import errorhandler from 'errorhandler';
import {path as pathSensor, router as routerSensor} from './api/sensor.rota';
import {path as pathRegistro, router as routerRegistro} from './api/registro.rota';

const app = express();
app.set('port', process.env.PORT);
app.use(bodyParser.json());

app.use(pathSensor, routerSensor);
app.use(pathRegistro, routerRegistro);

if (process.env.NODE_ENV !== "production") {
    app.use(errorhandler());
}
export default app;