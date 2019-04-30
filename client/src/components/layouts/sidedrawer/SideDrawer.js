import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import './style.css';

class SideDrawer extends Component {
    render() {
        let drawerClasses = 'side-drawer';
        if(this.props.show){
            drawerClasses = 'side-drawer open';
        }
        return (
            <React.Fragment>
                <nav className={drawerClasses}>
                    <ul>
                    {
                        this.props.common.user_mode && 
                        <React.Fragment>
                            <li><Link to="/business">Business</Link></li>
                            <li><Link to="/user/aboutus">About Us</Link></li>
                            <li><Link to="/user/faq">FAQ's</Link></li>
                            <li><Link to="/user/contactus">Contact Us</Link></li>
                            <li><Link to="/user/login">Login</Link></li>
                        </React.Fragment>
                    }
                    {
                        this.props.common.business_mode && 
                        <React.Fragment>
                            <li><Link to="/user">User</Link></li>
                            <li><Link to="/business/mission">Our mission</Link></li>
                            <li><Link to="/business/login">Login</Link></li>
                        </React.Fragment>
                    }
                    </ul>
                </nav>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = dispatch => ({
    
});
export default connect(mapStateToProps, mapDispatchToProps)(SideDrawer);