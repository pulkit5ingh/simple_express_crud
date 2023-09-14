const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        default: null,
        required: false,
    },
    
}, { timestamps: true });

module.exports = mongoose.model('user', userSchema);
 