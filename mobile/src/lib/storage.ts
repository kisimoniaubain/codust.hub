import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from 'expo-secure-store';

export type AppUser = {
  id: string;
  name: string;
  email: string;
  xp: number;
  streak: number;
  completedLessons: string[];
};

const SESSION_KEY = 'codust_session';
const USERS_KEY = 'codust_users';

export async function saveSession(user: AppUser) {
  await SecureStore.setItemAsync(SESSION_KEY, JSON.stringify(user));
}

export async function readSession(): Promise<AppUser | null> {
  try {
    const value = await SecureStore.getItemAsync(SESSION_KEY);
    return value ? (JSON.parse(value) as AppUser) : null;
  } catch {
    return null;
  }
}

export async function clearSession() {
  await SecureStore.deleteItemAsync(SESSION_KEY);
}

export async function upsertUserRecord(user: AppUser) {
  const current = await readUsers();
  const normalized: Record<string, AppUser> = current ?? {};
  normalized[user.email.toLowerCase()] = user;
  await AsyncStorage.setItem(USERS_KEY, JSON.stringify(normalized));
}

export async function readUsers(): Promise<Record<string, AppUser> | null> {
  try {
    const raw = await AsyncStorage.getItem(USERS_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export async function findUserByEmail(email: string) {
  const users = await readUsers();
  return users?.[email.toLowerCase()] ?? null;
}

export async function setDemoUsers() {
  const demoUsers: Record<string, AppUser> = {
    'demo@codust.hub': {
      id: 'demo-user',
      name: 'Demo Learner',
      email: 'demo@codust.hub',
      xp: 1450,
      streak: 7,
      completedLessons: ['html-essentials', 'css-layouts', 'python-basics'],
    },
  };

  await AsyncStorage.setItem(USERS_KEY, JSON.stringify(demoUsers));
}
