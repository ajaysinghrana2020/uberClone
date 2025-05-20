const captainModel = require('../models/captain.model');

module.exports.createCaptain = async ({firstname, lastname, email, password,color,capacity,vehicleType,numberPlate}) => {
    if (!firstname || !lastname || !email || !password || !color || !capacity || !vehicleType || !numberPlate) {
        throw new Error('All fields are required');
    }

    const captain = captainModel.create({
        fullname: {
            firstname,
            lastname
        },
        email,
        password,
        vehicle:{
            color,
            numberPlate,
            capacity,
            vehicleType
        }
    })
    return captain;
}