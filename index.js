require('dotenv').config()
require('./src/config/bd.config.js')
const express = require('express')
const app = express()
const cors = require('cors')
const PORT = process.env.PORT
const path = require('path')
const publicationsRoutes = require('./src/routes/product.routes.js')
app.use(express.urlencoded({ extended: false })) // analiza los datos codificados en la url de los post
app.use(express.static(path.join(__dirname, './public'))) // sirve archivos estaticos en el directorio indicado
app.use(express.json()) // analiza el cuerpo de la solicitud y coloca los datos json en el req.body
app.use(cors())
app.disable('x-powered-by') // deshabilita el encabezado  mencionado que indica las tecnologias utilizadas 

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'src/views'))

app.use(publicationsRoutes)

app.listen(PORT, () => { console.log('El servidor esta corriendo en el puerto: ' + PORT) })
