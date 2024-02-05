import van from "../assets/img/company-truck.png";

export default function About() {
  return (
    <>
      <div id="about" className="bluebg d-flex align-items-center justify-content-center pt-5 pb-5 about ps-4 pe-4">
        <div className="van-container transparent transparent-sm floatLeft d-none d-md-block">
          <img src={van} width="100%" />
        </div>
        <div className="content bluebg">
          <h2 className="white">من نحن؟</h2>
          <p className="pt-4">
            دار الشامل شركة سعودية رائدة فى تقديم الخدمات اللوجستية والنقل
            المبرد والمجمد والجاف بين وداخل المدن. <br></br>تتركز منذ نشأتها على
            توفير الاحتياجات والحلول اللازمة للقطاعات (الصحية - الصناعية -
            الغذائية) لنضمن لهم شبكة نقل متنوعة من جميع أنواع الشاحنات مزودة
            بأحدث التقنيات والجودة العالية لتقدم تجربة متميزة وفائقة. كما يتكون
            فريق عمل الشركة من خبراء متخصصين ومدربين على أعلى مستوى ويستخدمون
            أفضل التقنيات والحلول المعلوماتية.
          </p>
          <div className="d-flex align-items-center flex-column flex-md-row">
            <h4 className="white mb-3 mb-md-auto ps-md-4 mb-0">
              ترغب فى معرفة المزيد؟
            </h4>
            <button className="btn btn-dark">
              <a className="white" href="">
                معلومات أكثر
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
