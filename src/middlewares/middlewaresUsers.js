export const encargado = (req,res,next)=>{

    if( req.isAuthenticated() && req.user.cargo == "encargado"){
        next()
    }else{
        res.status(200).redirect('/login')
    }
}

export const pañolero = (req,res,next)=>{
    if( req.isAuthenticated() && req.user.cargo == "pañolero"){
        next()
    }else{
        res.status(200).redirect('/login')
    }
}
