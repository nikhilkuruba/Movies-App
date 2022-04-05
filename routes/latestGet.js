const express = require('express')
const router =express.Router()
const Movierrr = require('../logic/getLatestMovies.js')
router.get('/discover/latest',Movierrr)
module.exports=router