import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useNotesStore } from '@/store/notesStore';
import { useColorScheme } from 'react-native';
import { colors, typography, spacing, borderRadius } from '@/constants/theme';

export default function IdeaDetailScreen() {
  const { id } = useLocalSearchParams();
  const isDark = useColorScheme() === 'dark';

  const themeColors = {
    background: isDark ? colors.background.dark : colors.background.light,
    textPrimary: isDark ? colors.text.primary.dark : colors.text.primary.light,
    textSecondary: isDark
      ? colors.text.secondary.dark
      : colors.text.secondary.light,
  };

  const idea = useNotesStore((state) =>
    state.ideas.find((i) => i.id === String(id))
  );

  if (!idea) {
    return (
      <View style={[styles.container, { backgroundColor: themeColors.background }]}>
        <Text style={{ color: themeColors.textSecondary }}>
          Idea no encontrada
        </Text>
      </View>
    );
  }

  return (
    <View style={[styles.container, { backgroundColor: themeColors.background }]}>
      <Text style={[styles.title, { color: themeColors.textPrimary }]}>
        {idea.title}
      </Text>
      <View style={styles.tagsContainer}>
        {idea.tags.map((tag) => (
          <View
            key={tag}
            style={[
              styles.tag,
              { backgroundColor: idea.color || colors.ideas.light },
            ]}
          >
            <Text style={[styles.tagText, { color: themeColors.textPrimary }]}>
              {tag}
            </Text>
          </View>
        ))}
      </View>
    </View>
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
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tag: {
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: borderRadius.full,
    marginRight: spacing.xs,
    marginBottom: spacing.xs,
  },
  tagText: {
    fontSize: typography.sizes.sm,
    fontWeight: typography.weights.medium,
  },
});