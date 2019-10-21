import * as bodyParser from 'body-parser'
import * as cors from 'cors'
import * as express from 'express'
import * as http from 'http'
import * as path from 'path'
import router from './router'
// import passport = require('passport')

import * as configData from '../config/config.json'
const config: any = (configData as any)
/**
 * @class Server
 */
export default class Server {

  /**
   * Return a new instance of Server
   *
   * @class Server
   * @method bootstrap
   * @static
   *
   * @return {Server}
   */
  public static bootstrap(): Server {
    return new Server()
  }

  private app: express.Application

  /**
   * Constructor.
   *
   * @class Server
   * @constructor
   * @public
   */
  public constructor() {
    this.app = express()
    this.config()
  }

  /**
   * Run the server.
   *
   * @class Server
   * @method run
   * @public
   *
   * @param {number} port
   * @param {Function} [callback]
   *
   * @return {http.Server}
   */
  public run(port: number, callback?: () => void): http.Server {
    if (callback) return this.app.listen(port, callback)

    return this.app.listen(port)
  }

  /**
   * Initialize server config.
   *
   * @class Server
   * @method config
   * @private
   *
   * @return {Void}
   */
  private config(): void {
    /** Register lib middlewares */
    this.app.use(bodyParser.json({ limit: '50mb' }))
    this.app.use(bodyParser.urlencoded({
      extended: true,
      limit: '50mb',
    }))
    this.app.use(cors())
    // Passport MW
    const jwtpassport = (req, res, next) => {
      if (req.headers.authorization === config.TEMPLOGIN) {
        next()
      } else {
        res.status(403).send('No Auth')
      }
    }
    this.app.use(jwtpassport)
    // this.app.use(passport.initialize())
    // this.app.use(passport.session())
    // require('./lib/passport').passport(passport)
    /** Register application router */
    this.app.use('/uploads', express.static(path.join(__dirname, '/../uploads')))
    this.app.use('/api/', router)
    // this.app.use('/', express.static(path.join(__dirname, '/../front-end')))
  }
}
