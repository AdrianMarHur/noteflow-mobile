# NoteFlow-mobile

---

## 1. Problema a resolver

La dificultad de gestionar información diaria de forma fragmentada: una app para notas, otra para tareas y otra para ideas. Este cambio constante genera fricción, pérdida de contexto y dificulta la organización personal.

---

## 2. Usuario objetivo

Personas que necesitan capturar y organizar información desde el móvil de forma rápida, clara y eficiente.

---

## 3. Funcionalidades principales (MVP)

- **Tres tipos de contenido** siguiendo un flujo lógico de productividad:
  - **Notas (captura en bruto):** Captura rápida de información y texto libre.
  - **Ideas (contenido procesado):** Información organizada y estructurada.
  - **Tareas (checklists):** Listas de acciones con estado completado/pendiente.

- **Navegación por pestañas:** Tres secciones independientes (Notas, Ideas, Tareas).

- **Creación de contenido:** Modal unificado que adapta el formulario según el tipo.

- **Formularios con validación:** Uso de Zod para validar los datos introducidos.

- **Tarjetas visuales diferenciadas:** Cada tipo tiene su propio diseño.

- **Listas optimizadas:** Uso de FlashList para rendimiento con muchos elementos.

- **Estado global:** Gestión centralizada con Zustand.

- **Persistencia local:** Datos almacenados con AsyncStorage.

- **Pantalla de detalle:** Vista ampliada de cada elemento.

- **Eliminación con confirmación:** Alert para evitar borrados accidentales.

- **Estados vacíos:** UI amigable cuando no hay contenido.

- **Modo oscuro/claro:** Adaptación automática al sistema.

- **Feedback táctil:** Vibración en acciones clave (eliminar y completar tareas).

---

## 4. Funcionalidades opcionales (futuro)

- Búsqueda en tiempo real por texto.
- Archivado de contenido como alternativa a la eliminación.
- Edición de notas existentes.
- Animaciones con Reanimated.
- Filtros y ordenación por fecha o etiquetas.
- Sincronización en la nube.