import { View, Text, StyleSheet } from 'react-native';
import { useColorScheme } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import { useRouter } from 'expo-router';
import { useNotesStore } from '@/store/notesStore';
import TareaCard from '@/components/tareas/TareaCard';
import { colors, typography, spacing } from '@/constants/theme';
import { ChecklistNote } from '@/types';

export default function TareasScreen() {
  const isDark = useColorScheme() === 'dark';
  const checklists = useNotesStore((state) => state.checklists);
  const router = useRouter();

  const themeColors = {
    background: isDark ? colors.background.dark : colors.background.light,
    textSecondary: isDark
      ? colors.text.secondary.dark
      : colors.text.secondary.light,
  };

  const handlePress = (checklist: ChecklistNote) => {
    router.push(`/tareas/${checklist.id}`);
  };

  if (checklists.length === 0) {
    return (
      <View
        style={[styles.emptyContainer, { backgroundColor: themeColors.background }]}
      >
        <Text style={[styles.emptyText, { color: themeColors.textSecondary }]}>
          No hay tareas todavía
        </Text>
        <Text style={[styles.emptySubtext, { color: themeColors.textSecondary }]}>
          Pulsa + para crear tu primera lista
        </Text>
      </View>
    );
  }

  return (
    <View style={[styles.container, { backgroundColor: themeColors.background }]}>
      <FlashList
        data={checklists}
        renderItem={({ item }) => (
          <TareaCard
            checklist={item}
            onPress={() => handlePress(item)}
          />
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 16 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyText: {
    fontSize: typography.sizes.lg,
    fontWeight: typography.weights.semibold,
    marginBottom: spacing.sm,
  },
  emptySubtext: {
    fontSize: typography.sizes.md,
  },
});