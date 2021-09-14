import React, { useState } from 'react'
import axios from 'axios'
import './css/TaskList.css'

function TaskList() {
   const [state, setState] = useState({todo: "", description: ""})

   const handleChange = (e) => {
        const value = e.target.value
        setState({
            ...state,
            [e.target.name]: value
        })
    }

    const handleSubmit = (e) => {
        axios.post('http://localhost:3000/api/addTask', state)
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
                        value={state.todo}
                        onChange={handleChange}
                        />
                        <input 
                        className="input"
                        placeholder="Description"
                        type="text"
                        name="description"
                        value={state.description}
                        onChange={handleChange}
                        />
                    </div>
                    <button className="ui primary button basic input_submit" type="submit" onClick={handleSubmit}>
                        Submit 
                    </button>
                <hr />
                <div className="ui cards">
                    <div className="card">
                        <div className="content">
                            <div className="meta">
                                
                            </div>
                        <div className="extra content">
                            <div className="ui two buttons">
                                <div className="ui basic green button"> 
                                    Done
                                </div>
                                <div className="ui basic red button" onDelete={handleDelete}> 
                                    Delete 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         </div> 
        )
    }

export default TaskList