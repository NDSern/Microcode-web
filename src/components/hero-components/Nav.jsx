import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { useInView } from "react-intersection-observer";

export default function Nav() {
  const { ref: navRef, inView: navVisibile, entry2 } = useInView();
  return (
    <div>
      <div ref={navRef} className="nav-bar">
        <div className={`nav-bar-left text-hidden ${navVisibile ? 'text-show' : ''}`}>
          <FontAwesomeIcon icon={faLaptopCode}></FontAwesomeIcon>
          <h3 className="name">Computer System Design Tools</h3>
        </div>
        <div className={`nav-bar-right text-hidden ${navVisibile ? 'text-show' : ''}`}>
          <a href="">Home</a>
          <a>Info</a>
          <a>Contact</a>
          <a>About us</a>
        </div>
      </div>
    </div>
  );
}
