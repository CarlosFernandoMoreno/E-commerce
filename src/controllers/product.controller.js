const { serviceGet, serviceStock, serviceSell, } = require('../services/product.service.js')

const getProductCTRL = async (req, res) => {
  const product = await serviceGet()
  try {
    console.log(product)
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
    console.error('no se pudo renderizar la vista contact us')
    res.status(500).send('Error interno del servidor')
  }
}

const formCTRL = (req, res) => {
  try {
    res.render('form')
  } catch (error) {
    console.error(error)
    console.error('no se pudo renderizar la vista form')
    res.status(500).send('Error interno del servidor')
  }
}

const createProductCTRL = (req, res) => {
  const { description, title, price } = req.body
  const product = new Product({
    title,
    description,
    price,
    stock,
  })
  product
    .save()
    .then(() => {
      res.redirect('/loadproduct')
    })
    .catch((error) => res.status(400).json('error al guardar la publicacion' + error))
}

const verifyStockCTRL = async (req, res) => {
  try {
    const { quantity } = req.body
    if (!quantity || quantity <= 0 || isNaN(quantity)  ) {
      return res.status(400).send(`Se requiere la cantidad deseada en numeros enteros y positivos.`)
    }

    const answerStock = await serviceStock(quantity)

    if (answerStock.success) {
       await serviceSell(quantity)
      
      res.status(200).send('venta check')
    } else {
      console.log(`tas en el else de verifyStock perro. ${answerStock.message}`)
      res.status(400).send(answerStock)
    }
  } catch {
    console.error(error)
    console.error('tas en el catch de verifyStock perro')
    res.status(500).send('Error interno del servidor.')
  }
}


/*
controler para renderizar formulario - check

path check
llamamos al service de validacion de stock check

try  llamamos al service donde descontamos la cantidad de unidades de la 
database check 
catch errores no contemplados mas arriba 
*/

module.exports = {
  getProductCTRL,
  createProductCTRL,
  aboutUsCTRL,
  contactUsCTRL,
  formCTRL,
  verifyStockCTRL,
}
