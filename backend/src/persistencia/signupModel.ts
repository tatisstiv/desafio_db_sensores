import { Signup } from '../entidades/signup';

import { Document, model, Schema, SchemaTypes, Model } from "mongoose";

interface SignupDocument extends Signup, Document {}

export const SignupModel: Model<SignupDocument> = model<SignupDocument>('Signup', new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }
}), 'signup');