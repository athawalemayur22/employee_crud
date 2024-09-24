const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

let MONGO_URL = process.env.MONGO_URL;

mongoose.connect(MONGO_URL, { 
     
});

mongoose.connection.on("connected", async (req, res) => {
    console.log("Database Connected!.");
})