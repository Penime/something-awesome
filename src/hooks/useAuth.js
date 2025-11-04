"use client";

import { useState, useEffect, createContext, useContext } from 'react';

// Mock user data
const mockUser = {
  uid: 'mock-user-id',
  email: 'user@example.com',
  displayName: 'Mock User',
};

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate checking for an authenticated user
    const timer = setTimeout(() => {
      // For this mock, we'll assume the user is logged in.
      setUser(mockUser);
      setLoading(false);
    }, 500); // Simulate a delay

    return () => clearTimeout(timer);
  }, []);

  const login = () => {
    setLoading(true);
    setTimeout(() => {
      setUser(mockUser);
      setLoading(false);
    }, 500);
  };

  const logout = () => {
    setLoading(true);
    setTimeout(() => {
      setUser(null);
      setLoading(false);
    }, 500);
  };

  const value = { user, loading, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  return useContext(AuthContext);
};
