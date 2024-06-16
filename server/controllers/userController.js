const User = require("../models/user")

const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll()
        res.json(users)
    } catch (error) {
        console.log("Error in fetching all users: ", error)
        res.status(500).json({ error: "Error in fetching all users from the server" })
    }
}

const getUserByEmail = async (req, res) => {
    try {
        const user = await User.findAll({
            where: {
                email: req.body.email
            }
        })
        res.json(user)
    } catch (error) {
        console.log("Error in finding user by email: ", error)
        res.status(500).json({ error: `Unable to find the user with email ${req.body.email}`})
    }
}

const getUserByID = async (req, res) => {
    try {
        const user = await User.findAll({
            where: {
                id: req.body.id
            }
        })
        res.json(user)
    } catch (error) {
        console.log("Error in finding user by id: ", error)
        res.status(500).json({ error: `Unable to find user with the id: ${req.body.id}` })
    }
}

const createNewUser = async (req, res) => {
    try {
        const user = req.body
        const existing = await User.findOne({
            where: {
                email: user.email
            }
        })

        if (existing !== null) {
            const error = new Error("Email already in use")
            error.status = 400
            throw error
        }

        const newUser = User.create({
            email: user.email,
            first_name: user.first_name,
            last_name: user.last_name,
            password: user.password,
            active: true
        })
        res.status(201).json(newUser)
    } catch (error) {
        console.log("Error in creating a new user.", error)
        res.status(500).json({ error: "Unable to create new user" })
    }
}

module.exports = {
    getAllUsers, 
    getUserByEmail,
    getUserByID,
    createNewUser
}