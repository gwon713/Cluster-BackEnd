import passport from 'passport';
import passportLocal from 'passport-local';

const LocalStrategy = passportLocal.Strategy;

class Passport {
    public config = () => {
        // Local Strategy
        passport.use(new LocalStrategy({
            usernameField: 'id',
            passwordField: 'pw'
        },
        (id, pw, done) => {
            return User.findOne({
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