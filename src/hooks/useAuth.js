import { createContext, createElement, useContext, useEffect, useMemo, useState } from 'react';
import { getSupabaseClient, isSupabaseConfigured } from '../lib/supabase.js';

const AuthContext = createContext(null);

function mapUser(authUser) {
  if (!authUser) return null;

  const metadata = authUser.user_metadata || {};
  return {
    id: authUser.id,
    firstName: metadata.first_name || metadata.full_name?.split(' ')[0] || '',
    lastName: metadata.last_name || metadata.full_name?.split(' ').slice(1).join(' ') || '',
    email: authUser.email || '',
    joinDate: authUser.created_at,
    avatarPath: metadata.avatar_path || null,
  };
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isSupabaseConfigured) {
      setLoading(false);
      return undefined;
    }

    const client = getSupabaseClient();
    let active = true;
    const { data: { subscription } } = client.auth.onAuthStateChange((_event, session) => {
      if (active) setUser(mapUser(session?.user));
    });

    client.auth.getSession()
      .then(({ data, error }) => {
        if (error) throw error;
        if (active) setUser(mapUser(data.session?.user));
      })
      .catch((error) => {
        console.error('Could not restore the Supabase session:', error);
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
      subscription.unsubscribe();
    };
  }, []);

  const value = useMemo(() => ({
    user,
    loading,
    isConfigured: isSupabaseConfigured,
    async login(email, password) {
      const { error } = await getSupabaseClient().auth.signInWithPassword({ email, password });
      if (error) throw error;
    },
    async signup({ firstName, lastName, email, password }) {
      const { data, error } = await getSupabaseClient().auth.signUp({
        email,
        password,
        options: {
          data: { first_name: firstName, last_name: lastName },
          emailRedirectTo: window.location.origin,
        },
      });
      if (error) throw error;
      return { needsEmailConfirmation: !data.session };
    },
    async loginWithGoogle() {
      const { error } = await getSupabaseClient().auth.signInWithOAuth({
        provider: 'google',
        options: { redirectTo: window.location.origin },
      });
      if (error) throw error;
    },
    async resetPassword(email) {
      const { error } = await getSupabaseClient().auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/login?reset=1`,
      });
      if (error) throw error;
    },
    async updatePassword(password) {
      const { error } = await getSupabaseClient().auth.updateUser({ password });
      if (error) throw error;
    },
    async logout() {
      const { error } = await getSupabaseClient().auth.signOut();
      if (error) throw error;
    },
  }), [user, loading]);

  return createElement(AuthContext.Provider, { value }, children);
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used inside AuthProvider');
  return context;
}
