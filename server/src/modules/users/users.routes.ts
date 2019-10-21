
import { Router } from 'express'

import AuthRouter from './routers/auth.router'
import UserRouter from './routers/user.router'

const router: Router = Router()

router.use('/', AuthRouter)

router.use('/', UserRouter)

export default router
