import { Request, Response } from 'express'

import UserCtrl from './index'

interface IHttp {
  [key: string]: any
}

interface IRes extends Response {
  [key: string]: any
}

interface IReq extends Response {
  [key: string]: any
}

const http: IHttp = {}

http.get = async (req: IReq, res: IRes) => {
  const users = await UserCtrl.model.find().lean()

  res.response = { users, message: req.polyglot.t('testes') }
}

http.post = async (req: Request, res: IRes) => {
  const body = req.body
  const user = await UserCtrl.model.create(body)

  res.data = user
}

export default http