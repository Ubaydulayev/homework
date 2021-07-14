import "./PageFour.css"
import Frame2 from "../../img/Frame2.png"

function PageFour() {
    return (
        <div className="container">
            <div className="Four">
                <div className="row">
                    <div className="col-lg-7">
                        <img src={ Frame2 } className="frame2" />
                        <p className="text-center text-secondary mt-2">Career page created with Homerun.</p>
                    </div>
                    <div className="col-lg-5 m-0 p-0">
                        <p className="textYellow">Create</p>
                        <p className="bigTextFour">An experience candidates<br/> simply love.</p>
                        <p className="smallTextFour">Treat candidates with a rich career site,<br/> beautiful job posts, tailored application<br/> forms and faster response times.</p>
                        <button className="btn btn-outline-dark btn-light">Learn more</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PageFour