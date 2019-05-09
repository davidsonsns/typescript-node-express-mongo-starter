import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
  res.json({})
})

router.get('/second', (req, res) => {
  res.json({})
})

export default router