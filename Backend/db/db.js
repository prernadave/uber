const mongoose = require('mongoose');

function connectToDb() {
    mongoose.connect(process.env.URL, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log("Database connected successfully");
        })
        .catch((err) => {
            console.error("Error connecting to the database:", err);
            process.exit(1); 
        });
}


module.exports = connectToDb