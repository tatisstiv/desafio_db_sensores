import { Router } from 'express';
import * as controlador from './registro.controlador';

export const router = Router();
export const path = '/registro';

router.post('', controlador.postRegistro);
router.get('/sensor/:id_sensor', controlador.getRegistrosSensor);