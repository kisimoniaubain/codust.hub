import { useState, useEffect } from 'react';

export function useAuth() {
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('codust_current_user') || 'null');
    } catch {
      return null;
    }
  });

  const login = (userData) => {
    localStorage.setItem('codust_current_user', JSON.stringify(userData));
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem('codust_current_user');
    setUser(null);
  };

  const signup = (userData) => {
    const users = JSON.parse(localStorage.getItem('codust_users') || '[]');
    users.push(userData);
    localStorage.setItem('codust_users', JSON.stringify(users));
    login(userData);
  };

  // Seed demo account
  useEffect(() => {
    const users = JSON.parse(localStorage.getItem('codust_users') || '[]');
    if (!users.find(u => u.email === 'demo@codust.hub')) {
      users.push({
        firstName: 'Demo', lastName: 'Coder',
        email: 'demo@codust.hub', password: 'Demo1234!',
        joinDate: new Date().toISOString(),
      });
      localStorage.setItem('codust_users', JSON.stringify(users));
    }
  }, []);

  return { user, login, logout, signup };
}
