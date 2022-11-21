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
        <div className="main-text">
            <h2>What we offer</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque perferendis aliquam sunt laudantium facilis et quas labore modi! Possimus excepturi sit impedit cum ab cupiditate dolorum corrupti. Eligendi, tenetur libero alias laborum voluptate id aperiam maxime? Autem, consequuntur quia ipsam dolorem, quod id incidunt, exercitationem aperiam quae quo at officia sed dolorum velit et enim ratione? Harum illum explicabo excepturi.</p>
        </div>
      <div className="tabs">
        <div id="tab1" className="tab" onMouseMove={handleMouseMove}></div>
        <div id="tab2" className="tab" onMouseMove={handleMouseMove}></div>
        <div id="tab3" className="tab" onMouseMove={handleMouseMove}></div>
        <div id="tab4" className="tab" onMouseMove={handleMouseMove}></div>
        <div id="tab5" className="tab" onMouseMove={handleMouseMove}></div>
        <div id="tab6" className="tab" onMouseMove={handleMouseMove}></div>
      </div>
    </main>
  );

  return <>{form}</>;
};

export default Main;
