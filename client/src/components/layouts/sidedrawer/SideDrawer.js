import React from 'react';
import { Link } from "react-router-dom";
import './style.css';
const sideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if(props.show){
        drawerClasses = 'side-drawer open';
    }
    return (
        <nav className={drawerClasses}>
            <ul>
                <li><Link to="/aboutus">About Us</Link></li>
                <li><Link to="/faq">FAQ's</Link></li>
                <li><Link to="/contactus">Contact Us</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </nav>
    )
};

export default sideDrawer;