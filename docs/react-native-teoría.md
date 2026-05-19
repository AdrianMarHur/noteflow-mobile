# 📱 React Native — Documentación Técnica

> Este documento se completa progresivamente a lo largo del desarrollo del proyecto.

---

## Contenido

- [Fundamentos de React Native](#fundamentos-de-react-native)
- [Metro Bundler](#metro-bundler)
- [Expo Go vs Development Build](#expo-go-vs-development-build)
- *(próximamente: Sistemas de diseño, Navegación, Zustand, FlashList, AsyncStorage)*

---

## Fundamentos de React Native

### React Native vs Aplicación Nativa

Una aplicación nativa es aquella desarrollada específicamente para un sistema operativo utilizando sus lenguajes y herramientas propias:

- Android → Kotlin / Java
- iOS → Swift / Objective-C

Estas aplicaciones ofrecen el máximo rendimiento y acceso directo a todas las capacidades del dispositivo.

---

### ¿Qué es React Native?

React Native es un framework que permite desarrollar aplicaciones móviles utilizando **JavaScript/TypeScript y React**, pero renderizando **componentes nativos reales** en lugar de HTML.

Esto significa que:
- No usa WebView
- No renderiza HTML o CSS
- Crea componentes nativos del sistema operativo (Android/iOS)

---

### Arquitectura básica

React Native funciona con dos partes principales:

1. **JavaScript Thread**
   Donde se ejecuta la lógica de la aplicación (React, estado, eventos)

2. **UI Thread (nativo)**
   Donde se renderizan los componentes visuales reales

Ambos hilos se comunican entre sí.

---

### Implicación importante

Si el **JavaScript thread se bloquea**:
- La app deja de responder
- La interfaz se congela

Por eso es importante escribir código eficiente y evitar operaciones pesadas en el hilo principal.

---

### Ventajas de React Native

- Desarrollo multiplataforma (Android + iOS)
- Reutilización de código
- Mayor velocidad de desarrollo
- Comunidad amplia

---

### Limitaciones

- Menor control que una app 100% nativa
- Dependencia de librerías externas para funciones avanzadas
- Puede requerir código nativo en casos complejos

---

## Metro Bundler

Metro es el sistema encargado de **empaquetar (bundle)** el código de la aplicación.

### ¿Qué hace Metro?

- Convierte el código JavaScript/TypeScript en un bundle ejecutable
- Resuelve dependencias
- Permite recarga rápida (Hot Reload / Fast Refresh)
- Optimiza el código para ejecución en móvil

### Importancia

Sin Metro, la app no podría ejecutarse ya que:
- Los dispositivos móviles no interpretan directamente el código JS moderno
- Es necesario transformarlo y empaquetarlo correctamente

---

## Expo Go vs Development Build

### Expo Go

Expo Go es una aplicación que permite ejecutar proyectos de React Native de forma rápida sin necesidad de compilar la app.

Funcionamiento:
1. Ejecutas `npx expo start`
2. Escaneas un QR
3. La app se ejecuta en tu móvil

**Ventajas:**
- Configuración rápida
- Desarrollo ágil
- No requiere compilación
- Ideal para aprendizaje y prototipado

**Limitaciones:**
- Solo incluye un conjunto limitado de APIs nativas
- No permite añadir módulos nativos personalizados
- No es adecuado para aplicaciones complejas

---

### Development Build

Un Development Build es una versión compilada de la app que incluye las dependencias nativas necesarias. Se genera mediante herramientas como **EAS Build**.

**Ventajas:**
- Permite usar cualquier API nativa (cámara, notificaciones, biometría, etc.)
- Mayor control sobre la app
- Entorno más cercano a producción

**Conclusión:** Expo Go es excelente para desarrollo inicial, pero en proyectos reales se utiliza Development Build porque las apps reales requieren acceso a funcionalidades nativas avanzadas y mayor control sobre el entorno.

---

## Resumen

- React Native permite crear apps móviles con JavaScript pero usando componentes nativos reales
- Metro es el sistema que empaqueta y prepara el código para ejecutarse
- Expo Go es útil para desarrollo rápido, pero no es suficiente para aplicaciones reales

---

## Próximas secciones

- Sistemas de diseño
- Navegación con Expo Router
- Gestión de estado con Zustand
- Rendimiento en listas con FlashList
- Persistencia con AsyncStorage

---

## Sistemas de diseño

### ¿Qué es un sistema de diseño en React Native?

Un sistema de diseño es un conjunto de componentes, tokens visuales y reglas de estilo que garantizan coherencia visual en toda la aplicación. En React Native existen varias librerías que facilitan su implementación.

---

### Comparativa: Gluestack UI vs React Native Paper

| | Gluestack UI | React Native Paper |
|---|---|---|
| **Filosofía** | Similar a Tailwind CSS | Material Design |
| **Personalización** | Alta | Media |
| **Curva de aprendizaje** | Media | Baja |
| **Identidad visual** | Propia y flexible | Ligada a Material Design |
| **Integración Android** | Buena | Muy profunda |
| **Ideal para** | Apps con diseño propio | Apps con diseño Material |

---

### Elección: Gluestack UI

Para NoteFlow se ha elegido **Gluestack UI** por las siguientes razones:

- NoteFlow tiene una identidad visual propia con tres tipos de contenido diferenciados por color
- Se necesita alta personalización para las tarjetas de notas, ideas y tareas
- React Native Paper está muy ligado a Material Design, lo que limitaría la libertad de diseño
- Gluestack UI permite usar tokens de diseño propios definidos en `constants/theme.ts`

---

### Configuración del provider

El provider de Gluestack se configura en `app/_layout.tsx` envolviendo toda la aplicación:

```tsx
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';
import { useColorScheme } from 'react-native';

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <GluestackUIProvider
      config={config}
      colorMode={colorScheme === 'dark' ? 'dark' : 'light'}
    >
      {/* resto de la app */}
    </GluestackUIProvider>
  );
}
```

Esto garantiza que todos los componentes de Gluestack respetan automáticamente el modo oscuro o claro del sistema operativo.