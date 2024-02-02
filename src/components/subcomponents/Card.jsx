export default function Card({img, content, width}){
    return <>
    <div className="col-8 col-sm-5 col-lg-2 ">


    <div className="service-card text-center d-flex flex-column justify-content-between ps-1 pe-1 pt-4  pt-md-5 pb-4 transparent floatUp mb-4 ms-auto me-auto">
        <div className="service-icon">
            <img src={img} width={width}/>
        </div>
        <div className="service-content white">
            {content}
        </div>
    </div>
    </div>
    </>
}