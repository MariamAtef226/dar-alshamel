import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

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
