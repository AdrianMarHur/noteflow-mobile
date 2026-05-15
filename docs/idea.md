# 📌 NoteFlow — Definición de la idea

---

## 1. Problema que resuelve

La mayoría de las personas gestionan su información diaria de forma fragmentada: utilizan una aplicación para notas, otra para tareas y otra distinta para capturar ideas rápidas. Este cambio constante entre herramientas genera fricción, pérdida de contexto y, en muchos casos, abandono del sistema de organización.

Además, muchas aplicaciones no diferencian claramente entre tipos de contenido, lo que provoca desorden y dificulta la recuperación de información.

**NoteFlow** resuelve este problema reuniendo en una única aplicación tres tipos de contenido bien diferenciados que representan el ciclo completo de organización personal:

1. **Notas** — Captura rápida y en bruto de información (apuntes, pensamientos, ideas espontáneas)
2. **Ideas** — Contenido procesado y estructurado (síntesis, organización, categorización)
3. **Tareas (Checklists)** — Listas de acciones derivadas, con estado (completado/pendiente)

Este enfoque permite al usuario capturar información, transformarla en conocimiento útil y finalmente convertirla en acciones concretas.

Todo ello se ofrece mediante una interfaz fluida, rápida y sin fricción, optimizada para capturar información en segundos.

---

## 2. Usuario objetivo

### 🎯 Perfil principal
- Estudiantes (FP, universidad)
- Desarrolladores junior
- Profesionales creativos de entre 20 y 35 años

Usuarios que necesitan organizar su día a día desde el móvil de forma rápida, clara y eficiente.

---

### 🧑‍💻 Uso en el día a día

Un usuario típico utilizaría NoteFlow de la siguiente manera:

- **Por la mañana:** revisa sus **tareas (checklists)** para ver qué debe completar.
- **Durante el día:** captura **notas rápidas** en clases, reuniones o situaciones espontáneas.
- **Al procesar información:** convierte esas notas en **ideas estructuradas**.
- **Al final del día:** revisa lo completado, lo pendiente y las ideas relevantes generadas.

---

### ✅ Necesidades clave del usuario

- Captura rápida sin fricción (mínimos pasos)
- Diferenciación clara entre tipos de contenido
- Acceso inmediato sin conexión a internet
- Persistencia total de los datos
- Interfaz simple y centrada en la acción

---

## 3. Funcionalidades principales (v1.0)

Estas funcionalidades constituyen el MVP (Producto Mínimo Viable):

| # | Funcionalidad | Descripción |
|---|---------------|-------------|
| 1 | **Tres tipos de contenido** | Notas (captura), Ideas (procesadas), Tareas (checklists) |
| 2 | **Navegación por pestañas** | Tres secciones principales accesibles desde Tabs |
| 3 | **Creación de contenido** | Modal unificado que adapta el formulario según el tipo |
| 4 | **Formularios con validación** | Validación con Zod y mensajes de error claros |
| 5 | **Tarjetas visuales diferenciadas** | Cada tipo tiene diseño propio (nota, idea, checklist) |
| 6 | **Listas optimizadas** | Uso de FlashList para alto rendimiento |
| 7 | **Estado global centralizado** | Gestión eficiente mediante Zustand |
| 8 | **Persistencia local** | Datos almacenados con AsyncStorage |
| 9 | **Pantalla de detalle** | Vista completa de cada elemento por ID |
| 10 | **Eliminación con confirmación** | Uso de Alert para evitar borrados accidentales |
| 11 | **Estados vacíos** | UI amigable cuando no hay contenido |
| 12 | **Soporte modo oscuro/claro** | Adaptación automática al sistema |
| 13 | **Feedback táctil** | Vibración en acciones clave (eliminar/completar tareas) |

---

## 4. Funcionalidades opcionales (futuras versiones)

Extensiones naturales del producto fuera del alcance de la v1.0:

| # | Funcionalidad | Valor que aporta |
|---|---------------|-----------------|
| 1 | **Búsqueda en tiempo real** | Filtrado dinámico conforme el usuario escribe |
| 2 | **Archivado de contenido** | Alternativa a eliminación permanente |
| 3 | **Animaciones en listas** | Mejora visual con Reanimated |
| 4 | **Edición de notas** | Posibilidad de modificar contenido existente |
| 5 | **Filtros y ordenación** | Organización avanzada por fecha o etiquetas |
| 6 | **Sincronización en la nube** | Acceso desde múltiples dispositivos |
| 7 | **Notificaciones** | Recordatorios de tareas |
| 8 | **Exportación** | Compartir contenido |
| 9 | **Widgets** | Acceso rápido desde el sistema operativo |
| 10 | **Autenticación** | Seguridad mediante PIN o biometría |

---

## 5. Propuesta de valor

NoteFlow no pretende ser una aplicación compleja, sino una herramienta centrada en la **simplicidad, velocidad y claridad**.

Su valor diferencial se basa en:

- Separación clara entre tipos de contenido
- Flujo lógico: capturar → procesar → ejecutar
- Interfaz ligera orientada a la acción
- Persistencia local sin dependencia de conexión

El objetivo es mejorar la productividad del usuario sin sobrecargar la experiencia con funcionalidades innecesarias.

---

## 6. Enfoque técnico

La aplicación se desarrollará utilizando un stack moderno:

- React Native + Expo (desarrollo multiplataforma)
- TypeScript (tipado seguro)
- Arquitectura modular escalable
- Zustand (gestión de estado global)
- AsyncStorage (persistencia local)
- Expo Router (navegación basada en rutas)

Este enfoque permite un desarrollo rápido, mantenible y alineado con las prácticas modernas del desarrollo móvil.

---
