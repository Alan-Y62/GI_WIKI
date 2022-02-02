const mongoose = require('mongoose');

const weeklybossSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true
    },
    elements: [{
        type: String,
        required: true
    }],
    location: {
        type: String,
        required: true
    },
    domain_type: {
        type: String,
        required: true
    },
    domain_name: {
        type: String,
        required: true
    },
    description: {
        type: String, 
        required: true
    },
    drops: {
        talent_level_up: [{
            type: String,
            required: true
        }],
        character_ascension: [{
            type: String,
            required: true
        }],
        artifacts: [{
            type: String,
            required: true
        }]
    }
});

const Weekly_boss = mongoose.model("Weeklyboss", weeklybossSchema);

module.exports = Weekly_boss;