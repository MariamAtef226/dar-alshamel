import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import fb from "../assets/icons/facebook_blue.png";
import ig from "../assets/icons/instagram_blue.png";
import x from "../assets/icons/x_blue.png";
import linkedin from "../assets/icons/linkedin_blue.png";

import logo from "../assets/logo.png";

export default function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-sm">
        <div className="container">
          <button
            className=" d-sm-none ms-auto"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FontAwesomeIcon icon={faBars} className="text-light" />
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <div className="icons d-flex ms-auto me-auto justify-content-center">
              <a
                className="tiny-link p-1"
                href="https://www.facebook.com/profile.php?id=61560709407607&mibextid=LQQJ4d"
                target="_blank"
              >
                <img src={fb} />
              </a>
              <a
                className="tiny-link p-1"
                href="https://www.instagram.com/daralshamel0?igsh=MWduN2cybzRzaXhqcw=="
                target="_blank"
              >
                <img src={ig} />
              </a>
              <a
                className="tiny-link p-1"
                href="https://x.com/daralshamel0?s=21&t=BKkL9cmFKq36CFb30P8AFw"
                target="_blank"
              >
                <img src={x} />
              </a>
              <a
                className="tiny-link p-1"
                href="https://www.linkedin.com/in/dar-alshamel-938502308?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                target="_blank"
              >
                <img src={linkedin} />
              </a>
            </div>
            <ul className="navbar-nav me-md-auto ms-auto mt-2 mt-lg-0 pe-2">
              <li className="nav-item">
                <a className="nav-link" href="#about" aria-current="page">
                  من نحن
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">
                  خدماتنا
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#cars">
                  أسطولنا
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#clients">
                  من نخدم
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#distinguish">
                  ما يميزنا
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  تواصل معنا
                </a>
              </li>
            </ul>

            <div className="d-none d-sm-block logo-container">
              <img src={logo} className="logo" />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
