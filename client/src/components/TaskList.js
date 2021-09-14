import React from 'react'
import './css/TaskList.css'


class TaskList extends React.Component {
    state = {
        task: ""
    }

    onDelete = () => {
        console.log('Deleted')
    }

    render() {
        return (
            <div>
                <h3 className="heading"> Task List </h3>
                <div className="ui input input_container">
                    <input 
                    className="input"
                    placeholder="Your Tasks"
                    value={this.state.task}
                    onChange={(e) => {this.setState({task: e.target.value})}}
                    />
                </div>
                <button className="ui primary button basic input_submit">
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
                                    Complete Task 
                                </div>
                                <div className="ui basic red button" onClick={()=>this.onDelete()}> 
                                    Delete Task 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         </div> 
        )
    }
}

export default TaskList