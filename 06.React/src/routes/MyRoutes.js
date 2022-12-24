import React from 'react';
import { Navigate, Router, Routes } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function MyRoute({ component: Component, isClosed, ...rest }) {
  const isLoggedIn = false;

  if (isClosed && !isLoggedIn) {
    return (
      <Router>
        <Routes>
          <Navigate to={{ pathname: '/login', state: { prevPath: rest.location.pathname } }} />
        </Routes>
      </Router>
    );
  }

  return (

  // eslint-disable-next-line react/jsx-props-no-spreading
    <Navigate {...rest} component={Component} />

  );
}

MyRoute.defaultProps = {
  isClosed: false,
};

MyRoute.propTypes = {
  // eslint-disable-next-line react/require-default-props
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  isClosed: PropTypes.bool,
};
