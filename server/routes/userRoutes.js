const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

module.exports = (app) => {
    app.use('/api/users', router)

    router.get('/getUsers', userController.getAllUsers);
    router.get('/getUserByEmail', userController.getUserByEmail);
    router.get('/getUserByID', userController.getUserByID);
    router.post('/newUser', userController.createNewUser);
}