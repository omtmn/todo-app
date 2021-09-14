import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './css/TodoList.css'

function TaskList() {
   const [todo, setTodo] = useState("")
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

    const handleSubmit = (e) => {
        axios.post('http://localhost:3000/api/addTodos', todo)
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log({ message: err.message, stack: err.stack })
            alert('could not add todo')
        })
        getTodos()
    }

    // const handleDelete = (e) => {
    //     axios.delete('http://localhost:3000/api/deleteTask')
    // }
        return (
            <div>
                <h3 className="heading"> Todo List </h3>
                    <div className="ui input input_container">
                        <input 
                        className="input"
                        placeholder="Todo"
                        type="text"
                        name="todo"
                        value={todo}
                        onChange={handleChange}
                        />
                    </div>
                    <button className="ui primary button basic input_submit" type="submit" onClick={handleSubmit}>
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
                                <div className="ui basic green button"> 
                                    Done
                                </div>
                                <div className="ui basic red button"> 
                                    Delete 
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