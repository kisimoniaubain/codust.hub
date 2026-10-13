import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { apiRequest } from '../lib/api';
import { AppUser, clearSession, findUserByEmail, readSession, saveSession, setDemoUsers, upsertUserRecord } from '../lib/storage';

type AuthContextValue = {
  user: AppUser | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<{ ok: boolean; message?: string }>;
  signUp: (name: string, email: string, password: string) => Promise<{ ok: boolean; message?: string }>;
  signOut: () => Promise<void>;
  completeLesson: (lessonId: string) => void;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AppUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    async function bootstrap() {
      await setDemoUsers();
      const stored = await readSession();
      if (active) {
        setUser(stored ?? null);
        setLoading(false);
      }
    }

    bootstrap();
    return () => {
      active = false;
    };
  }, []);

  const signIn = async (email: string, password: string) => {
    const normalizedEmail = email.trim();
    const normalizedPassword = password.trim();

    if (!normalizedEmail || !normalizedPassword) {
      return { ok: false, message: 'Please provide both email and password.' };
    }

    try {
      const remote = await apiRequest<{ success?: boolean; token?: string; user?: AppUser }>('/api/auth/login', {
        method: 'POST',
        body: JSON.stringify({ email: normalizedEmail, password: normalizedPassword }),
      });

      if (remote?.user) {
        await saveSession(remote.user);
        setUser(remote.user);
        return { ok: true };
      }
    } catch {
      // Fallback to local demo auth below.
    }

    const demoUser = await findUserByEmail(normalizedEmail);
    if (demoUser && normalizedPassword === 'demo123') {
      await saveSession(demoUser);
      setUser(demoUser);
      return { ok: true };
    }

    if (normalizedEmail.toLowerCase() === 'demo@codust.hub' && normalizedPassword === 'demo123') {
      const seededUser: AppUser = {
        id: 'demo-user',
        name: 'Demo Learner',
        email: 'demo@codust.hub',
        xp: 1450,
        streak: 7,
        completedLessons: ['html-essentials', 'css-layouts', 'python-basics'],
      };
      await upsertUserRecord(seededUser);
      await saveSession(seededUser);
      setUser(seededUser);
      return { ok: true };
    }

    return { ok: false, message: 'Invalid email or password. Try demo@codust.hub / demo123' };
  };

  const signUp = async (name: string, email: string, password: string) => {
    const normalizedName = name.trim();
    const normalizedEmail = email.trim();
    const normalizedPassword = password.trim();

    if (!normalizedName || !normalizedEmail || !normalizedPassword) {
      return { ok: false, message: 'Please complete all fields.' };
    }

    if (normalizedPassword.length < 6) {
      return { ok: false, message: 'Password should be at least 6 characters.' };
    }

    try {
      const remote = await apiRequest<{ success?: boolean; user?: AppUser }>('/api/auth/register', {
        method: 'POST',
        body: JSON.stringify({ name: normalizedName, email: normalizedEmail, password: normalizedPassword }),
      });

      if (remote?.user) {
        await saveSession(remote.user);
        setUser(remote.user);
        return { ok: true };
      }
    } catch {
      // Fallback to local registration below.
    }

    const exists = await findUserByEmail(normalizedEmail);
    if (exists) {
      return { ok: false, message: 'An account already exists with that email.' };
    }

    const created: AppUser = {
      id: `user-${Date.now()}`,
      name: normalizedName,
      email: normalizedEmail,
      xp: 120,
      streak: 1,
      completedLessons: [],
    };

    await upsertUserRecord(created);
    await saveSession(created);
    setUser(created);
    return { ok: true };
  };

  const signOut = async () => {
    await clearSession();
    setUser(null);
  };

  const completeLesson = (lessonId: string) => {
    setUser((current) => {
      if (!current) return current;
      const nextCompleted = current.completedLessons.includes(lessonId)
        ? current.completedLessons
        : [...current.completedLessons, lessonId];

      const updated = {
        ...current,
        xp: current.xp + 50,
        completedLessons: nextCompleted,
      };

      saveSession(updated);
      return updated;
    });
  };

  const value = useMemo<AuthContextValue>(
    () => ({ user, loading, signIn, signUp, signOut, completeLesson }),
    [user, loading],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used inside AuthProvider');
  return context;
}
