const {Router} = require('express');
const express = require('express');
const CityController = require('../app/controllers/cityControllers');
const cityModels = require('../app/models/city')

const routes = new Router();

routes.use(express.json());

// Teste conexão
routes.get('/ok', (req,res) => {
    return res.status(400).send({message: 'deu certo'})
})

// CityController
routes.post('/city', CityController.teste);
routes.post('/city/registrar', CityController.criarCidade);
routes.get('/city/pesquisar', CityController.buscarCidade);
routes.get('/city/pesquisarNome', CityController.buscarNomeCidade);
routes.delete('/city/deletarCidade', CityController.deletarCidade); 
routes.patch('/city/atualizarCidade/:id', CityController.atualizarCidade); 


//


module.exports = routes;