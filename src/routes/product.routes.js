const router = require('express').Router()
const { getProductCTRL, createProductCTRL, aboutUsCTRL, formCTRL, contactUsCTRL, verifyStockCTRL, } = require('../controllers/product.controller.js')
const { handleError } = require('../middlewares/error.middleware.js')
const { productValidator } = require('../validators/product.validator.js')

router.get('/', getProductCTRL)
router.post('/loadproduct', productValidator, createProductCTRL)
router.get('/contactus', contactUsCTRL)
router.get('/aboutus', aboutUsCTRL)
router.get('/form', formCTRL)
router.patch('/buy', verifyStockCTRL)
router.use(handleError)

module.exports = router