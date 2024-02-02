//import {counter} from "../scripts/script"
//mport { useEffect } from "react";

export default function Stats() {
  return (
    <>
      <div className="bluebg pt-5 pb-5 stats">

        <div className="numbers">
          <h2 className="white text-center ">راقب أرقامنا</h2>

          <div className="row d-flex justify-content-center white w-100 ms-auto me-auto text-center pt-5">
            <div className="col-lg-4 box mb-5 counter-mode">
                <div className="ctr">+<span id="c1">0</span></div>
              عدد <br></br>الرحلات
            </div>
            <div className="col-lg-4 box mb-5 counter-mode">
                <div className="ctr">+<span id="c2">0</span></div>
              عدد<br></br> العملاء
            </div>
            <div className="col-lg-4 box mb-5 counter-mode">
            <div className="ctr"><span id="c3">0</span></div>
              عدد <br></br>الشاحنات
            </div>
          </div>
        </div>

        {/* <div id="cars">
            CARS
        </div> */}
      </div>
    </>
  );
}
