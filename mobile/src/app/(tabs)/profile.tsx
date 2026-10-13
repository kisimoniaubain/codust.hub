import { router } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, Text, View, Pressable } from 'react-native';
import { useAuth } from '../../context/AuthContext';
import { palette } from '../../lib/theme';
import PrimaryButton from '../../components/PrimaryButton';

export default function ProfileScreen() {
  const { user, signOut } = useAuth();

  const initials = user?.name
    ?.split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('')
    .toUpperCase() ?? 'CL';

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.container}>
      <View style={styles.avatar}>{initials}</View>
      <Text style={styles.name}>{user?.name ?? 'Codust Learner'}</Text>
      <Text style={styles.email}>{user?.email ?? 'learner@codust.hub'}</Text>

      <View style={styles.statsRow}>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>{user?.xp ?? 0}</Text>
          <Text style={styles.statLabel}>XP</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>{user?.streak ?? 0}</Text>
          <Text style={styles.statLabel}>Streak</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>{user?.completedLessons?.length ?? 0}</Text>
          <Text style={styles.statLabel}>Lessons</Text>
        </View>
      </View>

      <Pressable style={styles.card} onPress={() => router.push('/(tabs)/courses')}>
        <Text style={styles.cardTitle}>Learning roadmap</Text>
        <Text style={styles.cardText}>Review your upcoming modules and continue from where you left off.</Text>
      </Pressable>

      <PrimaryButton label="Log out" variant="secondary" onPress={async () => { await signOut(); router.replace('/(auth)/welcome'); }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: palette.bg },
  container: { paddingHorizontal: 20, paddingTop: 24, paddingBottom: 36, alignItems: 'center' },
  avatar: {
    width: 88,
    height: 88,
    borderRadius: 44,
    backgroundColor: palette.primary,
    color: '#042d31',
    fontSize: 28,
    fontWeight: '800',
    textAlign: 'center',
    lineHeight: 88,
    marginBottom: 16,
  },
  name: { color: palette.text, fontSize: 24, fontWeight: '800' },
  email: { color: palette.muted, marginBottom: 24 },
  statsRow: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  statBox: {
    flex: 1,
    backgroundColor: palette.surface,
    borderColor: palette.border,
    borderWidth: 1,
    borderRadius: 16,
    paddingVertical: 16,
    alignItems: 'center',
    marginHorizontal: 6,
  },
  statValue: { color: palette.text, fontSize: 22, fontWeight: '800' },
  statLabel: { color: palette.muted, fontSize: 12 },
  card: {
    width: '100%',
    backgroundColor: palette.surface,
    borderColor: palette.border,
    borderWidth: 1,
    borderRadius: 16,
    padding: 18,
    marginBottom: 18,
  },
  cardTitle: { color: palette.text, fontSize: 18, fontWeight: '700', marginBottom: 8 },
  cardText: { color: palette.muted, lineHeight: 20 },
});
