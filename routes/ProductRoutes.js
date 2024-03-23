const express = require('express')
const {getAllProducts, addSingleProduct, deleteSingleProduct, editSingleProduct} = require('../controllers/ProductsController')

const route = express.Router()

route.get('/get-all-products/', getAllProducts)
route.post('/add-new-product/', addSingleProduct)
route.delete('/delete-product', deleteSingleProduct)
route.put('/edit-product/', editSingleProduct)

module.exports = route
