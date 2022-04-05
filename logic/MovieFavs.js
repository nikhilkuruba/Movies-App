
const ff = require('../models/favorite.js')
const favorite =async (req,res)=>{
    try{
        
    const {movie_name,rating,released,movie_path,description,selected}=req.body
     const newmovie=await ff.create(
            {movie_name,
                rating,
                released,
                movie_path,
                description,
                selected,
            user:req.user
        })
      return  res.status(200).json({status:"success",newmovie})
        
     }catch(error){
      res.status(500).json({error:error.message})
    }
}
module.exports=favorite