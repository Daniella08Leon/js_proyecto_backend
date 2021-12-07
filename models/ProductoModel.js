import mongoose from "mongoose"

const Schema = mongoose.Schema

const ProductoSchema =  new Schema(
    {
        nombre : {
            type:String,
            required: "Nombre vacio"
        },
        precio : {
            type:Number,
            required: "Precio vacio"
        },
        cantidad : {
            type:Number,
            required: "Cantidad vacio"
        },
        color : {
            type:String,
            required: "Color vacia"
        },
        temporada : {
            type:String,
            required: "Temporada vacio"
        },
    }
)

export default ProductoSchema

