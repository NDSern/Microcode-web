import { useInView } from "react-intersection-observer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    const { ref: cardRef, inView: cardVisibile, entry } = useInView();
    const { ref: textRef, inView: textVisibile, entry2 } = useInView();

    return (
        <footer>
            <div ref={textRef} className="footer-text">
                <div className={`footer-text-container text-hidden ${textVisibile ? 'text-show' : ''}`}>
                    <div > 
                        <h1 className="footer-logo">LOGO</h1>
                        <p className="footer-slogan">Random Slogan</p>
                    </div>
                    <div >
                        <p className="footer-bold">PRODUCTS</p>
                        <p>Lorem, ipsum dolor.</p>
                        <p>Lorem.</p>
                        <p>Lorem, ipsum.</p>
                    </div>
                    <div >
                        <p className="footer-bold">TITLE</p>
                        <p>some link</p>
                        <p>some link</p>
                    </div>
                    <div >
                        <p className="footer-bold">RESOURCES</p>
                        <p>Lorem, ipsum.</p>
                        <p>Lorem.</p>
                        <p>Lorem, ipsum dolor.</p>
                    </div>
                    <div className="align-right">
                        <p className="footer-bold">SUPPORT</p>
                        <p>About Us</p>
                        <p>Contact us</p>
                    </div>
                </div>
            </div>
            <div ref={cardRef} className="footer-card">
                <h1 className={`hidden ${cardVisibile ? 'show' : ''}`}>Creators</h1>
                <div className="footer-card-container" >                    
                    <div className={`logo hidden ${cardVisibile ? 'show' : ''}`}>
                        <img src="src\img\om.jpg" alt="" />
                    </div>
                    <div className={`logo hidden ${cardVisibile ? 'show' : ''}`}>
                        <img src="src\img\aboke.jpg" alt="" />
                    </div>
                    <div className={`logo hidden ${cardVisibile ? 'show' : ''}`}>
                        <img src="src\img\uku.jpg" alt="" />
                    </div>
                </div>
                <div className="footer-icon">
                    <FontAwesomeIcon className={`font-awsome hidden ${cardVisibile ? 'show' : ''}`} size="2x" icon={faFacebook}></FontAwesomeIcon>
                    <FontAwesomeIcon className={`font-awsome hidden ${cardVisibile ? 'show' : ''}`} size="2x" icon={faTwitter}></FontAwesomeIcon>
                    <FontAwesomeIcon className={`font-awsome hidden ${cardVisibile ? 'show' : ''}`} size="2x" icon={faGithub}></FontAwesomeIcon>
                    <FontAwesomeIcon className={`font-awsome hidden ${cardVisibile ? 'show' : ''}`} size="2x" icon={faDiscord}></FontAwesomeIcon>
                    <FontAwesomeIcon className={`font-awsome hidden ${cardVisibile ? 'show' : ''}`} size="2x" icon={faLinkedin}></FontAwesomeIcon>
                </div>
            </div>
        </footer>
    )
}