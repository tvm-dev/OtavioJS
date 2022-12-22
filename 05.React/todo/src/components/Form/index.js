import React from 'react';
import PropTypes from 'prop-types';
import { FaPlus } from 'react-icons/fa'; // to Form
import './Form.css';

export default function Form({ handleSubmit, handleChange, newTask }) {
  return (
    <form onSubmit={handleSubmit} action="#" className="form">
      <input
        onChange={handleChange}
        type="text"
        value={newTask}
      />
      <button type="submit">
        <FaPlus />
      </button>

    </form>
  );
}
Form.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  newTask: PropTypes.string.isRequired,
};
