const userSchema = require('../models/city');

class UserRepository {
  async create(body) {
    return await userSchema.create(body);
  }

  async findOne({email}){
    return await userSchema.findOne({email});
  }



}

module.exports = new UserRepository();