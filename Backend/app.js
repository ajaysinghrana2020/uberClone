const dotenv = require('dotenv');
dotenv.config(); // Load environment variables
const express = require('express');
const cors = require('cors');
const connectToDb = require('./db/db');
const userRouts = require('./routes/user.routes');
const captainRouts = require('./routes/captain.routers');
const cookieParser = require('cookie-parser');
const app = express();

// Connect to the database
connectToDb();

// Middleware
app.use(cors());
app.use(express.json()); // Important for handling JSON requests

app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

// Routes
app.get('/', (req, res) => {
    res.send("Hello World");
});

app.use('/users',userRouts);

app.use('/captain',captainRouts);
module.exports = app;
