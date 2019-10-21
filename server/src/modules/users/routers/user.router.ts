import { Router } from 'express'
import * as errorHandler from '../../../lib/error_handler'
import UserController from '../controllers/user.controller'
import validator from '../validators/user.validator'
const userController: UserController = new UserController()
import * as Joi from '@hapi/joi'
const router: Router = Router()

router.get('/', (req, res) => {
  userController.getAllData(req, res)
})

router.post('/search', (req, res) => {
  userController.getSearch(req, res)
})

router.get('/:id', (req, res) => {
  userController.getById(req, res)
})

router.post('/', (req, res) => {
  Joi.validate(req.body, validator.add, (err, value) => {
    try {
      if (err != null) {
        res.status(403).send(err)
      } else {
        req.body = value
        userController.create(req, res)
      }
    } catch (error) {
      console.error(error)
    }
  })
})

router.put('/:id', (req, res) => {
  Joi.validate(req.body, validator.update, (err, value) => {
    try {
      if (err != null) {
        res.status(403).send(err)
      } else {
        req.body = value
        userController.update(req, res)
      }
    } catch (error) {
      console.error(error)
    }
  })
})

router.delete('/:id', (req, res) => {
  userController.delete(req, res)
})

export default router
