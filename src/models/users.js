import mongoose from 'mongoose'

const usersCollection = 'users'

const usersSchema = new mongoose.Schema({

  username: { type: String, require: true },
  password: { type: String, require: true },
  name: { type: String, require: true },
  cargo: { type: String, require: true },
  tel: { type: Number, require: true },
  type: { type:String, require: true },
  url: { type: String, require: true },
})

export default mongoose.model(usersCollection, usersSchema)