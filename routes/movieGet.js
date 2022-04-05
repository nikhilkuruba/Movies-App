const express = require('express')
const router =express.Router()
const Movie = require('../logic/getMovieDetails.js')
router.get('/discover/popular',Movie)
module.exports=router