const citySchema = require('../models/city');

class CityRepository {
  async create(body) {
    return await citySchema.create(body);
  }

  async findOne({nome}){
    return await citySchema.findOne({nome});
  }

  async find(){ 
    return await citySchema.find({});
  }

  async findByIdAndRemove({_id}){
      return await citySchema.findByIdAndRemove({_id})

  }

  async findOneAndUpdate(_id , updates){
    const {nome, estado} = updates;
    const result = await citySchema.findByIdAndUpdate(_id, { nome, estado}, {new : true});
    
    return result;
  }
  

}

module.exports = new CityRepository();