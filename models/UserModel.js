const mongoose = require('mongoose');
require('../db.connection');

const userInfoSchema = new mongoose.Schema({
    firstname : {
        type: String,
        required: true,
        trim: true
    },
    lastname : {
        type: String,
        required: true,
        trim: true
    },
    email : {
        type: String,
        required: true,
    },
    password : {
        type: String,
        required: true,
    },
},{
    timestamps: true
});

const UserFormModel = mongoose.model("userInfo",userInfoSchema);
module.exports = UserFormModel ;