import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = React.createContext({});

function AuthProvider(props) {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const response: any = await axios('http://localhost:3000/me', { withCredentials: true });
        const { user } = response.data;
        
        setLoading(false);
        setUserData(user);
      } catch (err) {
        setLoading(false);
        setUserData(null);
      }
    }

    checkAuthentication();
  }, []);

  if (loading) {
    return null;
  }

  // TODO implement these function later
  const login = () => {} // make a login request
  const register = () => {} // register the user
  const logout = () => {} // clear the token in localStorage and the user data

  return (
    <AuthContext.Provider 
      value={{ data: userData, login, logout, register }}
    >
      { props.children }
    </AuthContext.Provider>
  );
}

const useAuth = () => React.useContext(AuthContext);

export {
  AuthProvider, 
  useAuth
}
