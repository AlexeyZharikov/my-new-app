let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let exerciseSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
}, {
    timestamps: true
});

let Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;