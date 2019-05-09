import { Document, Model } from 'mongoose'

import UserMdl from '@schemas/User'

class User {
  public model: Model<Document>

  constructor() {
    this.model = UserMdl
  }
}

export default new User()