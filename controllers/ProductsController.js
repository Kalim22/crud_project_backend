const product = require('../modals/ProductSchema')
const mongoDb = require('mongodb')
const mongoose = require('mongoose')

const getAllProducts = async (req, res) => {
    try {
        const products = await product.find({})
        return res.status(200).json({ status: true, products })
    } catch (error) {
        console.log(error)
    }
}

const addSingleProduct = async (req, res) => {
    try {

        const { name, price, quantity, createdBy, createdOn } = req.body

        if (!(name && price && quantity && createdBy && createdOn)) {
            return res.status(400).json({ status: false, error: 'Please all the field' })
        }

        const existingItem = await product.findOne({ name })

        if (!existingItem) {

            const addProduct = await new product({
                name,
                price,
                quantity,
                createdBy,
                createdOn,
            })

            await addProduct.save()
            return res.status(201).json({ status: true, message: "Your request has been added successfully", })
        }
        return res.status(400).json({ status: false, error: "Item already added!", })

    } catch (error) {
        console.log(error)
    }
}

const deleteSingleProduct = async (req, res) => {
    try {
        const id = req.query.id
        const item = await product.deleteOne({_id: id})
        return res.json({status: true, message: 'Deleted Successfully'})
    } catch (error) {
        console.log(error)
    }
}

const editSingleProduct = async (req, res) => {
    try {
        const id = req.query.id
        const {name, price, quantity} = req.body
        const item = await product.findOneAndUpdate({_id: id}, {
            name,
            price,
            quantity
        }, {new: true})
        await item.save()
        return res.status(200).json({status: true, product: item})
    } catch (error) {
        console.log(error)
    }
}


module.exports = {
    getAllProducts,
    addSingleProduct,
    deleteSingleProduct,
    editSingleProduct
}