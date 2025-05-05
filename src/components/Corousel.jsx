import { Link } from "react-router-dom";
const Corousel = () => {
    return ( 
        <div>
    <section className="row">
        <div className="col-md-12">
            <div className="carousel slide" id="mycarousel" data-bs-ride="carousel">    
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="images/dog training 5.jpg" height="700px" alt="" className="d-block w-100"/>
                    </div>
                    <div className="carousel-item">
                        <img src="images/dog tr1 .jpg" height="700px" alt="" className="d-block w-100"/>
                    </div>
                    <div className="carousel-item">
                        <img src="images/dog training 7.jpg" height="700px" alt="" className="d-block w-100"/>
                    </div>
                <div className="carousel-caption  text-warning">
                    <h2>Special Offer</h2>
                    <p className="text-danger"><i>Offer! Offer!</i></p>
                    <p>Buy one Dog with a 15% Discount</p>
                </div>
                </div>

                <Link to="#mycarousel" className="carousel-control-prev" role="button" data-bs-slide="prev">
                    <b className="bg-danger"><span className="carousel-control-prev-icon"></span></b>
                </Link>
                <Link to="#mycarousel" className="carousel-control-next" role="button" data-bs-slide="next">
                    <b className="bg-danger"><span className="carousel-control-next-icon"></span></b>
                </Link>

                <ol className="carousel-indicators">
                    <li data-bs-slide-to="0" data-bs-target="#mycarousel" className="active"></li>
                    <li data-bs-slide-to="1" data-bs-target="#mycarousel"></li>
                    <li data-bs-slide-to="2" data-bs-target="#mycarousel"></li>
                </ol>
            </div>
        </div>
    </section>
</div>

     );
}
 
export default Corousel;