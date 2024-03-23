const user = require('../modals/users')
const { createRandomId } = require('../utils/RandomIdGenerator')

const getAllUser = async (req, res) => {
    try {
        const allUsers = await user.find({})
        return res.status(200).json({ status: true, users: allUsers })
    } catch (error) {
        console.log(error)
    }
}

const addNewUser = async (req, res) => {
    try {
        const { firstName, lastName, userId } = req.body

        if (!(firstName && lastName)) {
            return res.status(400).json({ status: false, error: 'Please all the field' })
        }

        const existingFirstName = await user.findOne({firstName: firstName.toLowerCase().trim() })

        if (!(existingFirstName)) {
            const addUser = await new user({
                firstName: firstName.toLowerCase().trim(),
                lastName: lastName.toLowerCase().trim(),
                userId: createRandomId(6),
            })

            await addUser.save()
            return res.status(201).json({ status: true, message: "User Register successfully" })
        }
        return res.status(400).json({ status: false, error: "User already exist" })
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    addNewUser,
    getAllUser
}