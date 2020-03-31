import React from 'react'
import { useAuth } from './context/auth';

import Application from './pages/Application';
import Login from './pages/Login';

function App() {
  const user: any = useAuth();

  return user.data
    ? <Application />
    : <Login />
}

export default App;