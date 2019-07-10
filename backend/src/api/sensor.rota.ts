import { Router } from 'express';
import * as controlador from './sensor.controlador';

export const router = Router();
export const path = '/sensor';

router.post('', controlador.postSensor);
router.get('', controlador.getSensores);
router.get('/:id', controlador.getSensorId);
router.get('/planta/:planta', controlador.getSensorPlanta);