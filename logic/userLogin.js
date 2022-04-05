const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const JWT_SECRET="laundry-service"


//create user

const createUser =async(req,res)=>{

    try{
        const user= await User.findOne({email:req.body.email })

        if (!user){
        
        const salt = await bcrypt.genSalt(10)
        const securePassword = await bcrypt.hash(req.body.password,salt)



        const newUseInfo={
            name:req.body.name,
            email:req.body.email,
            phone:req.body.phone,
            password:securePassword,
            pincode:req.body.pincode,
            country:req.body.country
        }

        const newuser =await User.create(newUseInfo)

        const data ={
            user:{
                id:newuser.id
            }
        }

        const authtoken =jwt.sign(data,JWT_SECRET)

        const success=true
        res.send({success,authtoken})

    }else{
        res.status(400).json({error:"user exists"})}
        
    }catch(err){
        console.log(err)
        res.status(500).json({error:"try again"})
    }
}





const Login = async(req,res)=>{


    
    const {email, password }=req.body
    try{
    const user =await User.findOne({email})

    let success=false
    console.log(user)

    if (!user){
        return  res.json({success,error:"wrong details "})
    }
    
    //checking password
    const password_compare_res= await bcrypt.compare(password,user.password)

    if (!password_compare_res){
        return  res.json({success,error:"wrong password"})
    }

    const data = {
        user: {
          id: user.id
        }
      }

    const token =jwt.sign(data,JWT_SECRET)

    success=true

    res.json({success,token})
    }catch(err){
        console.log(err)
        res.status(500).json({error:"try again"})
    }

}


module.exports={createUser,Login}