import React, { Component } from 'react';
import { FaPlus } from 'react-icons/fa'; // to Form
import './Main.css';

export default class Main extends Component {
  state = {
    newTask: '',
  };

  inputChanged = (e) => {
    this.setState({
      newTask: e.target.value,
    });
  };

  render() {
    const { newTask } = this.state;
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
      </div>
    );
  }
}
