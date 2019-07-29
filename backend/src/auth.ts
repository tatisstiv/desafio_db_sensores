import passport from 'passport';
import passportlocal from 'passport-local';
import passportjwt from 'passport-jwt';

const LocalStrategy = passportlocal.Strategy;

passport.use('signup', new LocalStrategy((username,password,done) => {
    //cadastrar o usuário na base de dados
    console.log(`Cadastrado: ${username}`);
    return done(undefined, {username:username,password:password});
}));

passport.use('login', new LocalStrategy((username,password,done) => {
    //buscar usuário na base de dados
    //validar usuário e senha
    if (username!== 'usuario') {
        return done(undefined, false, {message:'Usuário não encontrado'});
    }
    if (password !== 'senha') {
        return done(undefined, false, {message:'Usuário ou senha iválidos'});
    }
    return done(undefined, {username:username,password:password});
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
