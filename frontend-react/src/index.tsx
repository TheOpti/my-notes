import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Login from './pages/Login';


ReactDOM.render(
  <Login />,
  document.getElementById('root')
);

if (process.env.NODE_ENV === 'development') {
  (module as any).hot.accept();
}
