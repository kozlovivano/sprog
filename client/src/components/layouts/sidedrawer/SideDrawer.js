import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { LOG_OUT } from '../../../redux/constants/actionTypes';
import './style.css';

class SideDrawer extends Component {
    logout = () => {
        this.props.onLogout();
    }
    handleClick = () => {
        console.log(this.props);
    }
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
                            <li><Link onClick={this.handleClick} to="/business">Business</Link></li>
                            <li><Link onClick={this.handleClick} to="/user/aboutus">About Us</Link></li>
                            <li><Link onClick={this.handleClick} to="/user/faq">FAQ's</Link></li>
                            <li><Link onClick={this.handleClick} to="/user/contactus">Contact Us</Link></li>
                            {!this.props.common.logged_in ? <li><Link onClick={this.handleClick} to="/user/login">Log in</Link></li> : <li><button className="bg-blue" onClick={() => this.logout()}>Log out</button></li>}
                        </React.Fragment>
                    }
                    {
                        this.props.common.business_mode && 
                        <React.Fragment>
                            <li><Link onClick={this.handleClick} to="/user">User</Link></li>
                            <li><Link onClick={this.handleClick} to="/business/mission">Our mission</Link></li>
                            {!this.props.common.logged_in ? <li><Link onClick={this.handleClick} to="/business/login">Log in</Link></li> : <li><button className="bg-blue" onClick={() => this.logout()}>Log out</button></li>}
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
    onLogout: () => dispatch({ type: LOG_OUT }),
});
export default connect(mapStateToProps, mapDispatchToProps)(SideDrawer);