import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import { useColorScheme } from 'react-native';
import { z } from 'zod';
import { useNotesStore } from '@/store/notesStore';
import { colors, typography, spacing, borderRadius } from '@/constants/theme';
import { Note, IdeaNote, ChecklistNote, ChecklistItem } from '@/types';

const noteSchema = z.object({
  title: z.string().min(3, 'El título debe tener al menos 3 caracteres'),
  content: z.string().min(1, 'El contenido no puede estar vacío'),
});

const ideaSchema = z.object({
  title: z.string().min(3, 'El título debe tener al menos 3 caracteres'),
  tags: z.string().min(1, 'Añade al menos una etiqueta'),
});

const checklistSchema = z.object({
  title: z.string().min(3, 'El título debe tener al menos 3 caracteres'),
});

type NoteType = 'nota' | 'idea' | 'tarea';

const IDEA_COLORS = [
  colors.notas.primary,
  colors.ideas.primary,
  colors.tareas.primary,
  '#E91E63',
  '#9C27B0',
  '#00BCD4',
];

export default function NuevaNota() {
  const router = useRouter();
  const isDark = useColorScheme() === 'dark';
  const { addNote, addIdea, addChecklist } = useNotesStore();

  const [type, setType] = useState<NoteType>('nota');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');
  const [selectedColor, setSelectedColor] = useState(IDEA_COLORS[1]);
  const [newItem, setNewItem] = useState('');
  const [items, setItems] = useState<ChecklistItem[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const themeColors = {
    background: isDark ? colors.background.dark : colors.background.light,
    surface: isDark ? colors.surface.dark : colors.surface.light,
    textPrimary: isDark ? colors.text.primary.dark : colors.text.primary.light,
    textSecondary: isDark
      ? colors.text.secondary.dark
      : colors.text.secondary.light,
    border: isDark ? colors.border.dark : colors.border.light,
  };

  const resetForm = () => {
    setTitle('');
    setContent('');
    setTags('');
    setItems([]);
    setErrors({});
    setNewItem('');
    setSelectedColor(IDEA_COLORS[1]);
  };

  const handleAddItem = () => {
    if (!newItem.trim()) return;

    const item: ChecklistItem = {
      id: Date.now().toString(),
      text: newItem.trim(),
      isCompleted: false,
    };

    setItems((prev) => [...prev, item]);
    setNewItem('');
  };

  const handleSave = () => {
    setErrors({});
    const now = new Date();
    const id = Date.now().toString();

    try {
      switch (type) {
        case 'nota': {
          const result = noteSchema.parse({ title, content });
          const note: Note = {
            id,
            title: result.title.trim(),
            content: result.content.trim(),
            createdAt: now,
            updatedAt: now,
          };
          addNote(note);
          break;
        }

        case 'idea': {
          const result = ideaSchema.parse({ title, tags });
          const idea: IdeaNote = {
            id,
            title: result.title.trim(),
            tags: result.tags
              .split(',')
              .map((t) => t.trim())
              .filter(Boolean),
            color: selectedColor,
            createdAt: now,
            updatedAt: now,
          };
          addIdea(idea);
          break;
        }

        case 'tarea': {
          if (items.length === 0) {
            setErrors({ items: 'Añade al menos un item' });
            return;
          }

          const result = checklistSchema.parse({ title });
          const checklist: ChecklistNote = {
            id,
            title: result.title.trim(),
            items,
            createdAt: now,
            updatedAt: now,
          };
          addChecklist(checklist);
          break;
        }
      }

      resetForm();
      router.back();
    } catch (err) {
      if (err instanceof z.ZodError) {
        const formatted: Record<string, string> = {};
        err.issues.forEach((e) => {
          formatted[e.path[0] as string] = e.message;
        });
        setErrors(formatted);
      }
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
        style={[styles.container, { backgroundColor: themeColors.background }]}
        contentContainerStyle={{ paddingBottom: spacing.xxl }}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.typeSelector}>
          {(['nota', 'idea', 'tarea'] as NoteType[]).map((t, index) => (
            <TouchableOpacity
              key={t}
              style={[
                styles.typeButton,
                {
                  backgroundColor:
                    type === t ? colors.notas.primary : themeColors.surface,
                  borderColor: themeColors.border,
                  marginRight: index < 2 ? spacing.sm : 0,
                },
              ]}
              onPress={() => setType(t)}
            >
              <Text
                style={[
                  styles.typeButtonText,
                  { color: type === t ? '#fff' : themeColors.textPrimary },
                ]}
              >
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={[styles.label, { color: themeColors.textPrimary }]}>
          Título
        </Text>
        <TextInput
          style={[
            styles.input,
            {
              backgroundColor: themeColors.surface,
              color: themeColors.textPrimary,
              borderColor: errors.title ? colors.danger : themeColors.border,
            },
          ]}
          placeholder="Título"
          placeholderTextColor={themeColors.textSecondary}
          value={title}
          onChangeText={setTitle}
        />
        {errors.title && <Text style={styles.error}>{errors.title}</Text>}

        {type === 'nota' && (
          <>
            <Text style={[styles.label, { color: themeColors.textPrimary }]}>
              Contenido
            </Text>
            <TextInput
              style={[
                styles.textarea,
                {
                  backgroundColor: themeColors.surface,
                  color: themeColors.textPrimary,
                },
              ]}
              value={content}
              onChangeText={setContent}
              multiline
              textAlignVertical="top"
            />
            {errors.content && (
              <Text style={styles.error}>{errors.content}</Text>
            )}
          </>
        )}

        {type === 'idea' && (
          <>
            <Text style={[styles.label, { color: themeColors.textPrimary }]}>
              Etiquetas
            </Text>
            <TextInput
              style={[
                styles.input,
                {
                  backgroundColor: themeColors.surface,
                  color: themeColors.textPrimary,
                },
              ]}
              value={tags}
              onChangeText={setTags}
            />
            {errors.tags && (
              <Text style={styles.error}>{errors.tags}</Text>
            )}
            <Text style={[styles.label, { color: themeColors.textPrimary }]}>
              Color
            </Text>
            <View style={styles.colorSelector}>
              {IDEA_COLORS.map((c, i) => (
                <TouchableOpacity
                  key={c}
                  style={[
                    styles.colorDot,
                    { backgroundColor: c },
                    i < IDEA_COLORS.length - 1 && { marginRight: spacing.sm },
                    selectedColor === c && {
                      borderWidth: 3,
                      borderColor: isDark
                        ? colors.text.primary.dark
                        : colors.text.primary.light,
                    },
                  ]}
                  onPress={() => setSelectedColor(c)}
                />
              ))}
            </View>
          </>
        )}

        {type === 'tarea' && (
          <>
            <Text style={[styles.label, { color: themeColors.textPrimary }]}>
              Items
            </Text>
            <View style={styles.itemInputRow}>
              <TextInput
                style={[
                  styles.itemInput,
                  {
                    backgroundColor: themeColors.surface,
                    color: themeColors.textPrimary,
                  },
                ]}
                value={newItem}
                onChangeText={setNewItem}
                placeholder="Añadir item..."
                placeholderTextColor={themeColors.textSecondary}
              />
              <TouchableOpacity
                style={[
                  styles.addItemButton,
                  {
                    backgroundColor: colors.tareas.primary,
                    marginLeft: spacing.sm,
                  },
                ]}
                onPress={handleAddItem}
              >
                <Text style={styles.addItemButtonText}>+</Text>
              </TouchableOpacity>
            </View>
            {errors.items && (
              <Text style={styles.error}>{errors.items}</Text>
            )}
            {items.map((item) => (
              <Text
                key={item.id}
                style={[styles.itemText, { color: themeColors.textSecondary }]}
              >
                ⬜ {item.text}
              </Text>
            ))}
          </>
        )}
        <TouchableOpacity
          style={[
            styles.saveButton,
            {
              backgroundColor: colors.notas.primary,
              opacity: title.trim() ? 1 : 0.6,
            },
          ]}
          onPress={handleSave}
          disabled={!title.trim()}
        >
          <Text style={styles.saveButtonText}>Guardar</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.lg,
  },
  typeSelector: {
    flexDirection: 'row',
    marginBottom: spacing.lg,
  },
  typeButton: {
    flex: 1,
    paddingVertical: spacing.sm,
    borderRadius: borderRadius.md,
    alignItems: 'center',
    borderWidth: 1,
  },
  typeButtonText: {
    fontSize: typography.sizes.md,
    fontWeight: typography.weights.medium,
  },
  label: {
    fontSize: typography.sizes.sm,
    fontWeight: typography.weights.medium,
    marginTop: spacing.md,
    marginBottom: spacing.xs,
  },
  input: {
    borderWidth: 1,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    fontSize: typography.sizes.md,
  },
  textarea: {
    borderWidth: 1,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    fontSize: typography.sizes.md,
    minHeight: 120,
  },
  error: {
    color: colors.danger,
    fontSize: typography.sizes.sm,
    marginTop: spacing.xs,
  },
  colorSelector: {
    flexDirection: 'row',
    marginTop: spacing.xs,
  },
  colorDot: {
    width: 32,
    height: 32,
    borderRadius: borderRadius.full,
  },
  itemInputRow: {
    flexDirection: 'row',
    marginTop: spacing.xs,
  },
  itemInput: {
    flex: 1,
    borderWidth: 1,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    fontSize: typography.sizes.md,
  },
  addItemButton: {
    width: 48,
    borderRadius: borderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addItemButtonText: {
    color: '#fff',
    fontSize: typography.sizes.xl,
    fontWeight: typography.weights.bold,
  },
  itemText: {
    fontSize: typography.sizes.md,
    marginTop: spacing.sm,
  },
  saveButton: {
    marginTop: spacing.xl,
    padding: spacing.lg,
    borderRadius: borderRadius.md,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: typography.sizes.lg,
    fontWeight: typography.weights.bold,
  },
});