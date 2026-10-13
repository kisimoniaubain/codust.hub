import { router } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, Text, View, Pressable } from 'react-native';
import SectionHeader from '../../components/SectionHeader';
import { courses } from '../../lib/data';
import { palette } from '../../lib/theme';

export default function CoursesScreen() {
  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.container}>
      <SectionHeader title="Courses" subtitle="Track" />

      {courses.map((course) => (
        <Pressable
          key={course.id}
          onPress={() => router.push({ pathname: '/course/[id]', params: { id: course.id } })}
          style={styles.card}
        >
          <View style={[styles.accent, { backgroundColor: course.accent }]} />
          <View style={styles.body}>
            <Text style={styles.category}>{course.category}</Text>
            <Text style={styles.title}>{course.title}</Text>
            <Text style={styles.description}>{course.description}</Text>
            <View style={styles.metaRow}>
              <Text style={styles.meta}>{course.level}</Text>
              <Text style={styles.meta}>{course.lessons} lessons</Text>
              <Text style={styles.meta}>{course.duration}</Text>
            </View>
          </View>
        </Pressable>
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
    borderRadius: 18,
    overflow: 'hidden',
    marginBottom: 16,
  },
  accent: { height: 8 },
  body: { padding: 18 },
  category: {
    color: palette.primary,
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1,
    textTransform: 'uppercase',
    marginBottom: 8,
  },
  title: { color: palette.text, fontSize: 18, fontWeight: '700', marginBottom: 6 },
  description: { color: palette.muted, lineHeight: 20, marginBottom: 12 },
  metaRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  meta: {
    color: palette.secondary,
    fontSize: 12,
    backgroundColor: 'rgba(116,245,255,0.08)',
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 8,
  },
});
