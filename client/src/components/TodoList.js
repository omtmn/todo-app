import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './css/TodoList.css'

function TaskList() {
   const [todo, setTodo] = useState('')
   const [todos, setTodos] = useState([])

   useEffect(() => {
        getTodos()
   }, [])

   const getTodos = () => {
        axios.get('http://localhost:3000/api/todos')
        .then((res) => {
            setTodos(res.data)
        })
        .catch((err) => {
            alert('problem fetching tasks', err.message)
        })
   }

   const handleChange = (e) => {
        setTodo( [e.target.name] = e.target.value )
    }

    const handleSubmit = () => {
        axios.post('http://localhost:3000/api/addTodo', {
            todo: todo
        })
        getTodos()
        setTodo('')
    }

    const handleDelete = (todo_id) => {
        axios.delete(`http://localhost:3000/api/deleteTodo/${todo_id}`)
        getTodos()
        setTodo('')
    }

        return (
            <div>
                <h3 className="heading"> Todo List </h3>
                    <div className="ui input">
                        <input 
                        className="input"
                        placeholder="Todo"
                        type="text"
                        name="todo"
                        value={todo}
                        onChange={handleChange}
                        />
                    </div>
                    <button 
                        className="ui primary button basic" 
                        type="submit" 
                        onClick={handleSubmit}>
                        Submit 
                    </button>
                <hr />
                <div className="ui cards">
                {todos.map((todo)=> (
                    <div className="card">
                        <div className="content">
                            <div className="meta">
                                {todo.todo}
                            </div>
                        <div className="extra content">
                            <div className="ui two buttons">
                                <div className="ui basic green button" onClick={() => {handleDelete(todo.todo_id)}}> 
                                    Finished
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                ))}
            </div>
         </div> 
        )
    }

export default TaskList