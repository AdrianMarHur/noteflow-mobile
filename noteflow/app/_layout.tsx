import { GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';
import { Stack } from 'expo-router';
import { useColorScheme } from 'react-native';

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <GluestackUIProvider 
      config={config} 
      colorMode={colorScheme === 'dark' ? 'dark' : 'light'}
    >
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="nueva-nota" options={{ presentation: 'modal' }} />
      </Stack>
    </GluestackUIProvider>
  );
}