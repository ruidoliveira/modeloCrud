const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CitySchema = new Schema({
    nome: {
            type: String, 
            required: true, 
            unique: true, 
            lowercase: true,
        },
    estado: { 
            type: String, 
            required: true, 
            select: false,
        },
    created: { 
            type: Date, 
            default: Date.now,
        }
})

const City = mongoose.model('City', CitySchema);
module.exports = City;
