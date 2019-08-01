import passport from 'passport';
import passportlocal from 'passport-local';
import passportjwt from 'passport-jwt';
import { SignupRepositorio } from './persistencia/signupRepositorio';

const LocalStrategy = passportlocal.Strategy;

passport.use('signup', new LocalStrategy( async (username,password,done) => {
    //cadastrar o usuário na base de dados
    let novoUsuario = await SignupRepositorio.criar({username:username,password:password});
    console.log(`Cadastrado: ${username}`);
    return done(undefined, {username:username,password:password});
}));

passport.use('login', new LocalStrategy( async (username,password,done) => {
    //buscar usuário na base de dados
    let user = await SignupRepositorio.buscarPorNome(username)
    //validar usuário e senha
    if (user === null) {
        return done(undefined, false, {message:'Usuário não encontrado'});
    } else if (password !== user.password) {
        return done(undefined, false, {message:'Usuário ou senha inválidos'});
    } else {
        return done(undefined, {username:user.username,password:user.password});   
    }
}));

const JwtStrategy = passportjwt.Strategy;

passport.use(new JwtStrategy({
    secretOrKey: 'minhachavesecreta',
    //indicar onde está o token enviado pelo cliente
    //neste caso está no cabeçalho como Authorization: Bearer token
    jwtFromRequest: passportjwt.ExtractJwt.fromAuthHeaderAsBearerToken()
    }, (token,done) => {
        try {
            return done(undefined, token.user);
        } catch (error) {
            done(error);
        }
    })
);
