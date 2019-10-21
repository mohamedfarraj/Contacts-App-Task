import { Router } from 'express'

import ContactsRoutes from '../modules/contacts/routers/contacts.router'
import userRoutes from '../modules/users/users.routes'
const router: Router = Router()

// import passport = require('passport')

router.use('/users', userRoutes)
router.use('/contacts', ContactsRoutes)
export default router
