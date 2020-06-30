/* eslint-disable class-methods-use-this */
import React from 'react';
import Task from './Task.jsx'
import CreateTaskInput from './CreateTaskInput.jsx';

class TasksList extends React.Component {
  state = {
    tasks: [
      { text: 'Buy milk', done: false, id: 1 },
      { text: 'Pick up Tom from airport', done: false, id: 2 },
      { text: 'Visit party', done: false, id: 3 },
      { text: 'Visit doctor', done: true, id: 4 },
      { text: 'Buy meat', done: true, id: 5 },
    ],
  };

  handleCreate = (text) => {
     this.setState({tasks: this.state.tasks.push({text, done: false, id: Math.random()})});
     console.log(this.state.tasks);
  }
   


  render() {
    return (
      <div className='todo-list'>
        <CreateTaskInput onCreate={this.handleCreate}/>
        <ul className='list'>
          {this.state.tasks.map((task) => (
            <Task key={task.id} {...task} />
          ))}
        </ul>
      </div>
    );
  }
    
}

export default TasksList;