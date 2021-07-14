import "./PageThree.css"
import Frame from "../../img/Frame.png"

function PageThree() {
    return (
        <div className="container">
            <div className="Three">
                <div className="row">
                    <div className="col-lg-6 mb-5">
                        <p className="textGreen">Hire</p>
                        <p className="bigTextThree">An all-in-one tool for your entire team.</p>
                        <p className="smallTextThree">No more ping-ponging between emails, spreadsheets, and other apps. Bring everything together in one place.</p>
                        <button className="btn btn-outline-dark btn-light">Learn more</button>
                    </div>
                    <div className="col-lg-6">
                        <img src={ Frame } className="frame" />
                        <p className="text-center text-secondary mt-2">All your jobs, candidates, messages and notes in one place.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PageThree