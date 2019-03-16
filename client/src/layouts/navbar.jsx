import React, { Component } from 'react';
import logo from '../assets/png/logo.png';
class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = { 

        };
    }
    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-blue navbar-dark">
                <a className="navbar-brand" href="/"><img src={logo} alt="Sprog logo" width="100"></img></a>
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
                        <li className="nav-item active mr-3">
                            <a className="nav-link" href="/aboutus">About Us</a>
                        </li>
                        <li className="nav-item mr-3">
                            <a className="nav-link" href="/faq">FAQ's</a>
                        </li>
                        <li className="nav-item mr-3">
                            <a className="nav-link" href="/contactus">Contact Us</a>
                        </li>
                        <li className="nav-item mr-5">
                            <a className="nav-link" href="/login">Login</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default NavBar;