import { Request, Response } from 'express'

import * as jwt from 'jsonwebtoken'
import BaseController from '../../../lib/bases/BaseController'
import UserServices from '../services/user.services'
const userServices: UserServices = new UserServices()
import async from 'async'

import * as configData from '../../../../config/config.json'
const config: any = (configData as any)

export default class UserController extends BaseController {
  constructor() {
    super(userServices)
  }

  public login(req: Request, res: Response) {
    const email = req.body.email
    const password = req.body.password

    const query = {
      email,
      password,
    }
    // Check the user exists
    userServices.findOne(query, (err, user) => {
      // Error during exuting the query
      if (err != null) {
        return res.status(403).send('Error, please try again')
      }

      // No User match the search condition
      if (!user) {
        return res.status(403).send('Error, Account not found')
      }
      const ONE_WEEK = 604800 // Token validtity in seconds
      const token = jwt.sign({ id: user._id }, config.SECRET, { expiresIn: ONE_WEEK })

        // User Is Valid
        // This object is just used to remove the password from the retuned fields
      const returnUser = user
      delete returnUser.password

        // Send the response back
      return res.send({
          message: 'You can login now',
          success: true,
          token,
          user: returnUser,
        })
      })

      // Check if the password is correct
      // tslint:disable-next-line: no-shadowed-variable
      // user.isPasswordMatch(password, user.password, (err, isMatch) => {
      //   if (!user) {
      //     return res.status(403).send(err)
      //   }
      //   // Invalid password
      //   if (!isMatch) {
      //     return res.status(403).send('Error, Invalid Password')
      //   }

      //   // User is Valid

      //   const ONE_WEEK = 604800 // Token validtity in seconds

      //   // Generating the token
      //   const token = jwt.sign({ id: user._id }, config.SECRET, { expiresIn: ONE_WEEK })

      //   // User Is Valid
      //   // This object is just used to remove the password from the retuned fields
      //   const returnUser = user
      //   delete returnUser.password

      //   // Send the response back
      //   return res.send({
      //     message: 'You can login now',
      //     success: true,
      //     token,
      //     user: returnUser,
      //   })
      // })

  }

}
