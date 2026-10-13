import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { palette } from '../lib/theme';

export default function SectionHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <View style={styles.row}>
      <Text style={styles.title}>{title}</Text>
      {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  title: {
    color: palette.text,
    fontSize: 20,
    fontWeight: '700',
  },
  subtitle: {
    color: palette.primary,
    fontSize: 12,
    fontWeight: '700',
  },
});
