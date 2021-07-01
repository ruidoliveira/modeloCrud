const citySchema = require('../models/city');

class CityRepository {
  async create(body) {
    return await citySchema.create(body);
  }

  async findOne({nome}){
    return await citySchema.findOne({nome});
  }
}

module.exports = new CityRepository();