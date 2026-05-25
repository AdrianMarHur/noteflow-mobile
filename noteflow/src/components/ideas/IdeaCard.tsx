import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useColorScheme } from 'react-native';
import { IdeaNote } from '@/types';
import {
  colors,
  typography,
  spacing,
  borderRadius,
  shadows,
} from '@/constants/theme';

interface IdeaCardProps {
  idea: IdeaNote;
  onPress: () => void;
}

export default function IdeaCard({ idea, onPress }: IdeaCardProps) {
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
          borderTopColor: idea.color || colors.ideas.primary,
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
        {idea.title}
      </Text>
      <View style={styles.tagsContainer}>
        {idea.tags.map((tag) => (
          <View
            key={tag}
            style={[
              styles.tag,
              { backgroundColor: colors.ideas.light },
            ]}
          >
            <Text
              style={[styles.tagText, { color: themeColors.textPrimary }]}
            >
              {tag}
            </Text>
          </View>
        ))}
      </View>

      <Text style={[styles.date, { color: themeColors.textSecondary }]}>
        {formatDate(idea.createdAt)}
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
    borderTopWidth: 4,
  },
  title: {
    fontSize: typography.sizes.lg,
    fontWeight: typography.weights.semibold,
    marginBottom: spacing.sm,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: spacing.sm,
    marginTop: spacing.xs,
  },
  tag: {
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: borderRadius.full,
    marginRight: spacing.xs,
    marginBottom: spacing.xs,
  },
  tagText: {
    fontSize: typography.sizes.xs,
    fontWeight: typography.weights.medium,
  },
  date: {
    fontSize: typography.sizes.sm,
  },
});
