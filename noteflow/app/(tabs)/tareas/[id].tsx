import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useNotesStore } from '@/store/notesStore';
import { useColorScheme } from 'react-native';
import { colors, typography, spacing } from '@/constants/theme';

export default function TareaDetailScreen() {
  const { id } = useLocalSearchParams();
  const isDark = useColorScheme() === 'dark';

  const themeColors = {
    background: isDark ? colors.background.dark : colors.background.light,
    textPrimary: isDark ? colors.text.primary.dark : colors.text.primary.light,
    textSecondary: isDark
      ? colors.text.secondary.dark
      : colors.text.secondary.light,
  };

  const checklist = useNotesStore((state) =>
    state.checklists.find((c) => c.id === String(id))
  );

  if (!checklist) {
    return (
      <View style={[styles.container, { backgroundColor: themeColors.background }]}>
        <Text style={{ color: themeColors.textSecondary }}>
          Tarea no encontrada
        </Text>
      </View>
    );
  }

  return (
    <View style={[styles.container, { backgroundColor: themeColors.background }]}>
      <Text style={[styles.title, { color: themeColors.textPrimary }]}>
        {checklist.title}
      </Text>
      <View style={styles.itemsContainer}>
        {checklist.items.map((item) => (
          <Text
            key={item.id}
            style={[styles.item, { color: themeColors.textSecondary }]}
          >
            {item.isCompleted ? '✅' : '⬜'} {item.text}
          </Text>
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
  itemsContainer: {
    flex: 1,
  },
  item: {
    fontSize: typography.sizes.md,
    marginBottom: spacing.xs,
  },
});