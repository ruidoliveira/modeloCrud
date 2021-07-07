const userSchema = require('../models/user');

class UserRepository {
  async create(body) {
    return await userSchema.create(body);
  }

  async findOne({nome}){
    return await userSchema.findOne({nome});
  }

  async find(){ 
    return await userSchema.find({});
  }

  async findByIdAndRemove(_id){
      const result = await userSchema.findByIdAndRemove(_id)
      return result;
  }

  async findById(_id){
    const result = await userSchema.findById(_id)   
    return result;

}

  async findOneAndUpdate(_id , updates){
    const {nome, sexo, dtanasc, idade, cidade} = updates;
    
    const result = await userSchema.findByIdAndUpdate(_id, {nome, sexo, dtanasc, idade, cidade}, {new : true});
    
    return result;
  }
  

}

module.exports = new UserRepository();