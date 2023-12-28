const { serviceGet } = require('../services/product.service.js')

const getProductCTRL = async (req, res) => {
  const product = await serviceGet()
  
  try {
    res.render('index', { product })
  } catch (error) {
    console.error(error)
    console.error('no se pudo renderizar la vista index')
    res.status(500).send('Error interno del servidor')
  }
}



const aboutUsCTRL = (req, res) => {
  try {
    res.render('aboutUs')
  } catch (error) {
    console.error(error)
    console.error('no se pudo renderizar la vista about us')
    res.status(500).send('Error interno del servidor')
  }
}

const contactUsCTRL = (req, res) => {
  try {
    res.render('contactUs')
  } catch (error) {
    console.error(error)
    console.error('no se pudo renderizar la vista about us')
    res.status(500).send('Error interno del servidor')
  }
}

const createProductCTRL = (req, res) => {
  const { description, title, price } = req.body
  const product = new Product({
    title,
    description,
    price,
  })
  product
    .save()
    .then(() => {
      res.redirect('/loadproduct')
    })
    .catch((error) => res.status(400).json('error al guardar la publicacion' + error))
}

module.exports = {
  getProductCTRL,
  createProductCTRL,
  aboutUsCTRL,
  contactUsCTRL,
}
