const cityRepository = require('../repository/cityRepository');
const cityModels = require('../models/city');
class CityController {

    
    async find(req, res)  { 
        const cidades = await cityModels.find()
        res.json(cidades);
    }
}
module.exports = new CityController()