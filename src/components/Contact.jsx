import phone from "../assets/icons/phone-ringing.png";
import email from "../assets/icons/email.png";
import pin from "../assets/icons/home-pin.png";

export default function Contact() {
  return (
    <>
      <div id="contact" className="contact blackbg text-center pt-5 pb-5">
        <h2 className="contact-us white"> تواصل معنا </h2>
        <div className="d-flex justify-content-evenly mt-5 w-100 flex-column flex-md-row">



          <div className="email pb-4">
            <img src={email} width="150px" />
            <div className="white pt-4 contact-content pb-4">البريد الإلكتروني</div>
            <div className="white fw-light contact-details">
            test@mail.com
            </div>
          </div>


          <div className="address pb-4">
            <img src={pin} width="150px" />
            <div className="white pt-4 pb-4 contact-content">
              العنوان
            </div>
            <div className="white fw-light contact-details">
              الرياض, السلي <br></br> أبي عبيدة عامر ابن الجراح
            </div>
          </div>


          <div className="phone pb-4">
            <img src={phone} width="150px" />
            <div className="white pt-4 pb-4 contact-content">أرقام التليفون</div>
            <div className="white fw-light contact-details-phone">
            قسم المبيعات &nbsp;&nbsp;            0552801000<br>
            </br>
            خدمة العملاء &nbsp; &nbsp; 0595007500
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
