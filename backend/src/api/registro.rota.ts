import { Router } from 'express';
import * as controlador from './registro.controlador';
import passport = require('passport');

export const router = Router();
export const path = '/registro';

router.post('', controlador.postRegistro);
router.get('/sensor/:id_sensor', passport.authenticate('jwt', {session:false}), controlador.getRegistrosSensor);