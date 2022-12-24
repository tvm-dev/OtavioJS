import React from 'react';
import { Routes, Navigate } from 'react-router-dom';
import MyRoute from './MyRoutes';

// import Login from '../pages/Login';
// import Page404 from '../pages/Page404';

export default function Routes2() {
  return (

    <Routes>
      <MyRoute path="/" element={<Navigate to="/" />} />
      <MyRoute path="/*" element={<Navigate to="Page404" />} />
    </Routes>

  );
}
