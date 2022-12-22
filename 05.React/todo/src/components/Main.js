import React, { Component } from 'react';
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
    return (
      <div className="main">
        <h1> TODO List</h1>
        <form action="#">
          <input onChange={this.inputChanged} type="text" />
          <button type="submit">Send</button>

        </form>
      </div>
    );
  }
}
