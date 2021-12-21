import * as controllerProducts from '../controllers/controllerProducts.js'
import * as middlewareUsers from '../middlewares/middlewaresUsers.js'

const routesProducts = (app) => {

    app.get('/products',middlewareUsers.buyer,controllerProducts.verProductos)
    app.get('/editProducts',middlewareUsers.seller,controllerProducts.vistaEditar)
    app.post('/editProducts',middlewareUsers.seller,controllerProducts.crearProductos)
    app.delete('/editProducts',middlewareUsers.seller,controllerProducts.borrarProductos)
    app.put('/editProducts',middlewareUsers.seller,controllerProducts.update)
}
export default routesProducts 