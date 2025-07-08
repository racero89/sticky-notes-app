import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const useNotes = () => {
  const [notes, setNotes] = useState([]);

  const addNote = (text, color) => {
    const newNote = {
      id: uuidv4(),
      text,
      color,
    };
    setNotes([...notes, newNote]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return { notes, addNote, deleteNote };
};
