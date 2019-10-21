import * as Joi from '@hapi/joi'
import { Router } from 'express'
import * as errorHandler from '../../../lib/error_handler'
import ContactsController from '../controllers/contacts.controller'
import validator from '../validators/contacts.validator'
const contactController: ContactsController = new ContactsController()
const router: Router = Router()

router.get('/', (req, res) => {
  contactController.getAllData(req, res)
})

router.post('/search', (req, res) => {
  contactController.getSearch(req, res)
})

router.get('/:id', (req, res) => {
  contactController.getById(req, res)
})

router.post('/', (req, res) => {
  console.log(req.body)
  Joi.validate(req.body, validator.add, (err, body) => {
    try {
      console.log(err, body)
      req.body = body
      if (err != null) res.status(403).send(err)
      else contactController.create(req, res)
    } catch (error) {
      console.error(error)
    }
  })
})

router.put('/:id', (req, res) => {
  Joi.validate(req.body, validator.update, (err, body) => {
    try {
      req.body = body
      if (err != null) res.status(403).send(err)
      else contactController.create(req, res)
    } catch (error) {
      console.error(error)
    }
  })
})

router.delete('/:id', (req, res) => {
  contactController.delete(req, res)
})

export default router
