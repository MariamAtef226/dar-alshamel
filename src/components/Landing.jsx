import landing_img from "../assets/img/landing_bg.jpg";
import mobile_landing from "../assets/img/mobile-landing.jpg";
import ksa_map from "../assets/img/ksa-map.jpg"

import { useEffect, useState } from "react";

export default function Landing() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      <div className="landing">
        <div className={"landing-img fade-in " + (loaded ? "active" : "")}>
          <img src={landing_img} width="100%" className="d-none d-md-inline" />
          {/*desktop view*/}
          <img src={mobile_landing} width="100%" className="d-md-none" />
          {/*mobile view*/}
        </div>
      </div>

      <div className="slogan d-flex blackbg pt-5 pb-5 justify-content-center align-items-center">
        <div className="w-50 transparent transparent-sm floatUp">
          <img className="view-on-scroll ksa-map" src={ksa_map} width="80%"/>
        </div>
        <div className="slogan-text white mt-4 mb-4 pe-3">
          <div>
            نقل<span className="blue"> آمن, </span>
            توصيل<span className="blue"> أسرع </span>
          </div>
          <div>
            وتكاليف <span className="blue"> أقل!</span>
          </div>
        </div>
      </div>
    </>
  );
}
