const express = require('express')
const router =express.Router()
const Moviesam = require('../logic/moviedetails.js')
router.post("/discover/popular",Moviesam)
module.exports=router