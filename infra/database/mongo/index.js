const express = require('express');
const app = express();
const mongoose = require('mongoose');


const connectionOptions = {
  useNewUrlParser: true,
  useFindAndModify: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useMongoCliente: true
}

mongoose.connect('mongodb://localhost/noderocket', connectionOptions);
mongoose.Promise = global.Promise;

mongoose.connection.on('error', (err) =>{
  console.log(`🛑 Erro na conexão com o banco de dados:` + err);
})

mongoose.connection.on('disconnected', () =>{
  console.log(`🔂 Aplicação desconcectada do bando de dados!`);
})

mongoose.connection.on('connected', () =>{
  console.log(`✅ Aplicação conectada do bando de dados!`);
});

app.listen(3001, ()=>{
  console.log("✅ Server esta rodando na porta 3001 ")
})

module.exports = mongoose;