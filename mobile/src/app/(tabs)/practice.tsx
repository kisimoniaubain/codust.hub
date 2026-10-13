import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import SectionHeader from '../../components/SectionHeader';
import { palette } from '../../lib/theme';

const challenges = [
  { title: 'Loops challenge', detail: 'Write a function that prints multiples of 3', difficulty: 'Easy' },
  { title: 'DOM exercise', detail: 'Update a card when the button is tapped', difficulty: 'Medium' },
  { title: 'Array interview drill', detail: 'Solve two-sum and rotate-array patterns', difficulty: 'Hard' },
];

export default function PracticeScreen() {
  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.container}>
      <SectionHeader title="Practice" subtitle="Daily" />
      {challenges.map((item) => (
        <View key={item.title} style={styles.card}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.detail}>{item.detail}</Text>
          <View style={styles.badgeRow}>
            <Text style={styles.badge}>{item.difficulty}</Text>
            <Text style={styles.badge}>+50 XP</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: palette.bg },
  container: { paddingHorizontal: 20, paddingTop: 64, paddingBottom: 32 },
  card: {
    backgroundColor: palette.surface,
    borderColor: palette.border,
    borderWidth: 1,
    borderRadius: 16,
    padding: 18,
    marginBottom: 14,
  },
  title: { color: palette.text, fontSize: 18, fontWeight: '700', marginBottom: 8 },
  detail: { color: palette.muted, lineHeight: 20 },
  badgeRow: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 12,
  },
  badge: {
    color: palette.primary,
    backgroundColor: 'rgba(0,219,231,0.08)',
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 8,
    fontSize: 12,
    fontWeight: '700',
  },
});
