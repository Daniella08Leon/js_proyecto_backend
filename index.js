import express from "express"
import _ from "lodash"
import rutas from "./rutas/rutas.js"
import mongoose from "mongoose"
import bodyParser from "body-parser"

const app = express()
const PUERTO = 5000

mongoose.Promise = global.Promise
mongoose.connect("mongodb://localhost/maquillaje")
app.use(bodyParser.urlencoded( {extended:true} ))
app.use(bodyParser.json())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  rutas(app)

app.listen( PUERTO, function(){
    console.log("Servidor de desarrollo ejecutado en puerto "+ PUERTO)
})














