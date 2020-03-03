import React from 'react';
import ReactDOM from 'react-dom';

import Login from './pages/Login';
import './index.css';


ReactDOM.render(
  <Login />,
  document.getElementById('root')
);

if (process.env.NODE_ENV === 'development') {
  (module as any).hot.accept();
}
