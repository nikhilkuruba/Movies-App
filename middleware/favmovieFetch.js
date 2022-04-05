const jwt = require('jsonwebtoken')
const JWT_SECRET="laundry-service"


const fetchuser=(req,res,next)=>{
    
    //const token =req.header('auth-token')
    //console.log(token)
    console.log(req.headers.authorization)
    var token=(req.headers.authorization)
    console.log(token)
    if (!token){
      return  res.status(401).send("pls provide valid token")
    }
     jwt.verify(token, JWT_SECRET,function(err,decoded){
         if(err){
             return res.status(401).json({
                 status:"failed",
                 message:"invalid token"
             })
         }
         req.user=decoded.user.id
         console.log(decoded.user.id)
     })

    

    next()

}

module.exports=fetchuser;