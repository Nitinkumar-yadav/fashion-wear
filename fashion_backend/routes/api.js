// const router = require('express').Router();
// const jwt = require("jsonwebtoken");
// const multer = require("multer");
// const path = require("path");
// const Product = require('../models/products');
// const Users = require('../models/users');


// // Image Storage Enginee
// const storage =multer.diskStorage({
//     destination: './upload/images',
//     filename:(req,file,cb)=>{
//         return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
//     }
// });
// const upload = multer({storage:storage});

// //  APIs Creation 
// router.get("/",(req,res)=>{
//     res.send("Express App is Running");
// })

// //  Create Upload EndPoint for images
// // app.use('/images',express.static('upload/images'));

// router.post("/upload",upload.single('product'),(req,res)=>{
//     res.json({
//         success: 1,
//         image_url: `http://localhost:${port}/images/${req.file.filename}`,
//     })
// })


// // Adding all products
// router.post('/addproduct',async(req,res)=>{
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
// router.post('/removeproduct',async(req,res)=>{
//     await Product.findOneAndDelete({id:req.body.id});
//     console.log(`Product removed from Database`);
//     res.json({
//         success:true,
//         name: req.body.name,
//     })
// })

// // Creating APIs for All Products                                                                
// router.get('/allproducts',async(req,res)=>{                                                                            
//     let products = await Product.find({});                                                    
//     console.log("All Product Fecthed");         
//     res.send(products);

// }) 

// //  Creating Endpoint for registering the Users
// router.post('/signup',async(req,res)=>{

//     let check = await Users.findOne({email:req.body.email});
//     if(check){
//         return res.status(400).json(
//         {
//             success:false, 
//             errors:"existing user found with same email Address"
//         })
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
// router.post('/login',async (req,res)=>{
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
    
// module.exports = router;