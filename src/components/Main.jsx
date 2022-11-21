import React from "react";
import { useState } from "react";

const Main = () => {
  const [mousePos, setMousePos] = useState({});
  let r = document.querySelector(':root')

  const handleMouseMove = (event) => {
    setMousePos({
      x: event.clientX - event.target.offsetLeft,
      y: event.clientY - 500
    });
    console.log(mousePos);    
    r.style.setProperty("--mouse-x", `${mousePos.x}px`);
    r.style.setProperty("--mouse-y", `${mousePos.y}px`);
  };

  let form = (
    <main>
      <div className="tabs">
        <div className="tab" onMouseMove={handleMouseMove}></div>
        <div className="tab" onMouseMove={handleMouseMove}></div>
        <div className="tab" onMouseMove={handleMouseMove}></div>
      </div>
    </main>
  );

  return <>{form}</>;
};

export default Main;

// style={{
//   "--mouse-x": `${mousePos.x}px`,
//   "--mouse-y": `${mousePos.y}px`,
// }}
