import express from 'express';
import bodyParser from 'body-parser';
import errorhandler from 'errorhandler';
import passport from 'passport';
import {path as pathSensor, router as routerSensor} from './api/sensor.rota';
import {path as pathRegistro, router as routerRegistro} from './api/registro.rota';
import {path as pathAuth, router as routerAuth} from './auth.rotas';
import './auth';
import cors from 'cors';

const app = express();

app.use(cors());

app.set('port', process.env.PORT);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(passport.initialize());

app.use(pathSensor, routerSensor);
app.use(pathRegistro, routerRegistro);
app.use(pathAuth, routerAuth);

if (process.env.NODE_ENV !== "production") {
    app.use(errorhandler());
}
export default app;