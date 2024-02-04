import fb from "../assets/icons/facebook.png"
import ig from "../assets/icons/instagram.png"
import location from "../assets/icons/gps.png"

export default function Footer() {
  return (
    <>
      <div className="footer d-flex pt-3 pb-3 ps-3 pe-3 align-items-center justify-content-between">
        <div className="icons d-flex">
          <a className="sm-link p-1" href="#"><img src={fb} width="50px"/></a>
          <a className="sm-link p-1" href="#"><img src={ig} width="50px"/></a>
          <a className="sm-link p-1" href="#"><img src={location} width="50px"/> </a>
        </div>
        <div className="cpr fw-bold">Dar Al-Shamel. All Rights Reserved 2024 ©</div>
      </div>
    </>
  );
}
