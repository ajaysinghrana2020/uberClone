const mongoose = require('mongoose');

function connectToDb() {
    if (!process.env.DB_URL) {
        console.error("DB_URL is not defined in environment variables");
        process.exit(1);
    }

    mongoose.connect(process.env.DB_URL)
        .then(() => console.log("Connected to DB"))
        .catch(err => {
            console.error("DB connection error:", err);
            process.exit(1);
        });
}

module.exports = connectToDb;
