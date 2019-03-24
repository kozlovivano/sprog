import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Desktop  from "../../layouts/desktop";
import { FacebookLoginButton } from "react-social-login-buttons";
import { GoogleLoginButton } from "react-social-login-buttons";

import Normal from '../../fragments/inputs/normal';
import Check from '../../fragments/inputs/check';
import './style.css';
class Login extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="login container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="overlay d-none d-sm-block"></div>
                            <div className="wrapper">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <h3 className="c-blue mt-5 mb-3 text-center">Login</h3>
                                        <ul className="mb-3 d-none d-sm-block">
                                            <li>It's <span className="c-blue">FREE!</span></li>
                                            <li>Save your favourites</li>
                                            <li>Create your personal profile.</li>
                                            <li>Access future special offers.</li>
                                        </ul>
                                        <Normal type="email" placeholder="Email" width="95%" marginBottom="30px"/>
                                        <Normal type="password" placeholder="Password" width="95%" marginBottom="30px"/>
                                        <Check label="Remember me" width="95%" marginBottom="30px"/>
                                        <button className="login-button btn bg-blue">Log in</button>
                                        <Link to="/"><p className="text-center mt-3">Forgot login details? </p></Link>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="social mt-5">
                                            <p className="text-center mt-5 mb-5">Login with social media</p>
                                            <FacebookLoginButton className="social-button"/>
                                            <p className="text-center">or</p>
                                            <GoogleLoginButton className="social-button"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4"></div>
                    </div>
                </div>
                <Desktop></Desktop>
            </React.Fragment>
        );
    }
}

export default Login;