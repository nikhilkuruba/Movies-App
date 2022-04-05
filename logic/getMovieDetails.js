const gg = require('../models/movie.js')
const Moviekeyget=async (req,res)=>{

    try{
       
      const movieinformation=await gg.find({status:"papular"})
     console.log(movieinformation)

        return  res.status(200).json({
            status:" popular ok",
            movieinformation


        })

    }catch(e){
        console.log(e.message)
      return res.status(500).json({err:e.message})  
      
    }   
            
            
    
}

module.exports=Moviekeyget