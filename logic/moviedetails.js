

const gg = require('../models/movie.js')
 const API_key='api_key=123683e2e84a3c5466f57706d7e892a7'
const BASE_URL='https://api.themoviedb.org/3'
//popularity movies
const API_URL=BASE_URL+'/discover/movie?sort_by=popularity.desc&'+API_key;
const { default: axios } = require("axios");
const image='https://image.tmdb.org/t/p/w500'
const Moviekey= async (req,res)=>{
    try{
    axios.get('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=123683e2e84a3c5466f57706d7e892a7')
    .then(function(response){
        //console.log(response.data.results);
        for(var i=0;i<response.data.results.length;i++){
            const{title,release_date,poster_path,vote_average,overview}=response.data.results[i]
            const poster_paths=image+poster_path
            const hh=gg.create({
                title,
                vote_average,
                overview,
               poster_paths,
                release_date,
                status:"papular"
                
      })
  }
  //const card=gg.insertMany(response.data.results)
})
    return  res.status(200).json({
        status:"success"
    })
}catch(e){
  return res.status(500).json({err:e.message})  
}   

}

module.exports=Moviekey