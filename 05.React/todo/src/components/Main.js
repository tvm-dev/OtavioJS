import React, { Component } from 'react';
import { FaPlus } from 'react-icons/fa'; // to Form
import { FaEdit, FaWindowClose } from 'react-icons/fa';
import './Main.css';

export default class Main extends Component {
  state = {
    newTask: '',
    tasks: [],
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { tasks } = this.state;
    let { newTask } = this.state;
    newTask = newTask.trim();

    if (tasks.indexOf(newTask) !== -1) return;

    const newTasks = [...tasks];

    this.setState({
      tasks: [...newTasks, newTask],
    });
  };

  inputChanged = (e) => {
    this.setState({
      newTask: e.target.value,
    });
  };

  handleEdit = (e, index) => {
    console.log('Edit', index);
  };

  handleDelete = (e, index) => {
    const { tasks } = this.state;
    const newTasks = [...tasks];
    newTasks.splice(index, 1);

    this.setState({
      tasks: [...newTasks],
    });
  };

  render() {
    const { newTask, tasks } = this.state;
    return (
      <div className="main">
        <h1>TODO List</h1>
        <form onSubmit={this.handleSubmit} action="#" className="form">
          <input
            onChange={this.inputChanged}
            type="text"
            value={newTask}
          />
          <button type="submit">
            <FaPlus />
          </button>

        </form>
        <ul className="tasks">
          {tasks.map((task, index) => (
            <li key={task}>
              {task}
              <span>
                <FaEdit
                  className="edit"
                  onClick={(e) => this.handleEdit(e, index)}
                />

                <FaWindowClose
                  onClick={(e) => this.handleDelete(e, index)}
                  className="delete"
                />
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
