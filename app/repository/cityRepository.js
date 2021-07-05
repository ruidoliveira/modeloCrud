const citySchema = require('../models/city');

class CityRepository {
  async create(body) {
    // console.log('Repository create', body);
    return await citySchema.create(body);
  }

  async findOne({nome}){
    // console.log('Repository findOne', nome);
    return await citySchema.findOne({nome});
  }

  async find(){
    // console.log('Repository find', {});
    return await citySchema.find({});
  }

  async findByIdAndRemove({_id}){
      return await citySchema.findByIdAndRemove({_id})

  }

  async findOneAndUpdate(_id , updates){
    const {nome, estado} = updates;

    console.log('idRepository:', _id);
    console.log('nomeRepository', updates);
    const result = await citySchema.findOneAndUpdate(_id, { nome, estado}, {new : true});
    console.log(result);
    return result;
  }
  

}

module.exports = new CityRepository();