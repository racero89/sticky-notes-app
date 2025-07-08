import { useContext } from "react";
import { ColorContext } from "../context/ColorContext";

const ColorSelector = () => {
  const { color, setColor } = useContext(ColorContext);

  return (
    <div className="mb-4">
      <label>Color por defecto: </label>
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
    </div>
  );
};

export default ColorSelector;
