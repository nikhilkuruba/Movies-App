const express = require('express');
const router =express.Router();
const fetchuser = require('../middleware/favmovieFetch.js');
const Moviefavi = require('../logic/getFavMovies.js');
router.get("/discover/favorite",fetchuser,Moviefavi);
module.exports=router 