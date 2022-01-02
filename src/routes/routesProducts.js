import * as controllerProducts from '../controllers/controllerProducts.js'
import * as middlewareUsers from '../middlewares/middlewaresUsers.js'

const routesProducts = (app) => {

    app.get('/products',middlewareUsers.pañolero,controllerProducts.verProductos)
    app.get('/editProducts',middlewareUsers.encargado,controllerProducts.vistaEditar)
    app.post('/editProducts',middlewareUsers.encargado,controllerProducts.crearProductos)
    app.delete('/editProducts',middlewareUsers.encargado,controllerProducts.borrarProductos)
    app.put('/editProducts',middlewareUsers.pañolero,controllerProducts.update)
}
export default routesProducts 