import * as Joi from '@hapi/joi'
import { Router } from 'express'
import UserController from '../controllers/user.controller'
import validator from '../validators/user.validator'

const userController: UserController = new UserController()
const router: Router = Router()

router.post('/login', (req, res) => {
  Joi.validate(req.body, validator.login, (err, value) => {
    try {
      if (err != null) {
        res.status(403).send(err)
      } else {
        req.body = value
        userController.login(req, res)
      }
    } catch (error) {
      console.error(error)
    }

  })
})

export default router
