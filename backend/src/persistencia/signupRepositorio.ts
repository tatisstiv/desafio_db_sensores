import { SignupModel } from "./signupModel";
import { Signup } from "../entidades/signup";

export class SignupRepositorio{
    static async criar(signup: Signup): Promise<Signup>{
        let novoSignup = await SignupModel.create(signup);
        return novoSignup.save();
    }

    static async buscarPorNome(username: string): Promise<Signup|null>{
        return SignupModel.findOne({username:username}).exec();
    }
}