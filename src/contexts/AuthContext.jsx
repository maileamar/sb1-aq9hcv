import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCurrentSession, onAuthStateChange, signInUser, signUpUser, signOutUser } from '../utils/auth';

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    getCurrentSession().then((session) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    const { data: { subscription } } = onAuthStateChange((user) => {
      setUser(user);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const signUp = async (email, password) => {
    const data = await signUpUser(email, password);
    return data;
  };

  const signIn = async (email, password) => {
    const data = await signInUser(email, password);
    navigate('/client/dashboard');
    return data;
  };

  const signOut = async () => {
    await signOutUser();
    navigate('/');
  };

  const value = {
    signUp,
    signIn,
    signOut,
    user,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;