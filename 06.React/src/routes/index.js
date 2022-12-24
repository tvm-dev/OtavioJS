import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from '../pages/Login';
import Page404 from '../pages/Page404';

export default function Routes2() {
  return (

    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/*" element={<Page404 />} />
    </Routes>

  );
}
