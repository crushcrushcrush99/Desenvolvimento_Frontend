const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 8060
const connectionString = "mongodb+srv://admin:teste123@appdb.wv6kdpm.mongodb.net/"
const Producto = require('./models/producto')
const cors = require('cors')

app.use(express.json())
app.use(cors())

app.get("/lista-productos", async (req, res) => {
    try{
        let productos = await Producto.find()
        return res.status(200).json(productos)
    }catch(error){
        return res.status(500).json(error)
    }
   
})

app.post('/agregar-producto', async (req, res) =>{
    let { nombre, descripcion, imagen, valor, categoria } = req.body

    let producto = {
        nombre,
        descripcion,
        imagen,
        valor,
        categoria
    }

    try{
        await Producto.create(producto)
        return res.status(201).json({message: "Producto registrado con éxito!"})
    } catch (error){
        return res.status(500).json({message: error.message})
    }
})

mongoose.connect(connectionString, {
    dbName: "Ecommerce"
}).then(() => {
    console.log("MongoDB UP!")
    console.log(`http://localhost:${port}`)
    app.listen(port)
}).catch((error) => {
    console.log(error)
})