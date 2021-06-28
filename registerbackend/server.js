const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const routesUrls = require('./routes/user.js');
const cors = require('cors')
const logger = require('morgan')


dotenv.config()   // to activate dotenv package

app.use(logger("dev"))

mongoose.connect(process.env.DATABASE_ACCESS,() =>console.log("Database connected"))


app.use(express.json())  
app.use(cors())
app.use('/app',routesUrls)  


const PORT=process.env.PORT || 3500
app.listen(PORT,()=>{
    return console.log("we are using nodemon on port 3500");
})
