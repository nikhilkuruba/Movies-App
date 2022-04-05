const express = require('express');
const router =express.Router();
const { createUser, Login } = require('../logic/userLogin.js');
router.post("/register",createUser);
router.post("/",Login);
module.exports=router
