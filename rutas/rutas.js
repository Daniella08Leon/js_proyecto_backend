
import { addProducto, 
         getProductos, 
         getProductoId,
         deleteProducto }from "../controllers/ProductoController.js"

const rutas = ( app ) => {
    app.route('/maquillaje')
             .get(getProductos)
             .post(addProducto)
    app.route('/maquillaje/:productoid')
             .get(getProductoId)
             .delete(deleteProducto)
}

export default rutas






