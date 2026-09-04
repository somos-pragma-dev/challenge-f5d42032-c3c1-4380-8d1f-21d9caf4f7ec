# Prompt para Mejorar el Codigo Base

Copia y pega el siguiente contenido completo en un asistente de IA (Claude, ChatGPT, etc.)
para obtener un ZIP con el proyecto arrancable. Si el adjunto es una carcasa (docs/placeholders),
el asistente debe materializar la estructura del stack del briefing, sin resolver las fases del reto.

---

```
## Briefing del reto (autoridad)
Este bloque manda sobre los archivos adjuntos. El stack y el rol salen de AQUÍ, no de un topic genérico ni de markdown placeholder.

### Contexto técnico original
Crear una aplicación React con TypeScript, componentes funcionales y hooks

### Reto
- Tema: desarrollo de aplicaciones con React y TypeScript
- Seniority: junior-l1
- Tipo: practical
- Título: Desarrollo de una aplicación de gestión de tareas con React y TypeScript
- Tiempo estimado: 8 horas

### Fases (trabajo del HUMANO — PROHIBIDO completarlas)
No implementes estos entregables. Dejalos como hueco pedagógico. El asistente solo materializa el proyecto arrancable para que el participante pueda trabajar.
- Fase 1: Configuración del proyecto y creación de la estructura básica — objetivo: Tener un proyecto React con TypeScript configurado y una estructura básica para la aplicación de gestión de tareas. — entregable (NO resolver): Proyecto React con TypeScript configurado y estructura básica creada.
- Fase 2: Implementación de la lógica de tareas — objetivo: Implementar la lógica para crear, editar y eliminar tareas en la aplicación. — entregable (NO resolver): Lógica para crear, editar y eliminar tareas implementada.
- Fase 3: Implementación de filtros y búsqueda — objetivo: Implementar filtros para mostrar tareas por estado y búsqueda por título. — entregable (NO resolver): Filtros y búsqueda implementados en la aplicación.

Eres un asistente experto en análisis, corrección y generación de archivos de cualquier tipo:
código fuente, documentación, hojas de cálculo, documentos Word, configuraciones, entre otros.
Voy a enviarte una cadena de texto que contiene uno o más archivos. Cada archivo está delimitado por un marcador con el siguiente formato:
// === ARCHIVO: ruta/del/archivo.extension ===
o también puede aparecer como:
## === ARCHIVO: ruta/del/archivo.extension ===
Lo que sigue al marcador puede ser:

El contenido real del archivo (código, texto, YAML, etc.)
Una descripción en lenguaje natural de lo que debe contener el archivo


TU TAREA
PASO 0 — ¿Esto es un proyecto o una carcasa?
Antes de extraer archivos, leé el Briefing (si está) y diagnosticá el adjunto.

Es CARCASA si ocurre CUALQUIERA de estas:
- No hay manifiesto de dependencias del stack del briefing (manifest.json de VTEX IO / package.json / pom.xml / build.gradle / requirements.txt / go.mod / *.tf / *.csproj, según corresponda)
- Hay un "binario" que en realidad es un comentario ("no puede ser mostrado como texto plano", placeholder .fig/.docx vacío)
- Los markdowns ya completan entregables de fases posteriores ("se implementó fade-in", lista de áreas ya resuelta)

Si es CARCASA:
- MATERIALIZÁ un proyecto que arranca en el stack del briefing (VTEX IO Store Framework, Angular, Terraform, pytest, Nest, etc.). Incluí manifiesto, punto de entrada y capa de interfaz reales.
- NO copies los markdowns de "solución" como si fueran el producto. Son ruido de generación.
- NO resuelvas las fases del briefing (están marcadas PROHIBIDO). Dejá el hueco pedagógico: el flujo existe, las microinteracciones/calidad/infra que el reto pide NO están hechas.
- Después seguí al PASO 5 (ZIP).

Si es un proyecto REAL (manifiesto + código que compila o arranca):
- Seguí PASO 1 en adelante. 🔴 compilación sí. 🟡 pedagógico no.

PASO 1 — Detección y extracción
Identifica todos los archivos presentes en la cadena. Para cada archivo extrae:

Su ruta completa (ej: src/main/java/com/pragma/Service.java)
Su contenido o descripción

PASO 2 — Clasificación por tipo
Clasifica cada archivo en una de estas categorías:
A) Código fuente (Java, Python, TypeScript, JavaScript, Kotlin, etc.)
B) Configuración / documentación (YAML, properties, Markdown, JSON, txt, etc.)
C) Excel (.xlsx, .xls, .csv)
D) Word (.docx, .doc)
E) Otro tipo de archivo binario o especial
PASO 3 — Clasificación de errores en código fuente

Objetivo prioritario: que el proyecto compile. No corrijas flujo de negocio ni lógica funcional.

Antes de modificar cualquier archivo de código fuente, clasifica cada problema encontrado en una de estas dos categorías:
🔴 ERROR DE COMPILACIÓN — corregir siempre
Son errores que impiden que el proyecto arranque, sin valor pedagógico:

Import faltante o incorrecto
Clase, método o variable referenciada que no existe en ningún archivo del proyecto
Error de sintaxis
Anotación con atributos inválidos
Dependencia ausente en pom.xml, package.json, etc.
Archivo referenciado que no existe y debe ser creado con implementación mínima

→ CORREGIR estos errores.
🟡 PROBLEMA FUNCIONAL O DE CALIDAD — preservar siempre
Son problemas que no impiden compilar. Pueden ser intencionales para el aprendizaje:

Clave secreta hardcodeada ("secret", "password123")
API deprecada que funciona pero tiene reemplazo moderno
Lógica de negocio incorrecta o incompleta
Código redundante o de baja legibilidad
Falta de validaciones en flujo de negocio
Patrones de diseño incorrectos pero funcionales
Concurrencia no segura
Configuración funcional pero no óptima

→ PRESERVAR tal cual. No corregir, no mejorar, no comentar.
PASO 4 — Procesamiento según tipo de archivo
Tipo A — Código fuente
Aplica únicamente las correcciones clasificadas como 🔴 ERROR DE COMPILACIÓN.
No alteres ningún elemento clasificado como 🟡 PROBLEMA FUNCIONAL O DE CALIDAD.
Si falta un archivo referenciado, créalo con la implementación mínima necesaria para compilar.
Tipo B — Configuración / documentación
Extrae el contenido tal cual, sin modificaciones salvo errores evidentes de sintaxis
(ej: YAML mal indentado).
Tipo C — Excel (.xlsx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un archivo Excel funcional con:

Fila de encabezados en negrita con color de fondo distintivo
Columnas con ancho ajustado al contenido
Tipos de dato correctos por columna
Validaciones si la descripción lo indica
Hojas nombradas descriptivamente si hay más de una
Filas de ejemplo si no hay datos reales

Tipo D — Word (.docx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un documento Word funcional con:

Estilos de título (Título 1, Título 2) para jerarquía de secciones
Fuente legible (Calibri o equivalente), tamaño 11-12pt para cuerpo
Márgenes estándar
Tabla de contenido si tiene múltiples secciones
Tablas con encabezados en negrita si aplica

Tipo E — Otro
Genera el archivo con el contenido o estructura más apropiada según la descripción.
PASO 5 — Exportación en ZIP
Empaqueta todos los archivos en un único archivo ZIP descargable respetando exactamente
la estructura de rutas indicada por los marcadores.
El ZIP debe incluir:

Archivos de código con únicamente los errores de compilación corregidos
Archivos de configuración y documentación sin cambios
Archivos nuevos creados para resolver dependencias de compilación faltantes
Archivos Excel y Word generados desde descripción

IMPORTANTE: El ZIP debe estar listo para descargar al finalizar. No preguntes si el usuario
quiere generarlo. Simplemente genera el archivo y proporciona el enlace de descarga; No debes desplegar en el chat el resumen de lo que arreglaste al Zip, solo entregalo.

REGLAS IMPORTANTES

No omitas ningún archivo aunque no tenga errores ni modificaciones
Respeta los nombres y rutas exactas indicadas por los marcadores
Si un archivo no tiene marcador claro, infiere el nombre desde su contenido
Si la cadena contiene solo documentación, placeholders o binarios fake, NO la reproduzcas:
aplicá PASO 0 (materializar el proyecto del briefing). Reproducir la carcasa es un fallo.
No agregues texto después del enlace de descarga del ZIP
No preguntes si el usuario quiere el ZIP: simplemente generalo siempre
Si detectas que falta un archivo de configuración necesario para compilar
(pom.xml, package.json, requirements.txt, build.gradle, etc.), créalo e inclúyelo
inferiendo su contenido desde los imports y frameworks detectados en el código
Nunca corrijas problemas 🟡 aunque parezcan obvios o fáciles de mejorar.
El participante que recibirá este proyecto los debe encontrar y resolver él mismo.


INPUT
Aquí está la cadena con los archivos:
// === ARCHIVO: package.json ===
{
  "name": "task-manager",
  "version": "1.0.0",
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "dependencies": {
    "react": "18.2.0",
    "react-dom": "18.2.0"
  },
  "devDependencies": {
    "typescript": "5.1.0",
    "react-scripts": "5.0.0"
  }
}

// === ARCHIVO: src/index.tsx ===
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/App.css';

ReactDOM.render(<App />, document.getElementById('root'));

// === ARCHIVO: src/App.tsx ===
import React from 'react';
import TaskList from './components/TaskList';
import { Task } from './types/task';

const App: React.FC = () => {
  const [tasks, setTasks] = React.useState<Task[]>([]);
  return (
    <div className="App">
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
};

export default App;

// === ARCHIVO: src/components/TaskList.tsx ===
import React from 'react';
import TaskItem from './TaskItem';
import { Task } from '../types/task';

interface TaskListProps {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, setTasks }) => {
  return (
    <div>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} setTasks={setTasks} />
      ))}
    </div>
  );
};

export default TaskList;

// === ARCHIVO: src/components/TaskItem.tsx ===
import React from 'react';
import { Task } from '../types/task';

interface TaskItemProps {
  task: Task;
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, setTasks }) => {
  const handleDelete = () => {
    setTasks((prevTasks) => prevTasks.filter((t) => t.id!== task.id));
  };

  return (
    <div>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <button onClick={handleDelete}>Eliminar</button>
    </div>
  );
};

export default TaskItem;

// === ARCHIVO: src/hooks/useTasks.ts ===
import { useState } from 'react';
import { Task } from '../types/task';

export const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  return { tasks, setTasks };
};

// === ARCHIVO: src/services/taskService.ts ===
import { Task } from '../types/task';

export const createTask = (task: Task): Task => {
  return {...task, id: Date.now().toString() };
};

export const updateTask = (tasks: Task[], updatedTask: Task): Task[] => {
  return tasks.map((task) => (task.id === updatedTask.id? updatedTask : task));
};

export const deleteTask = (tasks: Task[], taskId: string): Task[] => {
  return tasks.filter((task) => task.id!== taskId);
};

// === ARCHIVO: src/utils/taskUtils.ts ===
import { Task } from '../types/task';

export const filterTasksByStatus = (tasks: Task[], status: string): Task[] => {
  return tasks.filter((task) => task.status === status);
};

export const searchTasksByTitle = (tasks: Task[], title: string): Task[] => {
  return tasks.filter((task) => task.title.includes(title));
};

// === ARCHIVO: src/types/task.ts ===
export interface Task {
  id: string;
  title: string;
  description: string;
  status: 'pending' | 'in-progress' | 'completed';
}

// === ARCHIVO: src/styles/App.css ===
.App {
  text-align: center;
}

// === ARCHIVO: tests/TaskList.test.tsx ===
import React from 'react';
import { render, screen } from '@testing-library/react';
import TaskList from '../src/components/TaskList';
import { Task } from '../src/types/task';

describe('TaskList Component', () => {
  test('renders task list', () => {
    const tasks: Task[] = [
      { id: '1', title: 'Task 1', description: 'Description 1', status: 'pending' },
      { id: '2', title: 'Task 2', description: 'Description 2', status: 'in-progress' }
    ];
    render(<TaskList tasks={tasks} setTasks={() => {}} />);
    expect(screen.getAllByRole('heading').length).toBe(2);
  });
});
```
