import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useColorScheme } from 'react-native';
import { ChecklistNote } from '@/types';
import {
  colors,
  typography,
  spacing,
  borderRadius,
  shadows,
} from '@/constants/theme';

interface TareaCardProps {
  checklist: ChecklistNote;
  onPress: () => void;
}

export default function TareaCard({ checklist, onPress }: TareaCardProps) {
  const isDark = useColorScheme() === 'dark';

  const themeColors = {
    background: isDark ? colors.surface.dark : colors.surface.light,
    textPrimary: isDark ? colors.text.primary.dark : colors.text.primary.light,
    textSecondary: isDark
      ? colors.text.secondary.dark
      : colors.text.secondary.light,
  };

  const completedItems = checklist.items.filter((i) => i.isCompleted).length;
  const totalItems = checklist.items.length;
  const progress = totalItems > 0 ? completedItems / totalItems : 0;

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
          borderLeftColor: colors.tareas.primary,
          ...shadows.md,
        },
      ]}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <Text
        style={[styles.title, { color: themeColors.textPrimary }]}
        numberOfLines={1}
      >
        {checklist.title}
      </Text>

      <Text style={[styles.counter, { color: themeColors.textSecondary }]}>
        {completedItems} de {totalItems} completadas
      </Text>
      <View
        style={[
          styles.progressBackground,
          {
            backgroundColor: isDark
              ? colors.border.dark
              : colors.border.light,
          },
        ]}
      >
        <View
          style={[
            styles.progressFill,
            {
              width: `${progress * 100}%`,
              minWidth: progress > 0 ? 4 : 0,
              backgroundColor:
                progress >= 0.5
                  ? colors.tareas.primary
                  : isDark
                  ? colors.tareas.light
                  : colors.tareas.dark,
            },
          ]}
        />
      </View>

      <Text style={[styles.date, { color: themeColors.textSecondary }]}>
        {formatDate(checklist.createdAt)}
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
  counter: {
    fontSize: typography.sizes.sm,
    marginBottom: spacing.sm,
  },
  progressBackground: {
    height: 6,
    borderRadius: borderRadius.full,
    marginBottom: spacing.sm,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: borderRadius.full,
  },
  date: {
    fontSize: typography.sizes.sm,
  },
});