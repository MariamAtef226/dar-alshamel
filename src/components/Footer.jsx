import fb from "../assets/icons/facebook.png"
import ig from "../assets/icons/instagram.png"
import location from "../assets/icons/gps.png"
import x from "../assets/icons/x.png"
import linkedin from "../assets/icons/linkedin.png"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  
export default function Footer() {
  return (
    <>
      <div className="white bluebg footer d-flex pt-3 pb-3 ps-3 pe-3 align-items-center justify-content-between flex-column flex-md-row" id="footer">
        <div className="icons d-flex ms-auto me-auto me-md-0 ms-md-0">
          <a className="sm-link p-1" href="https://www.facebook.com/profile.php?id=61560709407607&mibextid=LQQJ4d" target="_blank"><img src={fb}/></a>
          <a className="sm-link p-1" href="https://www.instagram.com/daralshamel0?igsh=MWduN2cybzRzaXhqcw==" target="_blank"><img src={ig} /></a>
          <a className="sm-link p-1" href="https://x.com/daralshamel0?s=21&t=BKkL9cmFKq36CFb30P8AFw" target="_blank"><img src={x} /></a>
          <a className="sm-link p-1" href="https://www.linkedin.com/in/dar-alshamel-938502308?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank"><img src={linkedin} /></a>

        </div>
        <div className="cpr text-center text-md-end">Dar Al-Shamel. All Rights Reserved 2024 ©</div>
        <button onClick={topFunction} id="goToTop" className="btn" title="Go to top"><FontAwesomeIcon icon={faArrowUp} /></button>
      </div>
    </>
  );
}
