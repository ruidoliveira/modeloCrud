const {Router} = require('express');
const CityController = require('../app/controllers/cityControllers');

const routes = new Router();

routes.get('/ok', (req,res) => {
    const messagev = res.send({error: 'teste'});
    return messagev;
    // console.log('teste')
})




module.exports = routes;