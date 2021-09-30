/*import { NextFunction } from 'express';
import passport from 'passport';
import passportLocal from 'passport-local';
import { search_user } from '../service/userService';

const LocalStrategy = passportLocal.Strategy;

class Passport {
    public config = () => {
        // Local Strategy
        passport.use(new LocalStrategy({
            usernameField: 'userEmail',
            passwordField: 'userToken'
        },
        (id, pw, done) => {
            return search_user({
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
    
    public isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
        if (req.isAuthenticated()) {
            return next();
        }
        res.redirect("/");
    };
}

export default Passport;*/