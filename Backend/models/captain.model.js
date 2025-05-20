const mongoose = require('mongoose');
const { estimatedDocumentCount } = require('./user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const e = require('express');
const captainSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: true,
            minlength:[3, 'First name must be at least 3 characters long'],
            maxlength:[50, 'First name must be at most 50 characters long'],
        },
        lastname: {
            type: String,
            minlength:[3, 'Last name must be at least 3 characters long'],
            
        }
    },
    email:{
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function(v) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
            },
            message: props => `${props.value} is not a valid email!`
        }
    },
    password: {
        type: String,
        required: true,
        minlength: [6, 'Password must be at least 6 characters long'],
        select: false
    },
    socketId:{
        type: String,
        required: false,
    },
    status:{
        type: String,
        enum: ['active', 'inactive'],
        default: 'active'
    },
    vehicle: {
        color:{
            type: String,
            required: true,
        },
        numberPlate:{
            type: String,
            required: true,
            unique: true,
            minlength: [6, 'Number plate must be at least 6 characters long']
        },
        capacity:{
            type: Number,
            required: true,
        },
        vehicleType:{
            type: String,
            enum: ['car', 'bike', 'truck'],
            required: true,
        },

       
        
    },
    location: {
        lat:{
            type: Number,
            // required: true,
        },
        long:{
            type: Number,
            // required: true,
        }
    },
    color:{
        type: String,
        // required: true,
    },
    numberPlate:{
        type: String,
        // required: true,
        unique: true,
        minlength: [6, 'Number plate must be at least 6 characters long']
    },
    capacity:{
        type: Number,
        // required: true,
    },
    vehicleType:{
        type: String,
    },
})

captainSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, { expiresIn: '24h' });
    return token;
}
captainSchema.methods.comparePassword = async function(password) {
    return await bcrypt.compare(password, this.password);
}
captainSchema.statics.hashPassword = async function(password) {
    return await bcrypt.hash(password, 10);
}
const captainModel = mongoose.model('Captain', captainSchema);

module.exports = captainModel;
// module.exports = {
//     registerUser,
//     loginUser,
//     getUserProfile                                           