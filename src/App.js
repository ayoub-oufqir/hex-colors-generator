import { useState, useEffect } from "react";
import "./App.css";
import ColoredCards from "./components/ColoredCards";

function App() {
  // states
  const [numberOfColors, setNumberOfColors] = useState(12);
  const [colorsArrayState, setColorsArrayState] = useState([]);

  // handleChange function
  const handleChange = (e) => {
    setNumberOfColors(e.target.value);
    setColorsArrayState(generateColors(numberOfColors));
  };

  // useffect hook
  useEffect(() => {
    setColorsArrayState(generateColors(numberOfColors));
  }, [numberOfColors]);

  // generate colors function
  let colorsArray = [];
  const generateColors = (number) => {
    const combinations = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
    ];
    let color = "#";
    for (let i = 0; i < number; i++) {
      for (let j = 0; j < 6; j++) {
        color += combinations[Math.floor(Math.random() * 15)];
      }
      colorsArray.push(color);
      color = "#";
    }
    console.log(colorsArray);
    return colorsArray;
  };

  return (
    <div className="App bg-slate-300 min-h-screen">
      <div className="py-5 md:py-10">
        <h1 className="text-4xl md:text-6xl font-semibold">30 Days Of React</h1>
        <h2 className="text-2xl md:text-4xl py-2 md:py-6">
          Hexadecimal Colors
        </h2>
        <p>number of colors is: {numberOfColors}</p>
      </div>
      <input
        type="number"
        className="p-2 md:p-4 w-3/6 rounded-full focus-visible:outline-gray-200"
        onInput={handleChange}
      />
      <div>
        <ColoredCards colorsArrayState={colorsArrayState} />
      </div>
    </div>
  );
}

export default App;
