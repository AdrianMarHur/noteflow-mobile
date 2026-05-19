# AI Setup

---

## Objetivo

El objetivo de esta configuración es utilizar herramientas de inteligencia artificial como apoyo durante el desarrollo del proyecto NoteFlow, mejorando la productividad y reduciendo el tiempo en tareas repetitivas sin perder el control sobre la arquitectura y las decisiones técnicas.

---

## Herramientas utilizadas

Durante el desarrollo se emplean las siguientes herramientas de IA:

- **ChatGPT** — Consultas técnicas y explicación de conceptos
- **Microsoft 365 Copilot** — Autocompletado y generación de código en el editor
- **Claude** — Planificación, documentación y revisión de arquitectura
- **IA integrada en Visual Studio Code** — Soporte inline durante el desarrollo

---

## Uso de las herramientas

Las herramientas de IA se utilizan como soporte en tareas específicas:

- Generación de código repetitivo o tedioso
- Ayuda en la detección y resolución de errores
- Organización del proyecto y planificación de tareas
- Explicación de conceptos técnicos
- Mejora de la claridad y estructura del código

En ningún caso se delega completamente el desarrollo en la IA; todas las soluciones se revisan y adaptan manualmente.

---

## Contexto del proyecto

Para garantizar resultados consistentes, las herramientas de IA trabajan con el siguiente contexto técnico:

- **Tipo de proyecto:** Aplicación móvil
- **Stack:**
  - React Native + Expo SDK
  - TypeScript
  - Expo Router (navegación basada en sistema de archivos)
  - Zustand (estado global)
  - AsyncStorage (persistencia local)
  - FlashList (listas de alto rendimiento)
  - Zod (validación de formularios)
  - Gluestack UI (sistema de diseño)

---

## Estructura del proyecto

Las herramientas deben respetar la organización de carpetas definida:

```
noteflow/
├── app/
│   ├── (tabs)/
│   │   ├── _layout.tsx
│   │   ├── notas/
│   │   │   ├── index.tsx        → lista de notas
│   │   │   └── [id].tsx         → detalle de nota
│   │   ├── ideas/
│   │   │   ├── index.tsx
│   │   │   └── [id].tsx
│   │   └── tareas/
│   │       ├── index.tsx
│   │       └── [id].tsx
│   ├── _layout.tsx              → layout global (Stack + modal)
│   └── nueva-nota.tsx           → modal unificado de creación
│
├── src/
│   ├── components/
│   │   ├── ui/                  → botones, inputs, etc.
│   │   ├── notas/               → componentes específicos de notas
│   │   ├── ideas/
│   │   └── tareas/
│   ├── store/                   → estado global (Zustand)
│   ├── types/                   → modelos TypeScript
│   ├── constants/               → colores, config, theme
│   └── services/                → lógica de AsyncStorage
│
├── assets/
└── docs/
```

---

## Convenciones que debe respetar la IA

Para mantener la coherencia del proyecto, las herramientas de IA deben seguir estas convenciones:

- **Lenguaje:** TypeScript estricto, sin `any`
- **Componentes:** funcionales con hooks, nunca clases
- **Nombrado:** PascalCase para componentes, camelCase para funciones y variables
- **Estilos:** mediante el sistema de diseño de Gluestack UI y tokens de `constants/theme.ts`
- **Estado:** siempre a través del store de Zustand, nunca estado local para datos globales
- **Navegación:** exclusivamente con Expo Router, sin React Navigation directo

---

## Restricciones

Las herramientas de IA no deben:

- Introducir librerías no definidas en el stack
- Proponer soluciones fuera de React Native + Expo
- Usar otros sistemas de navegación distintos a Expo Router
- Implementar estado global fuera de Zustand
- Generar código sin tipado en TypeScript

---

## Conclusión

La configuración de herramientas de IA permite acelerar el desarrollo manteniendo el control sobre la arquitectura y asegurando la coherencia técnica del proyecto.

Todas las decisiones finales y validaciones del código recaen en el desarrollador.