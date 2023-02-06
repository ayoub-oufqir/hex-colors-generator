import { useRef } from "react";
import { FiCopy } from "react-icons/fi";
const ColoredCards = ({ colorsArrayState }) => {
  const inputRef = useRef([]);

  const handleClick = (e) => {
    console.log(e.currentTarget.textContent);
    navigator.clipboard.writeText(e.currentTarget.textContent);
  };

  const handleCopy = async (ele) => {
    // console.log(ele.currentTarget.style({backgroundColor:"red"}));
    // ele.currentTarget.style.backgroundColor= "red";
    ele.currentTarget.style.color = "black";
    // setTimeout(() => {
    // }, 200);
    // ele.currentTarget.style.backgroundColor= "transparent";
  };
  const handleCopyDone = async (ele) => {
    ele.currentTarget.style.color = "white";
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 md:gap-4 gap-2 py-5 md:py-10">
      {colorsArrayState.map((item, idx) => (
        <div
          key={item}
          ref={(el) => (inputRef.current[idx] = el)}
          onClick={handleClick}
          className="flex gap-2 md:gap-5 items-center flex-col p-6 rounded-md w-fit mx-auto mb-2 text-white text-xl"
          style={{ backgroundColor: item }}
          onMouseDown={handleCopy}
          onMouseUp={handleCopyDone}
        >
          {item}
          <FiCopy
            className="md:text-5xl"
            onMouseDown={handleCopy}
            onMouseUp={handleCopyDone}
          />
        </div>
      ))}
    </div>
  );
};

export default ColoredCards;
