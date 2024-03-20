const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
// const userController = require('./controllers/userController')
const userRoute = require('./routes/UserRoutes')
require('dotenv').config()

const app = express()
app.use(express.json())
app.use(cors())
app.use('/public', express.static('public'));

// mongoose.connect("mongodb://127.0.0.1:27017/employee");
mongoose.connect('mongodb://127.0.0.1:27017/blood_donate')
  .then(() => console.log('Database Connected!'));

app.use('/user', userRoute);

// console.log(process.env) 
app.listen(3001,() => {
    console.log("server is running")
})