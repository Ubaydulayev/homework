import "./Heading.css"
import logo from "../../img/Rectang.svg"
import { Button } from 'reactstrap';

function Heading() {
    return(
        <div className="header">
            <div className="d-flex justify-content-between align-items-center mt-3 ms-5 me-4">
                <div className="logo">
                    <img src={ logo } className="headerLogo" />
                </div>
                <div className="menu">
                    <a className="btn btn-text">Product</a>
                    <a className="btn btn-text">Templates <span class="badge rounded-pill bg-danger">new</span></a>
                    <a className="btn btn-text">Pricing</a>
                    <a className="btn btn-text">Customers</a>
                    <a className="btn btn-text">Learn</a>
                </div>
                <div className="headerButtons">
                    <Button color="white" className="me-2">Login</Button>
                    <Button color="primary">Start free trial</Button>
                </div>
            </div>
        </div>
    );
}

export default Heading