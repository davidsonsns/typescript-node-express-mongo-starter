import { Request, Response } from 'express'

import UserCtrl from './index'
import * as validator from './validator'
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

  res.response = { users, message: req.polyglot.t('emailRequiredField') }
}

http.post = async (req: IReq, res: IRes) => {
  await validator.post(req.yup, req.body)

  const body = req.body
  const user = await UserCtrl.model.create(body)

  res.data = user
}

export default http