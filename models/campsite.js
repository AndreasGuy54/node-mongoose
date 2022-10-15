const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema for comments about campsites
const commentSchema = new Schema({
    rating: {
        type: Number,
        min: 1,
        max: 5,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

// create a schema for campsite
const campsiteSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    comments: [commentSchema] //add comments array as sub document in campsites schema
}, {
    timestamps: true
});

// create model using the campsite schema
const Campsite = mongoose.model('Campsite', campsiteSchema);

module.exports = Campsite;