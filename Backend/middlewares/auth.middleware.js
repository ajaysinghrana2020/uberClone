const userModel = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const blackListTokenModel = require('../models/blackListToken.model');

module.exports.authUser = async (req, res, next) => {
    try {
        const token = req.cookies.token || (req.headers.authorization && req.headers.authorization?.split(' ')[1]);

        if (!token) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        const isBlacklisted = await blackListTokenModel.findOne({token:token});
        if(isBlacklisted){
            return res.status(401).json({ message: 'Unauthorized' });   
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findById(decoded._id);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        req.user = user;
        next();
    } catch (err) {
        if (err.name === 'TokenExpiredError') {
            return res.status(401).json({ message: 'Token has expired. Please log in again.' });
        }
        return res.status(401).json({ message: 'Unauthorized' });
    }
};

module.exports.authCaptain = async (req, res, next) => {
    try {
        const token = req.cookies.token || (req.headers.authorization && req.headers.authorization?.split(' ')[1]);

        if (!token) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        const isBlacklisted = await blackListTokenModel.findOne({token:token});
        if(isBlacklisted){
            return res.status(401).json({ message: 'Unauthorized' });   
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const captain = await userModel.findById(decoded._id);

        if (!captain) {
            return res.status(404).json({ message: 'Captain not found' });
        }

        req.captain = captain;
        next();
    } catch (err) {
        if (err.name === 'TokenExpiredError') {
            return res.status(401).json({ message: 'Token has expired. Please log in again.' });
        }
        return res.status(401).json({ message: 'Unauthorized' });
    }
}