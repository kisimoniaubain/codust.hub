import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Link } from 'expo-router';
import { palette } from '../../lib/theme';
import PrimaryButton from '../../components/PrimaryButton';

export default function WelcomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.brand}>Codust.hub</Text>
      <Text style={styles.title}>Learn to code. Build real projects.</Text>
      <Text style={styles.subtitle}>
        Structured lessons, guided practice, and a clear path from beginner fundamentals to professional-ready skills.
      </Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Why Codust Hub?</Text>
        <Text style={styles.listItem}>• Curated learning tracks</Text>
        <Text style={styles.listItem}>• Project-based learning</Text>
        <Text style={styles.listItem}>• Progress tracking and XP</Text>
        <Text style={styles.listItem}>• Practice, quizzes, and milestones</Text>
      </View>

      <View style={styles.actions}>
        <Link href="/(auth)/login" asChild>
          <PrimaryButton label="Login" onPress={() => undefined} />
        </Link>
        <Link href="/(auth)/register" asChild>
          <PrimaryButton label="Create account" variant="secondary" onPress={() => undefined} />
        </Link>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: palette.bg,
    paddingHorizontal: 24,
    paddingTop: 80,
    paddingBottom: 36,
  },
  brand: {
    color: palette.primary,
    fontSize: 34,
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 20,
  },
  title: {
    color: palette.text,
    fontSize: 28,
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 12,
  },
  subtitle: {
    color: palette.muted,
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    marginBottom: 28,
  },
  card: {
    backgroundColor: palette.surface,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: palette.border,
    padding: 22,
    marginBottom: 24,
  },
  cardTitle: {
    color: palette.text,
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 12,
  },
  listItem: {
    color: palette.muted,
    fontSize: 15,
    lineHeight: 28,
  },
  actions: {
    gap: 12,
  },
});
