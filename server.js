const express = require('express');
const sqlite3 = require('squlite3').verbose();
const bodyParser = require('body-parser');
const app = express();

//Configurações do Servidor
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());//Necessário para o caminho de compras(JSON)
app.use(express.static('.'));//Serve seus arquivos HTML, CSS e imagens

//Conexão com o Banco de Dados
const db = new sqlite3.Database('./sisenai.db');

//Inicialização das Tabelas(Cria apenas se não existiram)
db.serialize(() => {
  //Tabela de Clientes
             db.run('CREATE TABLE IF NOT EXISTS clientes(
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
               nome TEXT,
               cpf TEXT,
               telefone TEXT
  )`);
               
