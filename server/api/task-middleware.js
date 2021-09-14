const Todo = require('./task-model')

async function checkId(req, res, next) {
    try{
      const todo = await Todo.getById(req.params.id)
      if(todo){
        req.todo = todo
        next()
      }
      else{
        res.status(404).json({message:"todo not found"})
      } 
    }catch(err){
      next(err)
    }
  }
  
  function checkPayload(req, res, next) {
    const {todo} = req.body
    if(todo){
      next();
    }else{
      res.status(400).json({message:"todo and description required"})
    }
  }

  module.exports = {
      checkId,
      checkPayload
  }