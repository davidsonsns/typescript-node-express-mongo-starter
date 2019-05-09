import { Router } from 'express'

import User from '@controllers/user'

const router = Router()

router.get('/', (req, res) => {
  console.log(User)
  res.json({})
})

router.get('/second', (req, res) => {
  res.json({})
})

export default router