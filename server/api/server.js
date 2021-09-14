const express = require('express');
const cors = require('cors');
const todoRouter = require('./todo-routes')


const server = express();

server.use(cors())
server.use(express.json());

server.use('/api', todoRouter)

module.exports = server;
