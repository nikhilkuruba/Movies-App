const mongoose=require('mongoose');
const { Schema } = mongoose;
const MovieSchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    movie_name:{type:String,required:true},
    rating:{type:Number},
    released :{type:String},
    movie_path:{type:String},
    description:{type:String,required:true},
    selected:{type:String}
});
module.exports= mongoose.model("favoritemovie", MovieSchema);
