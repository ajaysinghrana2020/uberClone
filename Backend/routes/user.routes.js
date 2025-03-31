const express = require('express');
// const { model } = require('mongoose');
const router =express.Router();
const {body} = require("express-validator");
const userController =require('../controllers/user.controller');

router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min:2}).withMessage('First name must me greater the 2 len'),
    body('password').isLength({min:6}).withMessage('Password must be 6 digits.')
],userController.registerUser
);

module.exports= router;