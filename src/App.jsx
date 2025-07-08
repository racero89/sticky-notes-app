import { ColorProvider } from "./context/ColorContext";
import ColorSelector from "./components/ColorSelector";
import NoteBoard from "./components/NoteBoard";

function App() {
  return (
    <ColorProvider>
      <div className="app-container" style={{ padding: "2rem" }}>
        <h1>🗒️ Sticky Notes</h1>
        <ColorSelector />
        <NoteBoard />
      </div>
    </ColorProvider>
  );
}

export default App;
