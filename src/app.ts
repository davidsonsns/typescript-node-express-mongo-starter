import cors from 'cors'
import express from 'express'
import mongoose from 'mongoose'

import routes from './routes'

class App {
  public express: express.Application

  constructor() {
    this.express = express()

    this.database()
    this.middlewares()
    this.routes()
  }

  private middlewares(): void {
    this.express.use(express.json())
    this.express.use(cors())
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
