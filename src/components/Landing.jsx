import landing_img from "../assets/img/landing_bg.jpg";
import mobile_landing from "../assets/img/mobile-landing.jpg";
import ksa_map from "../assets/img/ksa-map.png";
import driver from "../assets/img/saudiglobe.png";
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
      <div className="blackbg pb-5">
        <div className="slogan d-flex blackbg pt-5 pb-2 pb-md-5 justify-content-center align-items-center">
          <div className="w-50 transparent transparent-sm floatUp">
            <img className="view-on-scroll ksa-map" src={ksa_map} width="80%" />
          </div>
          <div className="slogan-text white mt-4 mb-4 pe-3">
            <div>
              نقل<span className="blue"> آمن, </span>
              <br className="d-md-none"/>
              توصيل<span className="blue"> أسرع </span>
            </div>
            <div>
              وتكاليف <span className="blue"> أقل!</span>
            </div>
          </div>
        </div>
        <div className="advice-outer blackbg d-flex align-items-center pt-3 pb-5 ms-auto me-auto justify-content-center">
          <div className="advice pt-2 ">
            <ul>
              <li className="pb-2">وفر تكاليفك مع أرقى شريك لوجيستي موثوق </li>
              <li className="pb-2">فريق عمل متخصص ومتكامل فى تقديم الحلول اللوجستية</li>
              <li className="pb-2">التزام ودقة فى جميع أوقات الرحلات</li>
              <li className="pb-2">تقديم جودة وخدمة مميزة تضمن لك الأمان</li>
            </ul>
          </div>
          <div className="w-50 transparent transparent-sm floatUp text-center d-none d-lg-block">
            <img
              className="view-on-scroll ksa-map"
              src={driver}
              width="50%"
            />
          </div>
        </div>
      </div>
    </>
  );
}
