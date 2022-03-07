const mongoose = require('mongoose');

const elitemobSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        unique: true,
    },
    shorthand:{
        type: String,
        required: true,
    },
    elements: [{
        type: String,
        required:true
    }],
    family: {
        type: String,
        required: true
    },
    groups: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    drops: {
        specific_drops: [{
            type:String,
            required:true
        }],
        artifacts: [{
            type: String,
            required: true
        }]
    }
});

const Elite_enemies = mongoose.model("Eliteenemy", elitemobSchema);

module.exports = Elite_enemies;