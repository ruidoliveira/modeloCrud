const cityRepository = require('../repository/cityRepository');
class CityController {
    
    async teste(req, res)  { 
       try{
        return res.status(400).send({message: 'deu certo'})    
       }catch(err){
           return res.status(400).send({error: 'deu ruim'})
       }
       
    }
}
module.exports = new CityController()