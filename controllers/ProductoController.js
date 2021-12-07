import { request, response } from "express"
import mongoose from "mongoose"
import ProductoSchema from "../models/ProductoModel.js"

const Maquillaje = mongoose.model('Maquillaje', ProductoSchema)

export const addProducto = (request, response) => {
    let nuevoProducto = new Maquillaje(request.body)
    nuevoProducto.save( (error , producto) => {
        if(error){
            response.send(error)
        }else{
            response.json(producto)
        }
    })
}

export const getProductos = (request, response) => {
    Maquillaje.find( {}, (error , productos) => {
        if(error){
            response.send(error)
        }else{
            response.json(productos)
        }
    })
}

export const getProductoId = (request, response) => {
    Maquillaje.findById( request.params.productoid, (error , producto) => {
        if(error){
            response.send(error)
        }else{
            response.json(producto)
        }
    })
}

export const deleteProducto = (request, response) => {
    Maquillaje.deleteOne( {_id: request.params.productoid }, (error , producto) => {
        if(error){
            response.send(error)
        }else{
            response.json({mensaje: "Producto borrado"})
        }
    })
}









