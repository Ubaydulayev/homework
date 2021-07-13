import "./PageOne.css"
import pictures1 from "../../img/Rectangle.svg"
import pictures2 from "../../img/Rectangle-2.svg"
import pictures3 from "../../img/Rectangle-3.svg"
import pictures4 from "../../img/Rectangle-4.svg"
import pictures5 from "../../img/Rectangle-5.svg"
import pictures6 from "../../img/Rectangle-6.svg"
import pictures7 from "../../img/Rectangle-7.svg"

function PageOne() {
    return(
        <div className="container">
            <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 p-0 m-0">
                    <p className="mainText text-center">Where hiring<br/> comes together.</p>
                    <p className="unnecessaryText text-center">Everything you need to organise your hiring<br/> and make a great impression.</p>
                    <div className="menuPage p-0 m-0">
                        <input placeholder="Work email" className="inputPage" />
                        <button className="buttonPage btn btn-primary">Start free trial</button>
                    </div>
                        <p className="pageSmallText text-center mt-4">Join thousands of teams hiring with Homerun</p>
                    <div className="pictures ms-5">
                        <img src={ pictures1 } />
                        <img src={ pictures2 } />
                        <img src={ pictures3 } />
                        <img src={ pictures4 } />
                        <img src={ pictures5 } />
                        <img src={ pictures6 } />
                        <img src={ pictures7 } />
                    </div>
                </div>
            </div>
                
        </div> 
    );
}

export default PageOne