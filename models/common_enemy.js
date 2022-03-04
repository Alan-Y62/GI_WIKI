const mongoose = require('mongoose');

const commonmobSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        unique: true,
    },
    shorthand:{
        type: String,
        required: true,
    },
    element: [{
        type: String,
        required:true
    }],
    family: {
        type: String,
        required: true
    },
    group: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    drops: [{
        type: String,
        required: true
    }]
});

const Common_enemies = mongoose.model("Commonenemy", commonmobSchema);

module.exports = Common_enemies;