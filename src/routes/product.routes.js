const router = require('express').Router()
const { getProductCTRL } = require('../controllers/product.controller.js')
const { handleError } = require('../middlewares/error.middleware.js')

router.get('/', getProductCTRL)

router.use(handleError)

module.exports = router