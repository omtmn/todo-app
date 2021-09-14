const router = require('express').Router()
const { checkPayload, checkId } = require('./todo-middleware')
const Todo = require('./todo-model')

router.get('/todos', async (req, res, next) => {
    try {
        const data = await Todo.getAll()
        res.status(200).json(data)
    } catch (err) {
        next(err)
    }
})

router.post('/addTodos', checkPayload, async (req, res, next) => {
    try {
        const data = await Todo.addTodo(req.body)
        res.status(201).json(data)
    } catch (err) {
        next(err)
    }
})

router.delete('/deleteTodo', checkId, async (req, res, next) => {
    try {
        const data = await Todo.deleteTodo(req.params.id)
        res.status(204).json(data)
    } catch (err) {
        next(err)
    }
})

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(err.status || 500).json({
      message: err.message,
      stack: err.stack,
    })
  })

module.exports = router