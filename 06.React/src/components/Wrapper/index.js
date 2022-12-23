import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

function Wrapper({ children }) {
  return <main className="wrapper">{children}</main>;
}

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Wrapper;
