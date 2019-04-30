import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import DrawerToggleBotton from './sidedrawer/DrawerToggleButton';
import { LOG_OUT } from '../../redux/constants/actionTypes';
import './style.css';

class NavBar extends Component {
    logout = () => {
        this.props.onLogout();
    }
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
                                        {!this.props.common.logged_in ? <li><Link to="/user/login">Log in</Link></li> : <li><button className="bg-blue" onClick={() => this.logout()}>Log out</button></li>}
                                    </React.Fragment>
                                }
                                {
                                    this.props.common.business_mode && 
                                    <React.Fragment>
                                        <li><Link to="/user">User</Link></li>
                                        <li><Link to="/business/mission">Our mission</Link></li>
                                        {!this.props.common.logged_in ? <li><Link to="/business/login">Log in</Link></li> : <li><button className="bg-blue" onClick={() => this.logout()}>Log out</button></li>}
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
    onLogout: () => dispatch({ type: LOG_OUT }),
});
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);