import {Sensor} from "../entidades/sensor";

import { Document, model, Schema, SchemaTypes, Model } from "mongoose";

interface SensorDocument extends Sensor, Document {}

export const SensorModel: Model<SensorDocument> = model<SensorDocument>('Sensor', new Schema({
    valorLeitura: { type:Number, min: 1, max: 99 ,required: true},
    planta: { type: String, enum:['Morango', 'Cacto', 'Cogumelo', 'Violeta', 'Lavanda'], required: true }
}), 'sensor');