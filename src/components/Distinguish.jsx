import OnePoint from "./subcomponents/OnePoint";
import shield from "../assets/icons/shield.png";
import lock from "../assets/icons/lock.png";
import destination from "../assets/icons/destination.png"
import temp from "../assets/icons/cold-black.png"
import tracker from "../assets/icons/tracking.png"
import driver from "../assets/icons/driver.png"
import speed from "../assets/icons/rush.png"
import happy from "../assets/icons/happy.png"
import money from "../assets/icons/money.png"

import sparkle from "../assets/icons/star.png"

export default function Distinguish() {
  return (
    <>
      <div id="distinguish" className="bluebg distinguish pt-5 pb-5">
        <div className="d-flex justify-content-evenly align-items-center flex-column-reverse flex-md-row ">
          <div className="pts p-2 p-md-5 pt-5 transparent floatUp">
            <OnePoint icon={shield} content="شاحنات معتمدة من هيئة الغذاء والدواء" />
            <OnePoint icon={lock} content="تأمين على البضائع" />
            <OnePoint icon={destination} content="تغطية جميع مناطق المملكة" />
            <OnePoint icon={temp} content="تقارير عن درجات الحرارة" />
            <OnePoint icon={tracker} content="التتبع المباشر لجميع الشحانات" />
            <OnePoint icon={driver} content="سائقين مدربين ومؤهلين" />
            <OnePoint icon={speed} content="نقل سريع وآمن" />
            <OnePoint icon={happy} content="خدمة عملاء" />
            <OnePoint icon={money} content="أسعار منافسة" />

          </div>
          <div className="distinguish-title d-flex d-md-block">
            <div className="mb-5 d-none d-md-block"><img src={sparkle} width="50%"/> </div>
            <h2 className="white pt-md-5 pb-4">ما يميزنا</h2>
            <div className="mt-5 text-end d-none d-md-block"><img src={sparkle} width="50%"/> </div>

          </div>
        </div>
      </div>
    </>
  );
}
