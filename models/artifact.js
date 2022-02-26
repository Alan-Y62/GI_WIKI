const mongoose = require ('mongoose')

const aritfactSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
        },
        rarity: [
            {
                type: Number,
                required: true
            }
        ],
        pc_1: {
            type: String,
            required: true
        },
        pc_2: {
            type: String,
            required: true
        },
        pc_4: {
            type: String,
            required: true
        },
        flower: {
            name: {
                type: String,
                required: true
            },
            description: {
                type: String,
                required: true
            },
            lore: {
                type: String,
                required: true
            }
        },
        plume: {
            name: {
                type: String,
                required: true
            },
            description: {
                type: String,
                required: true
            },
            lore: {
                type: String,
                required: true
            }
        },
        sands: {
            name: {
                type: String,
                required: true
            },
            description: {
                type: String,
                required: true
            },
            lore: {
                type: String,
                required: true
            }
        },
        goblet: {
            name: {
                type: String,
                required: true
            },
            description: {
                type: String,
                required: true
            },
            lore: {
                type: String,
                required: true
            }
        },
        circlet: {
            name: {
                type: String,
                required: true
            },
            description: {
                type: String,
                required: true
            },
            lore: {
                type: String,
                required: true
            }
        },
        obtained_from: [
            {
                type: String,
                required: true
            }
        ]
    }
);

const Artifact = mongoose.model ("Artifact", aritfactSchema);

module.exports = Artifact;