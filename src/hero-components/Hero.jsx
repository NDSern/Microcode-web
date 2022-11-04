import React from "react";
import Nav from "./Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <Nav />
        <div className="hero-main">
          <div className="hero-main-text">
              <h1>Computer System Design Toolkit</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque fuga necessitatibus iste, at illo reprehenderit animi, rem explicabo saepe fugit nulla mollitia nisi dicta beatae consectetur similique. Repellat, exercitationem consectetur!</p>
              <button>
                <p>Ramdom text</p>
                <FontAwesomeIcon icon={faArrowAltCircleRight} ></FontAwesomeIcon>
              </button>
          </div>
          <div className="hero-main-animation">
            <video src="src\img\ezgif-4-903b79f303.mp4" autoPlay loop muted playsInline></video>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
