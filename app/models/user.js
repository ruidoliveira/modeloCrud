const mongoose = require('../../infra/database/mongo');

const UserSchema = new mongoose.Schema({
    nome: String,
    sexo: String,
    dtanasc: String,
    idade: String,
    cidade: String

},
);

module.exports = mongoose.model('User', UserSchema);

