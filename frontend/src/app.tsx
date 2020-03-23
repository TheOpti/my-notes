import React from 'react'
import { useAuth } from './context/auth'

import Application from './pages/Application';
import Login from './pages/Login';

function App() {
  const user: any = useAuth();

  console.log('App, user ', user);

  if (user.data) {
    return <Application />;
  }

  return <Login />
}

export default App;