const ff = require('../models/favorite.js')
const favmoviegeting=async (req,res)=>{
    const neworder=await ff.find({user:req.user})
  return  res.send({sucsess:"favorite",neworder})

}
module.exports=favmoviegeting