import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useColorScheme } from 'react-native';
import { colors } from '@/constants/theme';

export default function TabsLayout() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: isDark
          ? colors.text.primary.dark
          : colors.text.primary.light,
        tabBarInactiveTintColor: isDark
          ? colors.text.secondary.dark
          : colors.text.secondary.light,
        tabBarStyle: {
          backgroundColor: isDark
            ? colors.surface.dark
            : colors.surface.light,
          borderTopColor: isDark
            ? colors.border.dark
            : colors.border.light,
        },
        headerStyle: {
          backgroundColor: isDark
            ? colors.surface.dark
            : colors.surface.light,
        },
        headerTintColor: isDark
          ? colors.text.primary.dark
          : colors.text.primary.light,
      }}
    >
      <Tabs.Screen
        name="notas"
        options={{
          title: 'Notas',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="document-text-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="ideas"
        options={{
          title: 'Ideas',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="bulb-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="tareas"
        options={{
          title: 'Tareas',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="checkbox-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}