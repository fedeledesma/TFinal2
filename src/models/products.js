import mongoose from 'mongoose'

const productsCollection = 'products'
const productsSchema = new mongoose.Schema({
  nombre: { type: String, require: true },
  valor: { type: Number, require: true },
  descripcion: { type: String, require: true },
  estado: { type: String, require: true },
  url: { type:String, require: true },
})
export default mongoose.model(productsCollection, productsSchema)