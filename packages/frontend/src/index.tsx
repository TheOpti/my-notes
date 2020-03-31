import React from 'react';
import ReactDOM from 'react-dom';

import { AuthProvider } from './context/auth';
import App from './app';

import './fonts.css';
import './index.css';


ReactDOM.render(
  <AuthProvider>
    <App />
  </AuthProvider>
  ,
  document.getElementById('root')
);

if (process.env.NODE_ENV === 'development') {
  (module as any).hot.accept();
}
