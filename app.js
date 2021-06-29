const express = require('express');
const routes = require('./routers')
const servez = express()
require('../src/infra/database/mongo')
servez.use(routes)
class App {
  constructor() {
    this.server = express();
    this.routes();
    
  }

  routes() {
    this.server.use(routes);
    
  }
}

module.exports = new App().server;