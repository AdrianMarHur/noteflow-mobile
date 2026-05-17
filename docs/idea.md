# NoteFlow-mobile

## 1.Problema a resolver

La dificultad de gestionar información diaria de forma fragmentada: una app para notas, otra para tareas y otra para ideas. Este cambio constante genera fricción y pérdida de contexto.

## 2. Usuario Objetivo
Personas que necesitan capturar y organizar información desde el móvil de forma rápida y controlada.

## 3. Funcionalidades Principales (MVP)
- **Tres tipos de contenido** siguiendo un flujo lógico de productividad:
    - Notas (captura en bruto): Captura rápida de información y contenido de texto libre.
    - Ideas (contenido procesado): Contenido organizado y estructurado.
    - Tareas (acción concreta): Título y lista de acciones con estado completado/pendiente.
- **Navegación por pestañas:** Tres secciones independientes (Notas, Ideas, Tareas).
- **Creación de contenido:** Modal unificado que adapta el formulario según el tipo.
- **Tarjetas visuales diferenciadas:** Cada tipo tiene su propio diseño de tarjeta.
- **Listas optimizadas:** FlashList para alto rendimiento con muchos elementos.
- **Persistencia local:** Los datos se conservan entre sesiones con AsyncStorage.
- **Eliminación con confirmación:** Alert para evitar borrados accidentales.
- **Estados vacíos:** UI amigable cuando no hay contenido en una pestaña.
- **Modo oscuro/claro:** Adaptación automática al sistema operativo.
- **Feedback táctil:** Vibración en acciones clave (eliminar, completar tarea).

## 4. Funcionalidades Opcionales (Futuro)
- Búsqueda en tiempo real por texto.
- Archivado de contenido como alternativa a la eliminación.
- Edición de notas existentes.
- Animaciones de entrada/salida con Reanimated.
- Filtros y ordenación por fecha o etiquetas.
- Sincronización en la nube para acceso multi-dispositivo.