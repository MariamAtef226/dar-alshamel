import factory from "../assets/icons/factory.png";
import food from "../assets/icons/food.png";
import medical from "../assets/icons/medical.png";

export default function Clients() {
  return (
    <div className="clients blackbg pt-5 pb-5" id="clients">
      <h2 className="text-center white mb-0">من نخدم</h2>

      <div className="client-types d-flex flex-column flex-md-row pt-5 mt-3 mt-md-5 justify-content-evenly pb-4">
        
        <div className="one-client d-flex flex-column align-items-center w-100 pb-5 transparent floatUp">
          {/* <div className="container-client bluebg p-5 text-center pt-auto pb-0 ms-auto me-auto"> */}
            <img src={factory} className="ms-auto me-auto" width="40%" />
          {/* </div> */}
          <div className="content-client white mt-2">القطاعات الصناعية</div>
        </div>

        <div className="one-client d-flex flex-column align-items-center w-100 pb-5 transparent floatUp">
          {/* <div className="container-client bluebg p-5 text-center pt-auto pb-0 ms-auto me-auto"> */}
            <img src={medical} className="ms-auto me-auto" width="40%"/>
          {/* </div> */}
          <div className="content-client white  mt-2">القطاعات الطبية</div>
        </div>

        <div className="one-client d-flex flex-column align-items-center w-100 transparent floatUp">
          {/* <div className="container-client bluebg p-5 text-center pt-auto pb-0  ms-auto me-auto"> */}
            <img src={food} className="ms-auto me-auto" width="40%"/>
          {/* </div> */}
          <div className="content-client white  mt-2">القطاعات الغذائية</div>
        </div>
      </div>
    </div>
  );
}
