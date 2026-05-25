import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useNotesStore } from '@/store/notesStore';
import { useColorScheme } from 'react-native';
import { colors, typography, spacing } from '@/constants/theme';

export default function NotaDetailScreen() {
  const { id } = useLocalSearchParams();
  const isDark = useColorScheme() === 'dark';

  const themeColors = {
    background: isDark ? colors.background.dark : colors.background.light,
    textPrimary: isDark ? colors.text.primary.dark : colors.text.primary.light,
    textSecondary: isDark
      ? colors.text.secondary.dark
      : colors.text.secondary.light,
  };

  const note = useNotesStore((state) =>
    state.notes.find((n) => n.id === String(id))
  );

  if (!note) {
    return (
      <View style={[styles.container, { backgroundColor: themeColors.background }]}>
        <Text style={{ color: themeColors.textSecondary }}>
          Nota no encontrada
        </Text>
      </View>
    );
  }

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: themeColors.background }]}
      contentContainerStyle={{ paddingBottom: spacing.xl }}
    >
      <Text style={[styles.title, { color: themeColors.textPrimary }]}>
        {note.title}
      </Text>
      <View style={styles.contentContainer}>
        <Text style={[styles.content, { color: themeColors.textSecondary }]}>
          {note.content}
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.lg,
  },
  title: {
    fontSize: typography.sizes.xxl,
    fontWeight: typography.weights.bold,
    marginBottom: spacing.md,
  },
  contentContainer: {
    flex: 1,
  },
  content: {
    fontSize: typography.sizes.md,
    lineHeight: 24,
  },
});