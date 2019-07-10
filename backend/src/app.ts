import express from 'express';
import bodyParser from 'body-parser';
import errorhandler from 'errorhandler';
import {path as pathSensor, router as routerSensor} from './api/sensor.rota';

const app = express();
app.set('port', process.env.PORT);
app.use(bodyParser.json());

app.use(pathSensor, routerSensor);

if (process.env.NODE_ENV !== "production") {
    app.use(errorhandler());
}
export default app;