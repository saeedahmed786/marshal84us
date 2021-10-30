const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    role: {
        type: Number
    },
    name: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    }
}, {timestamps: true}
);

const userModel = new mongoose.model('User', userSchema);
module.exports = userModel;
