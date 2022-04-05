
const gg = require('../models/movie.js')
 const API_key='api_key=123683e2e84a3c5466f57706d7e892a7'
const BASE_URL='https://api.themoviedb.org/3'
const image='https://image.tmdb.org/t/p/w500'
//popularity movies
const API_URL=BASE_URL+'/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&'+API_key;
const { default: axios } = require("axios");
const Moviekeys= async (req,res)=>{
    try{
    axios.get('https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&api_key=123683e2e84a3c5466f57706d7e892a7')
    .then(function(response){
        
        for(var i=0;i<response.data.results.length;i++){
            const{title,release_date,poster_path,vote_average,overview}=response.data.results[i]
            const poster_paths=image+poster_path
            const movie=qwer.create({
                title,
                vote_average,
                overview,
                poster_paths,
                release_date,
                status:"latest"
                
      })
  }

})
    return  res.status(200).json({
        status:" found the latest movies"
    })
}catch(e){
  return res.status(500).json({err:e.message})  
}   

}

module.exports=Moviekeys