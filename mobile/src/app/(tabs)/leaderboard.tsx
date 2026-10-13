import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { leaderboardSeed } from '../../lib/data';
import { palette } from '../../lib/theme';

export default function LeaderboardScreen() {
  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Leaderboard</Text>
      {leaderboardSeed.map((entry, index) => (
        <View key={entry.id} style={styles.row}>
          <View style={styles.rankWrap}>
            <Text style={styles.rank}>#{index + 1}</Text>
          </View>
          <View style={styles.userBlock}>
            <Text style={styles.name}>{entry.name}</Text>
            <Text style={styles.level}>Level {entry.level}</Text>
          </View>
          <Text style={styles.xp}>{entry.xp} XP</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: palette.bg },
  container: { paddingHorizontal: 20, paddingTop: 24, paddingBottom: 40 },
  heading: { color: palette.text, fontSize: 28, fontWeight: '800', marginBottom: 18 },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: palette.surface,
    borderWidth: 1,
    borderColor: palette.border,
    borderRadius: 16,
    padding: 14,
    marginBottom: 12,
  },
  rankWrap: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: 'rgba(0,219,231,0.08)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rank: { color: palette.primary, fontWeight: '700' },
  userBlock: { flex: 1, marginLeft: 12 },
  name: { color: palette.text, fontSize: 16, fontWeight: '700' },
  level: { color: palette.muted, fontSize: 12 },
  xp: { color: palette.primary, fontSize: 14, fontWeight: '700' },
});
