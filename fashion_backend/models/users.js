const mongoose = require('mongoose');
const userSchema = mongoose.Schema(
{
    name:{
        type:String,
    },
    email:{
        type:String,
        unique:true,
    },
    cartData:{
        type:Object,
    },
    password:{
        type:String,
    },
    date:{
        type:Date,
        default:Date.now,
    }
})

const User =mongoose.model("user",userSchema);
module.exports = User;