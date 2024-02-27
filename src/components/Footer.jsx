import fb from "../assets/icons/facebook.png"
import ig from "../assets/icons/instagram.png"
import location from "../assets/icons/gps.png"

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
          <a className="sm-link p-1" href="#footer"><img src={fb}/></a>
          <a className="sm-link p-1" href="#footer"><img src={ig} /></a>
          <a className="sm-link p-1" href="#footer"><img src={location}/> </a>
        </div>
        <div className="cpr text-center text-md-end">Dar Al-Shamel. All Rights Reserved 2024 ©</div>
        <button onClick={topFunction} id="goToTop" className="btn" title="Go to top"><FontAwesomeIcon icon={faArrowUp} /></button>
      </div>
    </>
  );
}
