import {Sensor} from "../entidades/sensor";

import { Document, model, Schema, SchemaTypes, Model } from "mongoose";

interface SensorDocument extends Sensor, Document {}

export const SensorModel: Model<SensorDocument> = model<SensorDocument>('Sensor', new Schema({
    planta: { type: String, enum:['Morango', 'Cacto', 'Cogumelo', 'Violeta', 'Lavanda'], required: true },
    status: { type: String, enum:['Umidade alta', 'Umidade baixa', 'Umidade ideal'], default: 'Umidade ideal' }
}), 'sensor');