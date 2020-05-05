const mongoose = require("mongoose")

const PlantSchema = new mongoose.Schema({
    nickname: {
        type: String,
        minlength: [2,"Name must be at least 2 characters long."]
        }, 
    location: {
        type: String,
        required: true
        },
    apid: {
        type: String,
        required: true
    },
    waterhistory: {
        type: Array,
        required: true,
    }
}, {timestamps: true })

const Plant = mongoose.model("Plant", PlantSchema)

module.exports = Plant
