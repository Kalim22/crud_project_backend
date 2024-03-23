const express = require('express')
const {addNewUser, getAllUser} = require('../controllers/userController')

const route = express.Router()

route.get('/get-all-users/', getAllUser)
route.post('/add-new-user/', addNewUser)

module.exports = route

