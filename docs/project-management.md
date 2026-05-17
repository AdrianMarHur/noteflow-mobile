# NoteFlow — Gestión del proyecto

---

## Herramienta utilizada

La organización del trabajo se gestiona mediante un tablero **Trello**:

🔗 [NoteFlow Mobile — Tablero Trello](https://trello.com/b/7giCeCxm/noteflowmobile)

Este tablero permite visualizar el estado del desarrollo en todo momento y organizar las tareas de forma clara y estructurada.

---

## Estructura del tablero

El tablero sigue un flujo de trabajo estándar con cinco columnas:

| Columna | Descripción |
|---------|-------------|
| **Backlog** | Todas las funcionalidades identificadas, pendientes de priorizar |
| **Todo** | Tareas priorizadas y listas para comenzar |
| **In Progress** | Tareas en desarrollo activo |
| **Review** | Tareas completadas pendientes de revisión o prueba |
| **Done** | Tareas finalizadas y verificadas |

---

## Organización de las tarjetas

Cada tarjeta del tablero representa una funcionalidad principal del proyecto y contiene:

- Un **título descriptivo** de la funcionalidad
- Un conjunto de **subtareas técnicas** definidas como checklist
- Un seguimiento mediante su **movimiento entre columnas**

Las tarjetas definidas son:

1. Documentación inicial
2. Setup del proyecto
3. Sistema de diseño
4. Navegación
5. Modelado de datos
6. Estado global con Zustand
7. Listas con FlashList
8. Formularios y validación
9. Persistencia con AsyncStorage
10. Pulido de UX
11. Verificación y completar documentación

---

## Flujo de trabajo

El desarrollo sigue un flujo incremental basado en el movimiento de tarjetas:

1. Todas las tareas comienzan en **Backlog**.
2. Se priorizan y pasan a **Todo**.
3. Durante su desarrollo se mueven a **In Progress**.
4. Una vez completadas pasan a **Review**.
5. Tras su validación final se mueven a **Done**.

Una tarjeta se considera finalizada cuando todas sus subtareas han sido completadas y verificadas en el entorno de ejecución.

---

## Metodología de trabajo

El desarrollo se realiza de forma **incremental y secuencial**, completando una funcionalidad antes de iniciar la siguiente, siguiendo este orden:

1. Configuración del entorno (setup)
2. Arquitectura base (estructura y navegación)
3. Modelado de datos
4. Gestión de estado global (Zustand)
5. Desarrollo de la interfaz y listas
6. Persistencia de datos
7. Mejora de la experiencia de usuario (UX)

Este enfoque permite mantener el control sobre el desarrollo, reducir errores acumulados y garantizar que cada parte está validada antes de avanzar.