const Product = require('../models/product.model.js')

const serviceGet = async (parameter) => {
    const product = await Product.find( parameter )
    return product
}

module.exports = {
    serviceGet
}