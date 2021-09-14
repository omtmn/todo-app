const express = require('express');
const cors = require('cors');
const taskRouter = require('./task-routes')

const server = express();

server.use(cors())
server.use(express.json());

server.use('/api/tasks', taskRouter)

server.use((err, req, res, next) => { // eslint-disable-line
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  })
})

module.exports = server;
