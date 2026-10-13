import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable, Alert } from 'react-native';
import { Link, router } from 'expo-router';
import { useAuth } from '../../context/AuthContext';
import { palette } from '../../lib/theme';
import PrimaryButton from '../../components/PrimaryButton';

export default function LoginScreen() {
  const { signIn } = useAuth();
  const [email, setEmail] = useState('demo@codust.hub');
  const [password, setPassword] = useState('demo123');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    const result = await signIn(email, password);
    setLoading(false);

    if (result.ok) {
      router.replace('/(tabs)/home');
      return;
    }

    Alert.alert('Login failed', result.message ?? 'Please try again.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.brand}>Codust.hub</Text>
      <Text style={styles.heading}>Welcome back</Text>
      <Text style={styles.helper}>Use the demo account or your own email.</Text>

      <TextInput
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
        placeholder="Email or username"
        placeholderTextColor={palette.muted}
        style={styles.input}
      />

      <View style={styles.passwordWrap}>
        <TextInput
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
          placeholder="Password"
          placeholderTextColor={palette.muted}
          style={[styles.input, { flex: 1, marginBottom: 0 }]}
        />
        <Pressable onPress={() => setShowPassword((value) => !value)} style={styles.toggle}>
          <Text style={styles.toggleText}>{showPassword ? 'Hide' : 'Show'}</Text>
        </Pressable>
      </View>

      <PrimaryButton label={loading ? 'Signing in...' : 'Login'} onPress={handleLogin} disabled={loading} />

      <View style={styles.footerRow}>
        <Text style={styles.footerText}>Need an account?</Text>
        <Link href="/(auth)/register" style={styles.linkText}>Create one</Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.bg,
    paddingHorizontal: 24,
    paddingTop: 90,
  },
  brand: {
    color: palette.primary,
    fontSize: 32,
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 20,
  },
  heading: {
    color: palette.text,
    fontSize: 30,
    fontWeight: '800',
    marginBottom: 8,
  },
  helper: {
    color: palette.muted,
    marginBottom: 28,
  },
  input: {
    backgroundColor: palette.surface,
    color: palette.text,
    borderWidth: 1,
    borderColor: palette.border,
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 14,
    fontSize: 16,
    marginBottom: 16,
  },
  passwordWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 14,
  },
  toggle: {
    paddingHorizontal: 10,
    paddingVertical: 12,
    borderRadius: 10,
    backgroundColor: palette.surface,
    borderWidth: 1,
    borderColor: palette.border,
  },
  toggleText: {
    color: palette.primary,
    fontWeight: '700',
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 18,
    gap: 6,
  },
  footerText: {
    color: palette.muted,
  },
  linkText: {
    color: palette.primary,
    fontWeight: '700',
  },
});
