const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
}, { timestamps: true });

module.exports = mongoose.model('post', postSchema);
