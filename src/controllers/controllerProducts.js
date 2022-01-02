import Product from "../models/products.js"

export const verProductos = async (req,res) => {
  
  try {
    const products = await Product.find({}).lean()
    res.status(200).render('products',{products:products})
  } 
  catch (e) { console.log(e) }
}

export const vistaEditar = async (req,res)=>{
  try {
    const products = await Product.find({}).lean()
    res.status(200).render('editProducts',{products:products})
  } 
  catch (e) { console.log(e) }
}

export const crearProductos = async (req,res) => {
  let product = req.body
  product.url = Math.floor(Math.random()*1000000000000) + ".jpg"
  try {
    const product= new Product(req.body)
    await product.save()
    const EDFile = req.files.url
    EDFile.mv(`./public/img/products/${product.url}`,err => {
      if(err) return res.status(500).send({ message : err })
      return res.status(200).render("nofound",{message:"no se encontro el Producto"})
      })

  res.status(200).redirect('/editProducts')
    
  } 
  catch (e) { console.log(e) }  
}

export const borrarProductos = async (req,res) => {
  res.status(200).redirect('/editProducts')
  try {
    const productfound = await Product.find({_id:req.body._id}).lean()
       if ((Object.entries(productfound).length === 0)) {
         return res.status(200).render("nofound",{message:"no se encontro el Producto"})
       }
       await Product.deleteOne({ _id: req.body._id })   
 } 
 catch (e) { console.log(e) }
}  

export const update = async (req,res) => {
  console.log(req.body)
  let product = {}
  if(req.body.nombre) product.nombre = req.body.nombre
  if(req.body.valor) product.valor = req.body.valor
  if(req.body.descripcion) product.descripcion = req.body.descripcion
  if(req.body.estado) product.estado = req.body.estado
  console.log(product)
  try {
    const productfound = await Product.find({_id:req.body._id}).lean()
        
    if ((Object.entries(productfound).length === 0)) {
          return res.status(200).render("nofound",{message:"no se encontro el Producto"})
        }
    await Product.findOneAndUpdate(
      { _id: req.body._id },
      { $set: product},
      { new: true }
    )
    if(req.body.user.cargo=="encargado"){
      res.status(200).redirect('/editProducts')
    }
    if(req.body.user.cargo=="pañolero"){
      res.status(200).redirect('/products')
    }
    
  } 
  catch (e) { console.log(e) }
}
