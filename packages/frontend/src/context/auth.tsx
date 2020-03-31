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

  const login = async (login: string, password: string) => {
    try {
      const data = await axios.post('http://localhost:3000/login', { login, password }, { withCredentials: true });
      setUserData(data);
    } catch (error) {
      const { data: { message } } = error.response;
      return message;
    }
  };

  const logout = async () => {
    const response = await axios.post('http://localhost:3000/logout', {}, { withCredentials: true });
    console.log('Response from logout', response);
    setUserData(null);
  };  

  return (
    <AuthContext.Provider 
      value={{ data: userData, login, logout }}
    >
      { props.children }
    </AuthContext.Provider>
  );
}

const useAuth = () => React.useContext(AuthContext);

export {
  AuthContext,
  AuthProvider, 
  useAuth
}
