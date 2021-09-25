import passport from 'passport';
import passportLocal from 'passport-local';
import { search_user } from '../service/userService';

const LocalStrategy = passportLocal.Strategy;

class Passport {
    public config = () => {
        // Local Strategy
        passport.use(new LocalStrategy({
            usernameField: 'id',
            passwordField: 'pw'
        },
        (id, pw, done) => {
            return search_user({
                where: {
                    id: id,
                    pw: pw
                }
            })
            .then(user => {
                if(!user) {
                    return done(null, false, { message: 'Incorrect ID or PW' })
                }
    
                return done(null, user, { message: 'Login Success' });
            })
            .catch(err => done(err));
        }))

        passport.serializeUser<any, any>((user, done) => {
            done(null, user);
        });
         
        passport.deserializeUser(function(user, done) {
            done(null, user);
        });
    }
    
    public isAuthenticated = (req, res, next) => {
        if (req.isAuthenticated()) {
            return next();
        }
        res.redirect("/");
    };
}

export default Passport;