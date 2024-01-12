const { check } = require('express-validator')

const productValidator = [
   check('title')
      .exists()
      .not()
      .isEmpty()
      .withMessage('El titulo es requerido'),
  check('description')
    .exists()
    .not()
    .isEmpty()
    .withMessage('La descripcion es requerida'),
  check('price')
    .exists()
    .not()
    .isEmpty()
    .withMessage('El precio es requerido')
    .isNumeric()
    .withMessage('El precio debe ser numérico'),
  (req, res, next) => { validateResult(req, res, next) }]
module.exports = { productValidator }