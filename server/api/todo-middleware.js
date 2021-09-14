const Todo = require('./todo-model')
  
  function checkPayload(req, res, next) {
    const {todo} = req.body
    if(todo){
      next();
    }else{
      res.status(400).json({message:"todo required"})
    }
  }

  module.exports = {
      checkPayload
  }