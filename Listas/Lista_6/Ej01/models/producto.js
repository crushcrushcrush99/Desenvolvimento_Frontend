const mongoose = require('mongoose')

const productoSchema = mongoose.Schema({
    nombre:{ type: String, require: true},
    descripcion:{ type: String, require: true},
    imagen:{ type: String, require: true},
    valor:{ type: Number, require: true},
    categoria:{ type: String, require: true}
})

const producto = mongoose.model('Productos', productoSchema)

module.exports = producto