const mongoose = require("mongoose");

const CharSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    star: {
      type: Number,
      required: true,
    },
    weapon: {
      type: String,
      required: true,
    },
    constellation: {
      type: String,
      required: true,
    },
    specialty: {
      type: String,
      required: true,
    },
    region: {
      type: String,
      required: true,
    },
    element: {
      type: String,
      required: true,
    },
    birthday: {
      type: String,
      required: true,
    },
    talents: {
      normalattack: {
        name: {
          type: String,
          required: true,
        },
        normal: {
          description: {
            type: String,
            required: true,
          },
        },
        charged: {
          description: {
            type: String,
            required: true,
          },
        },
        plunged: {
          description: {
            type: String,
            required: true,
          },
        },
      },
      skill: {
        name: {
          type: String,
          required: true,
        },
        description: {
          type: String,
          required: true,
        },
      },
      burst: {
        name: {
          type: String,
          required: true,
        },
        description: {
          type: String,
          required: true,
        },
      },
      altsprints: {
        name: {
          type: String,
          required: true,
        },
        description: {
          type: String,
        },
      },
      passives: {
        battle: [
          {
            name: {
              type: String,
            },
            description: {
              type: String,
            },
          },
          {
            name: {
              type: String,
            },
            description: {
              type: String,
            },
          },
        ],
        overworld: {
          name: {
            type: String,
            required: true,
          },
        },
      },
    },
  },
  { versionKey: false }
);

const Character = mongoose.model("Character", CharSchema);

module.exports = Character;
