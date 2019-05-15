import bodyParser from 'body-parser'
import cors from 'cors'
import express from 'express'
import createLocaleMiddleware from 'express-locale'
import mongoose from 'mongoose'

import polyglot from '@config/polyglot'
import yup from '@config/yup'
import routes from './routes'

class App {
  public express: express.Application

  constructor() {
    this.express = express()

    this.database()
    this.preMiddlewares()
    this.routes()
    this.posMiddlewares()
  }

  // middlewares running before routes
  private preMiddlewares(): void {
    this.express.use(express.json())
    this.express.use(cors())
    this.express.use(createLocaleMiddleware({
      allowed: ['en_US', 'pt_BR'],
      default: 'en_US',
      priority: ['accept-language', 'default'],
    }))
    this.express.use(bodyParser.json())

    this.express.use((req: any, res: any, next: any) => {
      const locale = `${req.locale.language}_${req.locale.region}`

      req.polyglot = polyglot(locale)

      req.yup = yup(locale)

      next()
    })
  }

  // middlewares running after routes
  private posMiddlewares(): void {
    this.express.use((err: any, req: any, res: any, next: any) => {
      const response = {
        errors: [],
        message: err.message && req.polyglot.t(err.message),
        status: err.status || 400,
      }

      if (err.errors && Array.isArray(err.errors)) {
        response.errors =
          err.inner
            .map(({ path, message }: { path: string, message: object }) => ({ [path]: req.polyglot.t(message) }))
      }

      res.status(response.status).json(response)
    })

    this.express.use((req: any, res: any) => {
      res.status(200).json(res.response || {})
    })
  }

  private database() {
    const uri: string = process.env.MONGODB_URI as string
    mongoose.connect(uri, { useNewUrlParser: true })
  }

  private routes() {
    this.express.use(routes)
  }
}

export default new App().express
