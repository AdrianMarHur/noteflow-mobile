import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useColorScheme } from 'react-native';
import { Note } from '@/types';
import {
  colors,
  typography,
  spacing,
  borderRadius,
  shadows,
} from '@/constants/theme';

interface NoteCardProps {
  note: Note;
  onPress: () => void;
}

export default function NoteCard({ note, onPress }: NoteCardProps) {
  const isDark = useColorScheme() === 'dark';

  const themeColors = {
    background: isDark ? colors.surface.dark : colors.surface.light,
    textPrimary: isDark ? colors.text.primary.dark : colors.text.primary.light,
    textSecondary: isDark
      ? colors.text.secondary.dark
      : colors.text.secondary.light,
  };

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('es-ES', {
      day: '2-digit',
      month: 'short',
    });
  };

  return (
    <TouchableOpacity
      style={[
        styles.card,
        {
          backgroundColor: themeColors.background,
          borderLeftColor: colors.notas.primary,
          ...shadows.md,
        },
      ]}
      activeOpacity={0.8} // 🔥 mejora UX
      onPress={onPress}
    >
      <Text
        style={[styles.title, { color: themeColors.textPrimary }]}
        numberOfLines={1}
      >
        {note.title}
      </Text>

      <Text
        style={[styles.content, { color: themeColors.textSecondary }]}
        numberOfLines={2}
      >
        {note.content}
      </Text>

      <Text style={[styles.date, { color: themeColors.textSecondary }]}>
        {formatDate(note.createdAt)}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: borderRadius.md,
    padding: spacing.lg,
    marginHorizontal: spacing.lg,
    marginVertical: spacing.sm,
    borderLeftWidth: 4,
  },
  title: {
    fontSize: typography.sizes.lg,
    fontWeight: typography.weights.semibold,
    marginBottom: spacing.sm,
  },
  content: {
    fontSize: typography.sizes.md,
    lineHeight: 22,
    marginBottom: spacing.sm,
  },
  date: {
    fontSize: typography.sizes.sm,
  },
});