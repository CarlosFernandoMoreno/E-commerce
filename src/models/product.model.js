const { Schema, model } = require('mongoose')
const ProductSchema = new Schema({
    imgUrl: {
      type: String
    },
    titulo: {
      type: String,
      required: true
    },
    descripcion: {
      type: String,
      required: true
    },
    price: {
        type: Number,
        required: true
    },
  },
  {
    timestamps: true,
    versionKey: false
  })
  module.exports = model('Product', ProductSchema)