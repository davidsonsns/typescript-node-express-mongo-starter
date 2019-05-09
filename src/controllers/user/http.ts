import { Request, Response } from 'express'

import UserCtrl from './index'

interface IHttp {
  [key: string]: any
}

interface IRes extends Response {
  [key: string]: any
}

const http: IHttp = {}

http.get = async (req: Request, res: IRes) => {
  const users = await UserCtrl.model.find().lean()

  res.data = users
}

http.post = async (req: Request, res: IRes) => {
  const body = req.body
  const user = await UserCtrl.model.create(body)

  res.data = user
}

export default http