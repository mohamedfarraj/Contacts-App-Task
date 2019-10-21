
import passportJwt = require('passport-jwt')
import User from '../modules/users/models/user.model'

import * as configData from '../../config/config.json'
const config: any = (configData as any)

// tslint:disable-next-line: no-shadowed-variable
const passport = (passport: any) => {

    // const JwtStrategy = passportJwt.JwtStrategy
    // const ExtractJwt = passportJwt.ExtractJwt
    // const jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
    // const secretOrKey = config.SECRET
    // const opts = {
    //     jwtFromRequest,
    //     secretOrKey,
    // }
    // passport.use(new JwtStrategy(opts, (jwtPayload, done) => {
    //     User.findById(jwtPayload.user._id, (err, user) => {
    //         if (err != null) {
    //             return done(err, false)
    //         }

    //         if (user) {
    //             return done(null, user)
    //         }
    //     })
    // }))
    return ({})
}
export {
    passport,
}
