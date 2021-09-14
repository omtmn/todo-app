const router = require('express').Router()

router.get('/', (req, res, next) => {
    res.status(200).json('tasks')
})

router.post('/addTask', (req, res, next) => {
    res.status(201).json('added task')
})

router.delete('/deleteTask', (req, res, next) => {
    res.status(204).json('Deleted Task')
})

module.exports = router