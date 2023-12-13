const productModel = require('../models/product.model')
const Product = require('../models/product.model')

const getProductCTRL = (req, res) => {
    Product.find()
      .then((product) => {
        if(product.length === 0){
            res.json('todavia no se cargo el producto perro, funciona todo ok pero bancame un poco mas')
        } else {
            res.render('index', { product })
        }
      })
      .catch((error) => {
        res.json(error)
      })
  }

  module.exports = { 
    getProductCTRL
  }