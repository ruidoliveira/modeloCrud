const {Router} = require('express');
const CityController = require('../app/controllers/cityControllers');
const routes = new Router();

routes.get('/ok', CityController.find)

module.exports = routes;