import React from "react";
import { useState } from "react";

const Main = () => {
  const [mousePos, setMousePos] = useState({});
  let r = document.querySelector(':root')

  const handleMouseMove = (event) => {
    setMousePos({
      x: event.pageX - event.target.offsetLeft,
      y: event.pageY - event.target.offsetTop
      // no idea why its 500 but it work
    });
    
    r.style.setProperty("--mouse-x", `${mousePos.x}px`);
    r.style.setProperty("--mouse-y", `${mousePos.y}px`);
    console.log(event.target.offsetTop, " / ")
    console.log(mousePos)
  };

  let form = (
    <main>
      <div className="tabs">
        <div id="tab1" className="tab" onMouseMove={handleMouseMove}></div>
        <div id="tab2" className="tab" onMouseMove={handleMouseMove}></div>
        <div id="tab3" className="tab" onMouseMove={handleMouseMove}></div>
      </div>
    </main>
  );

  return <>{form}</>;
};

export default Main;
