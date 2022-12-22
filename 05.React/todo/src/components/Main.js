import React, { Component } from 'react';
import { FaPlus } from 'react-icons/fa'; // to Form
import { FaEdit, FaWindowClose } from 'react-icons/fa';
import './Main.css';

export default class Main extends Component {
  state = {
    newTask: '',
    tasks: [
      'Drink coffee',
      'Drink water',
      'Study React Redux',
    ],
  };

  inputChanged = (e) => {
    this.setState({
      newTask: e.target.value,
    });
  };

  render() {
    const { newTask, tasks } = this.state;
    return (
      <div className="main">
        <h1>TODO List</h1>
        <form action="#" className="form">
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
          {tasks.map((task) => (
            <li key={task}>
              {task}
              <div>
                <FaEdit className="edit" />
                <FaWindowClose className="delete" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
