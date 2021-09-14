const todos = [
    { 
        todo: 'clean', 
    },
    { 
        todo: 'feed the dogs', 
    },
    { 
        todo: 'finish project', 
    },
    { 
        todo: 'play some fifa', 
    },
  ]
  
  exports.todos = todos
  
  exports.seed = function (knex) {
    return knex('todos').insert(todos)
  }