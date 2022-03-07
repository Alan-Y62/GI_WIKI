const mongoose = require('mongoose');

const worldbossSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        unique: true,
    },
    other_name: {
        type: String,
        required: true
    },
    titles: [{
        type: String,
        required: true
    }],
    elements: [{
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
    location: {
        type: String,
        required: true
    }, 
    description: {
        type: String,
        required: true
    },
    drops: {
        character_ascension: [{
            type:String,
            required:true
        }],
        artifacts: [{
            type: String,
            required: true
        }]
    }
});

const World_boss = mongoose.model("Worldboss", worldbossSchema);

module.exports = World_boss;