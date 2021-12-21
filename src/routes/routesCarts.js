import * as controllerCarts from '../controllers/controllerCarts.js'
import * as middlewareUsers from '../middlewares/middlewaresUsers.js'

const routesCarts = (app) => {

    app.get('/carrito',middlewareUsers.buyer,controllerCarts.verCarts)
    app.post('/carrito',middlewareUsers.buyer,controllerCarts.addCarts)
    app.delete('/carrito',middlewareUsers.buyer,controllerCarts.deleteCarts)
}
export default routesCarts 