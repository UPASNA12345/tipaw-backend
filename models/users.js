const mongoose= require('mongoose');

//1 create a user schema 

const userSchema = mongoose.Schema({
    firstName: {type:String, required: true},
    lastName:{type:String, required: true},
    email: {type:String, required: true},
    password: {type:String, required: true},
    confirmPassword: {type:String, required: true},


})

module.exports = mongoose.model("User", userSchema);