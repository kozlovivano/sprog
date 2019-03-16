import React, { Component } from 'react';
import { Link } from "react-router-dom";
class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = { 

        };
    }
    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-sm bg-blue navbar-dark">
                    <Link className="navbar-brand" to="/"><h1 className="logo">Sprog</h1></Link>
                    <button 
                        className="navbar-toggler collapsed" 
                        type="button" data-toggle="collapse" 
                        data-target="#navbarCollapse" aria-controls="navbarCollapse" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-collapse collapse" id="navbarCollapse">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item mr-3">
                                <Link className="nav-link" to="/aboutus">About Us</Link>
                            </li>
                            <li className="nav-item mr-3">
                                <Link className="nav-link" to="/faq">FAQ's</Link>
                            </li>
                            <li className="nav-item mr-3">
                                <Link className="nav-link" to="/contactus">Contact Us</Link>
                            </li>
                            <li className="nav-item mr-5">
                                <Link className="nav-link" to="/login">Login</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </React.Fragment>
        );
    }
}

export default NavBar;