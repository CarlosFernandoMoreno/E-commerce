const Product = require('../models/product.model.js')

const serviceGet = async (parameter) => {
    try {
        const product = await Product.find(parameter)
        return product
    } catch (error) {
        console.error(error)
        throw new Error('Error al obtener el producto. El producto no existe')
    }
}

const serviceStock = async (quantity) => {
    try {
        const product = await serviceGet()
        const availableStock = product[0].stock

        if (quantity <= availableStock) {
            return {
                success: true,
                message: `Stock disponible.`,
                stock: availableStock,
            }
        } else {
            return {
                success: false,
                message: `No hay suficiente stock.`,
                stock: availableStock,
            }
        }
    } catch (error) {
        console.error(error)
        throw new Error('Error al verificar el stock.')
    }
}

const serviceSell = async (quantity) => {
    try {
        const product = await serviceGet()
        const productId = product[0]._id

        product[0].stock -= quantity

        await Product.updateOne({ _id: productId }, { $set: { stock: product[0].stock } })

        return {
            success: true,
            message: 'Venta completada exitosamente.',
        }

    } catch {
        console.error(error);
        return {
            success: false,
            message: 'Hubo un error de servidor durante la venta. Reintenta mas tarde por favor',
        };
    }
}

/*
service validacion de stock - check 
const stock check
if stock es menor a solicitud -> tirar error - check

service de descontamos la cantidad de unidades de la database - check
*/

module.exports = {
    serviceGet,
    serviceStock,
    serviceSell,
}