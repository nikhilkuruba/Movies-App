const gg = require('../models/movie.js')
const Moviekeygets=async (req,res)=>{

    try{
       
      const movieinformation=await gg.find({status:"latest"})
     console.log(movieinformation)

        return  res.status(200).json({
            status:"latest ok",
            movieinformation

        })

    }catch(e){
        console.log(e.message)
      return res.status(500).json({err:e.message})  
      
    }   
            
            
    
}

module.exports=Moviekeygets