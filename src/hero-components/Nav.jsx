import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";

export default function Nav() {
  return (
    <>
      <div className="nav-bar">
        <div className="nav-bar-left">
          <FontAwesomeIcon icon={faLaptopCode}></FontAwesomeIcon>
          <h3 className="name">Computer System Design Tools</h3>
        </div>
        <div className="nav-bar-right">
          <a href="">Home</a>
          <a>Info</a>
          <a>Contact</a>
          <a>About us</a>
        </div>
      </div>
    </>
  );
}
