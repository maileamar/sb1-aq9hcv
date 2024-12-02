import { supabase } from '../lib/supabase';
import { showSuccess, showError } from './toast';

export const signUpUser = async (email, password) => {
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) throw error;
    
    showSuccess('Check your email for the confirmation link!');
    return data;
  } catch (error) {
    showError(error.message);
    throw error;
  }
};

export const signInUser = async (email, password) => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;

    showSuccess('Successfully logged in!');
    return data;
  } catch (error) {
    showError(error.message);
    throw error;
  }
};

export const signOutUser = async () => {
  try {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    
    showSuccess('Successfully logged out!');
  } catch (error) {
    showError(error.message);
    throw error;
  }
};

export const getCurrentSession = async () => {
  const { data: { session } } = await supabase.auth.getSession();
  return session;
};

export const onAuthStateChange = (callback) => {
  return supabase.auth.onAuthStateChange((_event, session) => {
    callback(session?.user ?? null);
  });
};