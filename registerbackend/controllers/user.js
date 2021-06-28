// const mongoose = require('mongoose')
const User = require('../models/user.js')
const bcrypt = require('bcrypt')

exports.signup = async (req,res,next) => {

    

    const saltPassword = await bcrypt.genSalt(10)  //for salting the password which the user gives
    const securePassword = await bcrypt.hash(req.body.password, saltPassword)  //for hash the password after salting the password which we request from the body of the passowrd

   const signedUpUser = new User({
       fullName: req.body.fullName,
       username: req.body.username,
       email: req.body.email.toLowerCase(),
       password: securePassword
   })
   signedUpUser.save()
   .then(data =>{
       res.json(data)
   })
   .catch(error =>{
       res.json(error)
   })
};