const db = require('../data/db-config')

function getAll(){
    return db('todos')
}

async function addTodo(todo){
    const [todo_id] = await db('todos').insert(todo)
    return getById(todo_id)
}

async function getById(todo_id) {
    return db('todos').where('todo_id', todo_id).first() 
  }

async function deleteTodo(todo_id){
    const deletedTask = await getById(todo_id)
    await db('todos').where('todo_id', todo_id).delete()
    return deletedTask
}

module.exports = {
    getAll,
    addTodo,
    getById,
    deleteTodo
}