const {Router} = require('express');
const express = require('express');
const CityController = require('../app/controllers/cityControllers');
const UserController = require('../app/controllers/userControllers');
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


//UserController
 routes.post('/user', UserController.teste);
 routes.post('/user/registrar', UserController.criarUser);
 routes.get('/user/pesquisar', UserController.buscarUser);
 routes.get('/user/pesquisarNome', UserController.buscarNomeUser);
 routes.delete('/user/deletarUsuario/:id', UserController.deletarUser); 
 routes.patch('/user/atualizarCidade/:id', UserController.atualizarUsuario); 


module.exports = routes;