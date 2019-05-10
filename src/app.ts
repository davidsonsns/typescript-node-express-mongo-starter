import bodyParser from 'body-parser'
import cors from 'cors'
import express from 'express'
import createLocaleMiddleware from 'express-locale'
import mongoose from 'mongoose'

import polyglot from '@config/polyglot'
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
      default: 'en_US',
      priority: ['accept-language', 'default']
    }))
    this.express.use(bodyParser.json())

    this.express.use((req: any, res: any, next: any) => {
      req.polyglot = polyglot(req.locale.language)

      next()
    })
  }

  // middlewares running after routes
  private posMiddlewares(): void {
    this.express.use((err: any, req: any, res: any, next: any) => {
      if (!err.status) {
        err.status = 500
      }

      res.status(err.status).json({ message: err.message })
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
