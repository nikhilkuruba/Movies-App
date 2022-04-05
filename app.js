const express=require('express');
const cors=require('cors');
const app=express();
const PORT = process.env.PORT || 5000
const mongoose=require('mongoose');

mongoose.connect('mongodb+srv://Nikhil:Nikhil@cluster0.xblr0.mongodb.net/MoviesDB?retryWrites=true&w=majority')
.then(()=>console.log('mongodb is connected'));

app.use(express.json());
app.use(cors());

app.use( require("./routes/authentication.js"))
app.use(require("./routes/movie.js"))
app.use(require("./routes/movieGet.js"))
app.use(require("./routes/latest.js"))
app.use(require("./routes/latestGet.js"))
app.use(require("./routes/fav.js"))
app.use(require("./routes/favget.js"))

app.listen(PORT,()=>console.log("server is listening at 5000.."))