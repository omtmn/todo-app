const todos = [
    { 
        todo: 'clean', 
        todo_complete: false,
    },
    { 
        todo: 'feed the dogs', 
        todo_complete: false,
    },
    { 
        todo: 'finish project', 
        todo_complete: false,
    },
    { 
        todo: 'play some fifa', 
        todo_complete: false,
    },
  ]
  
  exports.todos = todos
  
  exports.seed = function (knex) {
    return knex('todos').insert(todos)
  }