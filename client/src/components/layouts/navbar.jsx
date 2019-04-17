import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import DrawerToggleBotton from './sidedrawer/DrawerToggleButton';
import './style.css';
class NavBar extends Component {
    render() {
        return (
            <React.Fragment>
                <header className="toolbar">
                    <nav className="toolbar__navigation">
                        <div className="toolbar__logo">
                            {this.props.common.user_mode && <Link to="/">Sprog</Link>}
                            {this.props.common.business_mode && <Link to="/business">Sprog</Link>}
                        </div>
                        {this.props.common.business_mode && <h5 style={{color: 'white', position: 'absolute', left: '130px'}}>Business</h5>}
                        <div className="spacer"></div>
                        <div className="toolbar_navigation-items d-none d-sm-block">
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
                                        <li><Link to="/business/account">Account settings</Link></li>
                                        <li><Link to="/business/mission">Our mission</Link></li>
                                        <li><Link to="/business/home">Login</Link></li>
                                    </React.Fragment>
                                }
                            </ul>
                        </div>
                        <div className="d-block d-sm-none mr-3">
                            <DrawerToggleBotton status={this.props.sideState} click={this.props.drawerClickHandler}></DrawerToggleBotton>
                        </div>
                    </nav>
                </header>
            </React.Fragment>
        );
    }
}
const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = dispatch => ({
    
});
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);