const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
    }
}, {
    timestamps: true
});

// create model using the campsite schema
const Campsite = mongoose.model('Campsite', campsiteSchema);

module.exports = Campsite;