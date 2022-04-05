// const mongoose=require('mongoose');
// const { Schema } = mongoose;
// const MovieSchema = new Schema({
//     title:{type:String,required:true},
//     vote_average:{type:Number},
//     release_date :{type:String},
//     poster_paths:{type:String},
//     overview:{type:String,required:true},
//     status:{type:String}
    
// });
// module.exports= mongoose.model("movie", MovieSchema);

const mongoose=require('mongoose');
const { Schema } = mongoose;
const MovieSchema = new Schema({
    title:{type:String,required:true},
    vote_average:{type:Number},
    release_date :{type:String},
    poster_paths:{type:String},
    overview:{type:String,required:true},
    status:{type:String}
    
});
module.exports= mongoose.model("Capitalmoviecompany", MovieSchema);