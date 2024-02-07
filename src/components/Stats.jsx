export default function Stats() {
  return (
    <>
      <div className="bluebg pt-5 stats">

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

        <div id="cars" className="pt-5 pb-5">
            <div className="d-flex flex-column-reverse flex-md-row justify-content-evenly align-items-center">
              <div className="boxes d-flex flex-column transparent floatUp">
                <div className="blackbg white cars-content w-100 p-3 mb-4">فان مبرد حمولة 1.5 طن</div>
                <div className="blackbg white cars-content w-100 p-3 mb-4">دينا تبريد أو تجميد حمولة 4 طن </div>
                <div className="blackbg white cars-content w-100 p-3 mb-4">لوري تبريد أو تجميد حمولة 9 طن</div>
                <div className="blackbg white cars-content w-100 p-3 mb-4">شاحنة تبريد وتجميد حمولة 25 طن</div>
                <div className="blackbg white cars-content w-100 p-3 mb-4">شاحنات مزودة برافعات</div>
              </div>
              <div className="title"><h2 className="white mb-4 mb-md-0">أسطولنا</h2></div>
            </div>
        </div> 
      </div>
    </>
  );
}
