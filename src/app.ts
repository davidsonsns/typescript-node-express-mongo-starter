import express from 'express'

class App {
  public express: express.Application

  constructor() {
    this.express = express()
  }

  private middlewares(): void {
    this.express.use(express.json());
    // this.express.use(cors());
  }

  private database() { }
}

export default new App().express
