const express = require('express');
const cors = require('cors');

const server = express();

server.use(cors())
server.use(express.json());

server.get('/api/tasks', (req, res, next) => {
    res.status(200).json('tasks')
})

server.post('/api/addTask', (req, res, next) => {
    res.status(201).json('added task')
})

server.delete('/api/removeTask', (req, res, next) => {
    res.status(204).json('Deleted Task')
})

server.use((err, req, res, next) => { // eslint-disable-line
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  })
})

module.exports = server;
