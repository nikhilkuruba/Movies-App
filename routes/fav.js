const express = require('express')
const router =express.Router()
const fetchuser = require('../middleware/favmovieFetch.js')
const Moviefav = require('../logic/MovieFavs.js')
router.post("/discover/favorite",fetchuser,Moviefav)
module.exports=router 