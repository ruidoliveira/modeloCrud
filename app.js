const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routers/index');
require('./infra/database/mongo');

class App{
  constructor() {
    this.server = express();
    this.middleware();
    this.routes();  
    
  }
  middleware(){
    this.server.use(bodyParser.json());
    this.server.use(bodyParser.urlencoded({extended: false}));
  }
  routes(){
    this.server.use(routes);
  }
}
module.exports = new App().server;