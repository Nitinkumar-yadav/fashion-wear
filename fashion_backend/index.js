// const port = 4000; done
// const express = require("express"); done
// const app =express(); done
// const mongoose = require("mongoose"); done
// const jwt = require("jsonwebtoken"); done
// const multer = require("multer"); done
// const path = require("path"); done
// const cors =require("cors"); done
// require("dotenv").config(); done
// // const bcrypt = require('bcrypt');
// const MONGOURI = process.env.MONGO_URL

// app.use(express.json());
// app.use(cors());


// // Database Connection with MONGODB
// mongoose.connect(MONGOURI);

// //  APIs Creation 

// app.get("/",(req,res)=>{
//     res.send("Express App is Running");
// })


// // Image Storage Enginee

// const storage =multer.diskStorage({
//     destination: './upload/images',
//     filename:(req,file,cb)=>{
//         return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
//     }
// });

// const upload = multer({storage:storage});

// //  Create Upload EndPoint for images
// app.use('/images',express.static('upload/images'));

// app.post("/upload",upload.single('product'),(req,res)=>{
//     res.json({
//         success: 1,
//         image_url: `http://localhost:${port}/images/${req.file.filename}`,
//     })
// })

// // Schema for Creating Products

// const Product =mongoose.model("Product",{
//     id: {
//         type:Number,
//         required:true,
//     },
//     name:{
//         type:String,
//         required:true,
//     },
//     image:{
//         type:String,
//         required:true,
//     },
//     category: {
//         type:String,
//         required:true,
//     },
//     new_price:{
//         type:Number,
//         required:true,
//     },
//     old_price:{
//         type:Number,
//         required:true,
//     },
//     date:{
//         type:Date,
//         default:Date.now,
//     },  
//     avilable:{
//         type:Boolean,
//         default:true,
//     }
// })

// app.post('/addproduct',async(req,res)=>{
//     let products= await Product.find({});
//     let id;
//     if(products.length>0){
//         let last_product_array =products.slice(-1);
//         let last_product = last_product_array[0];
//         id = last_product.id+1;
//     }
//     else{
//         id=1;
//     }
//     const product = new Product({
//         id:id,
//         name:req.body.name,
//         image:req.body.image,
//         category:req.body.category,
//         new_price:req.body.new_price,
//         old_price:req.body.old_price,
//     });
//     console.log(product);
//     await product.save();
//     console.log(`Product Deatil adding in Database`);
//     res.json({
//         success:true,
//         name:req.body.name,
//     })
// })

// // Creating APIs for Deleting Product

// app.post('/removeproduct',async(req,res)=>{
//     await Product.findOneAndDelete({id:req.body.id});
//     console.log(`Product removed from Database`);
//     res.json({
//         success:true,
//         name: req.body.name,
//     })
// })

// // Creating APIs for All Products                                                                
// app.get('/allproducts',async(req,res)=>{                                                                            
//     let products = await Product.find({});                                                    
//     console.log("All Product Fecthed");         
//     res.send(products);

// })                                                                                                      

// // Schema Creating for user Model

// const Users = mongoose.model('Users',
// {
//     name:{
//         type:String,
//     },
//     email:{
//         type:String,
//         unique:true,
//     },
//     cartData:{
//         type:Object,
//     },
//     password:{
//         type:String,
//     },
//     date:{
//         type:Date,
//         default:Date.now,
//     }
// })

// //  Creating Endpoint for registering the Users
// app.post('/signup',async(req,res)=>{

//     let check = await Users.findOne({email:req.body.email});
//     if(check){
//         return res.status(400).json({success:false, errors:"existing user found with same email Address"})
//     }
//     let cart = {};
//     for (let i = 0; i <200; i++) {
//         cart[i]=0;
//     }

//     // const hashedPassword = await bcrypt.hash(req.body.password, 10);
//     const user = new  Users({
//         username:req.body.username,
//         email:req.body.email,
//         password: req.body.password,
//         cartData:cart,
//     })

//     await user.save();

//     const data ={
//         user:{
//             id:user.id
//         }
//     }
   
//     const token =jwt.sign(data,'sercet_code');
//     res.json({success:true,token})
// })

// // Creating User Endpoint for User login
// app.post('/login',async (req,res)=>{
//     let user =await Users.findOne({email:req.body.email});
//     if(user){
//         // const passCompare = bcrypt.compare(req.body.password, user.password);
//         const passCompare = req.body.password === user.password;
//         if(passCompare){
//             const data ={
//                 user:{
//                     id:user.id
//                 }
//             }
//             const token =jwt.sign(data,'secret_codes');
//             res.json({success:true,token});
//         }
//         else{
//             res.json({success:false,errors:"Wrong Password"});
//         }
//     }
//     else{
//         res.json({success:false, errors:"Wrong Email Address"});
//     }
// })

// app.listen(port,(error)=>{
//     if(!error){
//         console.log(`Server Running on Port ${port}`);        
//     }
//     else{
//         console.log(`Error : ${error}`);
//     }
    
// })





require('dotenv').config();
const cors = require('cors');
const express = require('express')

const apiRoutes = require('./routes/api');
const {mongoDatabase} = require('./config/connection');

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
try {
    mongoDatabase();
    app.use('/',apiRoutes);
    app.use('/images',express.static('upload/images'));
    app.listen(port,()=>{
        console.log(`Server is Running on http://localhost:${port}`)
    })
} catch (error) {
    console.log(error);
}
