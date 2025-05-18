import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

  export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // Load auth user from localStorage on page reload
    useEffect(() => {
      const storedUser = localStorage.getItem('authUser');
      if (storedUser) {
          setUser(JSON.parse(storedUser));
      }
    }, []);

    const login = (userData) => {
      setUser(userData);
      localStorage.setItem('authUser', JSON.stringify(userData));
    };

    const logout = () => {
      setUser(null);
      localStorage.removeItem('authUser');
    };

    return (
      <AuthContext.Provider value={{ user, login, logout }}>
          {children}
      </AuthContext.Provider>
    );
  };

export const useAuth = () => useContext(AuthContext);
