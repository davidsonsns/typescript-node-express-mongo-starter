import { model, Schema } from 'mongoose'

const schema = new Schema({
  firstName: { type: String, required: true },
  lastName: String,
}, { minimize: true, timestamps: true })

export default model('User', schema)