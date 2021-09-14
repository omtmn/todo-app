const todos = [
    { 
        todo: 'clean', 
        todo_description: 'house is a mess', 
        todo_complete: false,
    },
    { 
        todo: 'feed the dogs', 
        todo_description: 'they are probably hungry', 
        todo_complete: false,
    },
    { 
        todo: 'finish project', 
        todo_description: 'you need to stop prolonging it', 
        todo_complete: false,
    },
    { 
        todo: 'play some fifa', 
        todo_description: 'play fifa after all work is done', 
        todo_complete: false,
    },
  ]
  
  exports.todos = todos
  
  exports.seed = function (knex) {
    return knex('todos').insert(todos)
  }