import { router, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import PrimaryButton from '../../components/PrimaryButton';
import { useAuth } from '../../context/AuthContext';
import { lessonsByCourse } from '../../lib/data';
import { palette } from '../../lib/theme';

export default function LessonScreen() {
  const params = useLocalSearchParams<{ id: string }>();
  const { user, completeLesson } = useAuth();

  const lesson = Object.values(lessonsByCourse)
    .flat()
    .find((item) => item.id === params.id);

  if (!lesson) {
    return (
      <View style={styles.screen}>
        <Text style={styles.title}>Lesson not found</Text>
      </View>
    );
  }

  const isComplete = user?.completedLessons?.includes(lesson.id);

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.container}>
      <Text style={styles.kicker}>{lesson.type.toUpperCase()}</Text>
      <Text style={styles.title}>{lesson.title}</Text>
      <Text style={styles.meta}>{lesson.duration}</Text>

      <View style={styles.card}>
        <Text style={styles.paragraph}>
          In this lesson, you will focus on the core concepts behind the topic, learn the patterns that matter, and build a practical understanding you can carry into hands-on coding work.
        </Text>
        <Text style={styles.paragraph}>
          Keep your notes short, experiment with examples, and revisit the tasks until the concept feels natural. Real progress comes from consistent practice.
        </Text>
        <Text style={styles.code}>
          {`const lesson = "${lesson.title}";\nconsole.log("Keep learning", lesson);`}
        </Text>
      </View>

      <PrimaryButton
        label={isComplete ? 'Completed' : 'Mark lesson complete'}
        onPress={() => {
          completeLesson(lesson.id);
          router.back();
        }}
        variant={isComplete ? 'secondary' : 'primary'}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: palette.bg },
  container: { paddingHorizontal: 22, paddingTop: 24, paddingBottom: 32 },
  kicker: { color: palette.primary, fontWeight: '700', letterSpacing: 1.1, marginBottom: 8 },
  title: { color: palette.text, fontSize: 30, fontWeight: '800', marginBottom: 8 },
  meta: { color: palette.muted, marginBottom: 18 },
  card: {
    backgroundColor: palette.surface,
    padding: 18,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: palette.border,
    marginBottom: 20,
  },
  paragraph: { color: palette.text, fontSize: 16, lineHeight: 24, marginBottom: 12 },
  code: {
    backgroundColor: '#0b0d13',
    color: palette.secondary,
    fontSize: 13,
    lineHeight: 22,
    padding: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(116,245,255,0.12)',
  },
});
