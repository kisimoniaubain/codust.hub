import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Alert } from 'react-native';
import { Link, router } from 'expo-router';
import { useAuth } from '../../context/AuthContext';
import PrimaryButton from '../../components/PrimaryButton';
import { palette } from '../../lib/theme';

export default function RegisterScreen() {
  const { signUp } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    setLoading(true);
    const result = await signUp(name, email, password);
    setLoading(false);

    if (result.ok) {
      router.replace('/(tabs)/home');
      return;
    }

    Alert.alert('Register failed', result.message ?? 'Please check your details.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.brand}>Codust.hub</Text>
      <Text style={styles.heading}>Create account</Text>

      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Full name"
        placeholderTextColor={palette.muted}
        style={styles.input}
      />
      <TextInput
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
        placeholder="Email"
        placeholderTextColor={palette.muted}
        style={styles.input}
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry
        placeholderTextColor={palette.muted}
        style={styles.input}
      />

      <PrimaryButton label={loading ? 'Creating account...' : 'Register'} onPress={handleRegister} disabled={loading} />

      <View style={styles.footerRow}>
        <Text style={styles.footerText}>Already have an account?</Text>
        <Link href="/(auth)/login" style={styles.linkText}>Sign in</Link>
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
    textAlign: 'center',
    color: palette.primary,
    fontSize: 32,
    fontWeight: '800',
    marginBottom: 18,
  },
  heading: {
    color: palette.text,
    fontSize: 30,
    fontWeight: '800',
    marginBottom: 24,
  },
  input: {
    backgroundColor: palette.surface,
    borderWidth: 1,
    borderColor: palette.border,
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 14,
    fontSize: 16,
    color: palette.text,
    marginBottom: 16,
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 6,
    marginTop: 18,
  },
  footerText: {
    color: palette.muted,
  },
  linkText: {
    color: palette.primary,
    fontWeight: '700',
  },
});
