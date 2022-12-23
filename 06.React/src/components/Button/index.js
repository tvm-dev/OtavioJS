import React from 'react';
import PropTypes from 'prop-types'; // ES6
import './style.css';

function Button({ children }) {
  return <button type="submit" className="btn">{ children }</button>;
}
Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Button;
