//import { config as defaultConfig } from '@gluestack-ui/config';
export const colors = {
  notas: {
    primary: '#4A90E2',
    light: '#E8F4FD',
    dark: '#2C5F8A',
  },
  ideas: {
    primary: '#F5A623',
    light: '#FEF3E2',
    dark: '#A66D0F',
  },
  tareas: {
    primary: '#7ED321',
    light: '#EEF9E0',
    dark: '#4E8413',
  },

  background: {
    light: '#F8F9FA',
    dark: '#121212',
  },
  surface: {
    light: '#FFFFFF',
    dark: '#1E1E1E',
  },
  text: {
    primary: {
      light: '#1A1A1A',
      dark: '#F0F0F0',
    },
    secondary: {
      light: '#6B7280',
      dark: '#9CA3AF',
    },
  },
  border: {
    light: '#E5E7EB',
    dark: '#2D2D2D',
  },
  danger: '#EF4444',
};

export const typography = {
  fonts: {
    regular: 'System',
    medium: 'System',
    bold: 'System',
  },
  sizes: {
    xs: 11,
    sm: 13,
    md: 15,
    lg: 17,
    xl: 20,
    xxl: 24,
    xxxl: 30,
  },
  weights: {
    regular: '400' as const,
    medium: '500' as const,
    semibold: '600' as const,
    bold: '700' as const,
  },
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
  xxxl: 48,
};

export const borderRadius = {
  sm: 6,
  md: 10,
  lg: 16,
  xl: 24,
  full: 9999,
};

export const shadows = {
  sm: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  md: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3,
  },
};

export const theme = {
  colors,
  typography,
  spacing,
  borderRadius,
  shadows,
};

export default theme;