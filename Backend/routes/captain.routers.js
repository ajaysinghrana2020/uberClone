const express = require('express');
const captaincontroller = require('../controllers/captain.controller');
const router = express.Router();
const body = require("express-validator");
const userModel = require('../models/user.model');

router.post('/register',[
    body.body('fullname.firstname').isLength({ min: 3 }).withMessage('First name must be at least 3 characters long'),
    body.body('fullname.lastname').isLength({ min: 3 }).withMessage('Last name must be at least 3 characters long'),
    body.body('email').isEmail().withMessage('Invalid email format'),
    body.body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    body.body('vehicle.color').notEmpty().withMessage('Vehicle color is required'),
    body.body('vehicle.numberPlate').isLength({ min: 6 }).withMessage('Number plate must be at least 6 characters long'),
    body.body('vehicle.capacity').notEmpty().withMessage('Vehicle capacity is required'),
    body.body('vehicle.vehicleType').isIn(['car','motercycle','auto']).withMessage('Vehicle type is invalid'),
],
captaincontroller.registerCaptain
)

module.exports = router;