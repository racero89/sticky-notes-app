import { useState, useContext } from "react";
import { ColorContext } from "../context/ColorContext";
import { useNotes } from "../hooks/useNotes";
import Note from "./Note";

const NoteBoard = () => {
  const { color } = useContext(ColorContext);
  const { notes, addNote, deleteNote } = useNotes();
  const [text, setText] = useState("");

  const handleAddNote = () => {
    if (text.trim() === "") return;
    addNote(text, color);
    setText("");
  };

  return (
    <div>
      <div style={{ marginBottom: "1rem" }}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Escribe tu nota..."
        />
        <button onClick={handleAddNote}>Agregar nota</button>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {notes.map((note) => (
          <Note
            key={note.id}
            id={note.id}
            text={note.text}
            color={note.color}
            onDelete={deleteNote}
          />
        ))}
      </div>
    </div>
  );
};

export default NoteBoard;
