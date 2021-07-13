import "./PageTwo.css"
import image from "../../img/Rectangle.png"
import { FaRegPlayCircle } from 'react-icons/fa';

function PageTwo() {
    return (
        <>
                <h1 className="pageTwoText text-center mt-5">How Homerun works</h1>
                <div className="playPage shadow p-2 pt-3">
                    <p className="seconds text-center"><FaRegPlayCircle className="playFont" /> Watch: Homerun in 90 seconds</p>
                </div>
                <div className="image d-flex justify-content-center mt-5 mb-5">
                    <img src={ image } />
                </div>
        </>
    );
}

export default PageTwo