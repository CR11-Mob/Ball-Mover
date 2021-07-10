import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [xCoordinate, setXCoordinate] = useState(0);
  const [yCoordinate, setYCoordinate] = useState(0);

  // const initCoordinates = {
  //   transform: `translate(${xCoordinate}%, ${yCoordinate}%)`,
  // };

  // console.log(initCoordinates);
  console.log("rerender");

  // const [coordinates, updateCoordinates] = useState(initCoordinates);

  const setCoordinates = (e) => {
    console.log({ e });

    if (e.key === "ArrowDown") {
      setYCoordinate(yCoordinate + 5);
    }
    if (e.key === "ArrowUp") {
      setYCoordinate(yCoordinate - 5);
    }

    if (e.key === "ArrowRight") {
      setXCoordinate(xCoordinate + 5);
    }
    if (e.key === "ArrowLeft") {
      setXCoordinate(xCoordinate - 5);
    }

    // updateCoordinates(initCoordinates);
    // return `transform: translate(${x}%, ${y}%)`;
  };

  useEffect(() => {
    // document.onkeydown = (e) => {
    //   // console.log(e);
    //   setCoordinates(e);
    // };
    document.addEventListener("keyup", setCoordinates);

    return () => document.removeEventListener("keyup", setCoordinates);
  });
  return (
    <div className="container">
      <div className="movable-area">
        {/* <div style={coordinates} className="ball"></div> */}
        <div
          style={{ left: `${xCoordinate}px`, top: `${yCoordinate}px` }}
          className="ball"
        ></div>
      </div>
    </div>
  );
}

export default App;
