// const mongoose = require('mongoose');
// require('dotenv').config();

// const MONGOURI = process.env.MONGO_URL

// function  mongoDatabase (){
//     mongoose.connect(MONGOURI)

//     mongoose.connection.on("connected", ()=>{
//         console.log(`Database Connected Sucessfully`);
//     })
//     mongoose.connection.on("error",(err)=>{
//         console.log(err);
//         console.log("An Errror Occurred");
//     })
// }

// module.exports ={mongoDatabase}