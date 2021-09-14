const express = require('express');
const cors = require('cors');
const taskRouter = require('./task-routes')


const server = express();

server.use(cors())
server.use(express.json());

server.use('/api', taskRouter)

module.exports = server;
