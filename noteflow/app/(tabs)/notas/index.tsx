import { View, Text, StyleSheet } from 'react-native';
import { useColorScheme } from 'react-native';
import { colors, typography, spacing } from '@/constants/theme';

export default function NotasScreen() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <View style={[
      styles.container,
      { backgroundColor: isDark ? colors.background.dark : colors.background.light }
    ]}>
      <Text style={[
        styles.title,
        { color: isDark ? colors.text.primary.dark : colors.text.primary.light }
      ]}>
        Notas
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: typography.sizes.xxl,
    fontWeight: typography.weights.bold,
  },
});