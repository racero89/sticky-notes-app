const Note = ({ id, text, color, onDelete }) => {
  return (
    <div
      style={{
        backgroundColor: color,
        padding: "1rem",
        borderRadius: "8px",
        margin: "0.5rem",
        minWidth: "150px",
        maxWidth: "200px",
      }}
    >
      <p>{text}</p>
      <button onClick={() => onDelete(id)}>Eliminar</button>
    </div>
  );
};

export default Note;
