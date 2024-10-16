'use strict';
const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    title: String,
    content: String,
    description: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Notes', noteSchema);
