const express = require('express');
const server = express();
const routes = require('./routers/index');
require('../src/infra/database/mongo');

server.use(routes)

module.exports = routes

// class App{
//   constructor() {
//     this.server = express();
//     this.routes();  
//   }
//   routes(){
//     this.server.use(routes);
//   }
// }
// module.exports = new App().server;