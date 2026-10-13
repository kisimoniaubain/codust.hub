import { router } from 'expo-router';
import { Bell, ChevronRight, Sparkles } from 'lucide-react-native';
import React from 'react';
import { ScrollView, StyleSheet, Text, View, Pressable } from 'react-native';
import SectionHeader from '../../components/SectionHeader';
import { useAuth } from '../../context/AuthContext';
import { courses } from '../../lib/data';
import { palette } from '../../lib/theme';

export default function HomeScreen() {
  const { user } = useAuth();

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.container}>
      <View style={styles.topRow}>
        <View>
          <Text style={styles.greeting}>Good to see you</Text>
          <Text style={styles.name}>{user?.name ?? 'Learner'}</Text>
        </View>
        <Pressable style={styles.iconButton}>
          <Bell color={palette.primary} size={20} />
        </Pressable>
      </View>

      <View style={styles.heroCard}>
        <View style={styles.heroRow}>
          <View>
            <Text style={styles.heroLabel}>Progress</Text>
            <Text style={styles.heroValue}>{user?.xp ?? 0} XP</Text>
          </View>
          <Sparkles color={palette.primary} size={26} />
        </View>
        <Text style={styles.heroText}>Your learning streak is {user?.streak ?? 0} days. Keep pushing.</Text>
      </View>

      <SectionHeader title="Continue learning" subtitle="Resume" />
      <View style={styles.continueCard}>
        <Text style={styles.courseTitle}>Full-Stack Web Engineering</Text>
        <Text style={styles.courseMeta}>JavaScript & DOM • 3 lessons left</Text>
        <Pressable onPress={() => router.push('/course/full-stack-web-engineering')} style={styles.resumeButton}>
          <Text style={styles.resumeText}>Resume</Text>
          <ChevronRight color={palette.text} size={18} />
        </Pressable>
      </View>

      <SectionHeader title="Popular tracks" subtitle="Explore" />
      {courses.map((course) => (
        <Pressable key={course.id} onPress={() => router.push({ pathname: '/course/[id]', params: { id: course.id } })} style={styles.courseCard}>
          <View style={[styles.accentBar, { backgroundColor: course.accent }]} />
          <View style={styles.courseBody}>
            <Text style={styles.courseTag}>{course.category}</Text>
            <Text style={styles.courseTitle}>{course.title}</Text>
            <Text style={styles.courseMeta}>{course.level} • {course.lessons} lessons</Text>
            <Text style={styles.progressLabel}>{course.progress}% complete</Text>
            <View style={styles.progressTrack}>
              <View style={[styles.progressFill, { width: `${course.progress}%`, backgroundColor: course.accent }]} />
            </View>
          </View>
        </Pressable>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: palette.bg },
  container: { paddingHorizontal: 20, paddingTop: 24, paddingBottom: 32 },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  greeting: { color: palette.muted, fontSize: 13, textTransform: 'uppercase', letterSpacing: 1.2 },
  name: { color: palette.text, fontSize: 28, fontWeight: '800' },
  iconButton: {
    width: 42,
    height: 42,
    backgroundColor: palette.surface,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: palette.border,
  },
  heroCard: {
    backgroundColor: palette.surface,
    borderColor: palette.border,
    borderWidth: 1,
    borderRadius: 18,
    padding: 18,
    marginBottom: 22,
  },
  heroRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 },
  heroLabel: { color: palette.muted, fontSize: 12, textTransform: 'uppercase', letterSpacing: 1.2 },
  heroValue: { color: palette.text, fontSize: 28, fontWeight: '800' },
  heroText: { color: palette.muted, fontSize: 14 },
  continueCard: {
    backgroundColor: palette.surface,
    borderColor: palette.border,
    borderWidth: 1,
    borderRadius: 16,
    padding: 18,
    marginBottom: 22,
  },
  courseTag: {
    color: palette.primary,
    fontSize: 12,
    textTransform: 'uppercase',
    letterSpacing: 1.1,
    marginBottom: 6,
  },
  courseTitle: { color: palette.text, fontSize: 18, fontWeight: '700', marginBottom: 4 },
  courseMeta: { color: palette.muted, fontSize: 13, marginBottom: 14 },
  resumeButton: {
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: palette.primary,
    borderRadius: 12,
    paddingVertical: 12,
  },
  resumeText: { color: '#08353a', fontWeight: '700', marginRight: 8 },
  courseCard: {
    flexDirection: 'row',
    backgroundColor: palette.surface,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: palette.border,
    overflow: 'hidden',
    marginBottom: 16,
  },
  accentBar: { width: 8 },
  courseBody: { flex: 1, padding: 16 },
  progressLabel: { color: palette.primary, fontSize: 12, marginBottom: 8 },
  progressTrack: {
    height: 8,
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderRadius: 8,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: 8,
  },
});
