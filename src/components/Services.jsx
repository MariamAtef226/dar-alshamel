import Card from "./subcomponents/Card";
import thermometer from "../assets/icons/cold.png"
import snow from "../assets/icons/snowflake.png"
import truck from "../assets/icons/truck.png"
import clock from "../assets/icons/wall-clock.png"

export default function Services() {
  return (
    <>
      <div id="service" className="services blackbg pt-5 pb-5">
        <h2 className="white text-center pb-5">خدماتنا</h2>
        <div className="d-flex row w-100 justify-content-md-evenly ps-4 pe-4 justify-content-center ms-auto me-auto">
          <Card img={thermometer} content="النقل المبرد من صفر إلى 25" width="35%"/>
          <Card img={snow} content="النقل المجمد من صفر إلى سالب 20"  width="35%"/>
          <Card img={clock} content="توصيل بأقل من 24 ساعة" width="30%"/>
          <Card img={truck} content="الإيجار الشهري داخل وخارج المدن" width="55%"/>
        </div>
      </div>
    </>
  );
}
