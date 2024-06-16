const express = require('express');
const cors = require("cors")
const session = require("express-session")

require("dotenv").config();

const sequelize = require("./models/db.config");

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
        cookie: {
            secure: false,
            maxAge: 24 * 60 * 60 * 1000
        }
    })
)

const routeLoader = require("./routes")
routeLoader(app)

// Database connection
sequelize
    .sync()
    .then(() => {
        console.log('Connected to database.');
        app.listen(PORT, () => console.log(`Server is running on ${PORT}.`));
    })
    .catch(err => {
        console.error('Unable to connect to the database', err);
    });