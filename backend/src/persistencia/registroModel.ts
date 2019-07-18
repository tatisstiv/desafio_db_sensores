import { Registro } from "../entidades/registro"
import { Document, model, Schema, SchemaTypes, Model } from "mongoose";

interface RegistroDocument extends Registro, Document {}

export const RegistroModel: Model<RegistroDocument> = model<RegistroDocument>('Registro', new Schema({
    valorLeitura: { type:Number, min: 1, max: 99 ,required: true},
    sensor: { type: SchemaTypes.ObjectId, ref: 'Sensor'},
}, { timestamps: { createdAt: 'created_at' } }))