const express = require("express")
require("dotenv").config()



const app = express();
const PORT = process.env.PORT || 7000

app.listen(PORT, () => (
    console.log("Server listening on port: ", PORT)
))