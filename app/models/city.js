const mongoose = require('../../infra/database/mongo');

const CitySchema = new mongoose.Schema({
    nome: String,
    estado: String
},
);

module.exports = mongoose.model('City', CitySchema);

