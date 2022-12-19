import { supabase } from "../../api/supabase";

export const getCurrentSession = async () => {
  const {
    data: { session },
    error,
  } = await supabase.auth.getSession();

  if (error) {
    return null;
  }
  return session;
};

export const login = async ({ email, password }) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });
  if (error) {
    return Promise.reject(error);
  }
  return Promise.resolve(data);
};

export const register = async (body) => {
  const { email, password, ...rest } = body;
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        ...rest,
      },
    },
  });
  if (error) {
    return Promise.reject(error);
  }
  return Promise.resolve(data);
};

export const updateUser = async (body) => {
  const { email, password, ...rest } = body;
  const { data, error } = await supabase.auth.updateUser({
    email,
    data: {
      ...rest,
    },
  });
  if (error) {
    return Promise.reject(error);
  }
  return Promise.resolve(data);
};

export const logout = () => {
  return supabase.auth.signOut();
};
