import { useLocalSearchParams, router } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, Text, View, Pressable } from 'react-native';
import PrimaryButton from '../../components/PrimaryButton';
import { courses, lessonsByCourse } from '../../lib/data';
import { palette } from '../../lib/theme';

export default function CourseDetailScreen() {
  const params = useLocalSearchParams<{ id: string }>();
  const course = courses.find((item) => item.id === params.id) ?? courses[0];
  const lessons = lessonsByCourse[course.id] ?? [];

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.container}>
      <Text style={styles.category}>{course.category}</Text>
      <Text style={styles.title}>{course.title}</Text>
      <Text style={styles.description}>{course.description}</Text>

      <View style={styles.metaRow}>
        <Text style={styles.meta}>{course.level}</Text>
        <Text style={styles.meta}>{course.lessons} lessons</Text>
        <Text style={styles.meta}>{course.duration}</Text>
      </View>

      <PrimaryButton label="Start learning" onPress={() => router.push(`/lesson/${lessons[0]?.id ?? 'html-essentials'}`)} />

      <Text style={styles.sectionTitle}>Module outline</Text>
      {lessons.map((lesson) => (
        <Pressable
          key={lesson.id}
          style={styles.lessonCard}
          onPress={() => router.push({ pathname: '/lesson/[id]', params: { id: lesson.id } })}
        >
          <View style={styles.lessonDot} />
          <View style={styles.lessonBody}>
            <Text style={styles.lessonTitle}>{lesson.title}</Text>
            <Text style={styles.lessonMeta}>{lesson.duration} • {lesson.type}</Text>
          </View>
          <Text style={styles.lessonStatus}>{lesson.isCompleted ? 'Done' : 'Open'}</Text>
        </Pressable>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: palette.bg },
  container: { paddingHorizontal: 20, paddingTop: 24, paddingBottom: 32 },
  category: { marginBottom: 8, color: palette.primary, fontWeight: '700', letterSpacing: 1.1, textTransform: 'uppercase' },
  title: { color: palette.text, fontSize: 28, fontWeight: '800', marginBottom: 8 },
  description: { color: palette.muted, fontSize: 16, lineHeight: 24, marginBottom: 16 },
  metaRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginBottom: 18 },
  meta: {
    backgroundColor: 'rgba(116,245,255,0.08)',
    color: palette.primary,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 6,
    fontSize: 12,
    fontWeight: '700',
  },
  sectionTitle: { color: palette.text, fontSize: 20, fontWeight: '700', marginTop: 26, marginBottom: 14 },
  lessonCard: {
    backgroundColor: palette.surface,
    borderWidth: 1,
    borderColor: palette.border,
    borderRadius: 14,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  lessonDot: {
    width: 10,
    height: 10,
    borderRadius: 999,
    backgroundColor: palette.primary,
    marginRight: 10,
  },
  lessonBody: { flex: 1 },
  lessonTitle: { color: palette.text, fontSize: 16, fontWeight: '700' },
  lessonMeta: { color: palette.muted, marginTop: 4 },
  lessonStatus: { color: palette.secondary, fontWeight: '700', fontSize: 12 },
});
