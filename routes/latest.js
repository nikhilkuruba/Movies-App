const express = require('express');
const router =express.Router();
const Moviesam1 = require('../logic/latestMovies.js');

router.post("/discover/latest",Moviesam1);


module.exports=router;