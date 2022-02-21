const mongoose = require("mongoose")

const spiralSchema = new mongoose.Schema({
    floor:{
        type: Number,
        required: true
    },
    leyline_disorders: [
        {
            type: String,
            required: true
        }
    ],
    chamber_1: {
        enemy_level: {
            type: Number,
            required: true
        },
        challenge: {
            type: String,
            required: true
        },
        first_half: [
            {
                type: String,
                required: true  
            }
        ],
        second_half: [
            {
                type: String,
                required: true  
            }
        ]
    },
    chamber_2: {
        enemy_level: {
            type: Number,
            required: true
        },
        challenge: {
            type: String,
            required: true
        },
        first_half: [
            {
                type: String,
                required: true  
            }
        ],
        second_half: [
            {
                type: String,
                required: true  
            }
        ]
    },
    chamber_3: {
        enemy_level: {
            type: Number,
            required: true
        },
        challenge: {
            type: String,
            required: true
        },
        first_half: [
            {
                type: String,
                required: true  
            }
        ],
        second_half: [
            {
                type: String,
                required: true  
            }
        ]
    }
});

const Spiral = mongoose.model("Spiral", spiralSchema);

module.exports = Spiral;