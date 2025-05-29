# Notas Adhesivas con Color

## 🎯 Objetivo

Crear una aplicación de notas adhesivas (tipo post-its) en React.  
El usuario podrá crear notas de colores, verlas en un tablero, y eliminar las que ya no quiera.  
El color predeterminado para nuevas notas se controla mediante un contexto (`useContext`), y la lógica de las notas se gestiona con un custom hook (`useNotes`).

---

## 📂 Funcionalidades

Vais a desarrollar:

- Un componente para visualizar un tablero con las notas actuales.
- Un formulario para escribir una nota nueva y añadirla al tablero.
- Un botón para eliminar cada nota individual.
- Un selector de color que modifica el color por defecto de las nuevas notas (mediante `useContext`).
- Un hook personalizado (`useNotes`) que maneja la lógica de añadir y eliminar notas.

---

## 🎯 Requisitos

- Usar `useState` y `useContext` para gestionar:
  - Las notas activas en el tablero.
  - El color por defecto de nuevas notas.
- Crear un **custom hook** llamado `useNotes` que gestione la lógica de añadir y eliminar notas.
- Dividir la aplicación en **tres componentes principales**:
  - `NoteBoard`: muestra el formulario y las notas.
  - `Note`: componente individual de una nota.
  - `ColorSelector`: cambia el color global predeterminado.

---

## 🔧 Comportamientos esperados

- Las notas tienen: texto, color y un ID único.
- El color por defecto se gestiona con un contexto (`ColorContext`) y puede cambiarse con un `input type="color"`.
- Las nuevas notas se crean con el color que esté activo en el contexto en ese momento.
- Eliminar una nota la quita del estado global de notas.

---

## 💡 Instrucciones

### 1️⃣ Preparar el proyecto

- Forkead este repositorio y clonadlo en local.
- Ejecutad el siguiente comando para iniciar el proyecto:

```bash
npm i
npm run dev
```

- Cread una estructura como esta:

```
src/
├── App.jsx
├── context/
│   └── ColorContext.jsx
├── hooks/
│   └── useNotes.js
├── components/
│   ├── NoteBoard.jsx
│   ├── Note.jsx
│   └── ColorSelector.jsx

```

---

### 2️⃣ Crear los componentes

#### 🔹 ColorContext

- Crea un contexto que contenga:
  - El color por defecto.
  - Una función para actualizarlo.

#### 🔹 useNotes (custom hook)

- Guarda el array de notas: cada nota es un objeto con `id`, `text`, y `color`
- Funciones:

  - `addNote(text, color)` → añade una nueva nota
  - `deleteNote(id)` → elimina una nota por id

Para generar IDs únicos en cada nota, podéis hacer una función propia utilizando `Math.random()` con números y letras o podéis usar la librería `uuid`.

**Instalación:**

```bash
npm i uuid
```

**Uso dentro de useNotes.js:**

```js
import { v4 as uuidv4 } from "uuid"
// ...
const newNote = {
  id: uuidv4(),
  text,
  color,
}
```

Consultad la documentación oficial de uuid para más detalles:
`https://github.com/uuidjs/uuid`

#### 🔹App

- Envuelve la app en el `ColorProvider`
- Contiene los componentes `ColorSelector` y `NoteBoard`

#### 🔹 NoteBoard

- Usa `useNotes` y el contexto de color para crear nuevas notas.
- Muestra un input de texto + botón.
- Renderiza la lista de `<Note />`.

#### 🔹 Note

- Muestra el contenido y color de la nota.
- Tiene un botón para eliminarla (pasando su ID).

#### 🔹 ColorSelector

- Muestra un selector de color (`input type="color"`).
- Cambia el color del contexto global.

---

### 🚀 Bonus

Si terminas antes, intenta añadir:

- Limita el número de notas a 10.
- Guarda las notas en `localStorage` para mantenerlas tras refrescar.
- Mostrar un mensaje si no hay notas
- Validar que no se pueda añadir una nota vacía
