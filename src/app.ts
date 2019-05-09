import cors from 'cors'
import express from 'express'

import routes from './routes'

class App {
  public express: express.Application

  constructor() {
    this.express = express()

    this.middlewares()
    this.routes()
  }

  private middlewares(): void {
    this.express.use(express.json())
    this.express.use(cors())
  }

  private database() { }

  private routes() {
    this.express.use(routes)
  }
}

export default new App().express
