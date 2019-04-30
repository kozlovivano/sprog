import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { FacebookLoginButton } from "react-social-login-buttons";
import { GoogleLoginButton } from "react-social-login-buttons";
import { connect } from 'react-redux';
import { BUSINESS_MODE } from '../../../redux/constants/actionTypes';
import { USER_MODE } from '../../../redux/constants/actionTypes';
import { LOG_IN } from '../../../redux/constants/actionTypes';
import Normal from '../../fragments/inputs/normal';
import Check from '../../fragments/inputs/check';
import './style.css';
class Login extends Component {
    state = {
        action: "login"
    }
    componentWillMount(){
		if(this.props.history.location.pathname.indexOf("user") !== -1){
            this.props.onUser();
        }else{
            this.props.onBusiness();
        }
    }
    handleToggle = () => {
        const action = (this.state.action === "login") ? "register" : "login";
        this.setState({
            action: action
        })
    }
    login = () => {
        this.props.onLogin();
        if(this.props.common.user_mode){
            this.props.history.push('/');
        }else{
            this.props.history.push('/business/home');
        }
    }
    render() {
        return (
            <React.Fragment>
                <div className="login container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="overlay d-none d-sm-block"></div>
                            <div className="wrapper">
                                <div className="row">
                                    <div className={this.props.common.user_mode ? "col-sm-6" : "col-sm-12"}>
                                        {(this.state.action === "login") ? 
                                            <React.Fragment>
                                                <h3 className="c-blue mt-5 mb-3 text-center" style={{fontWeight: "700"}}>Log in</h3>
                                                {this.props.user_mode && 
                                                    <ul className="mb-3" style={{fontSize: "20px"}}>
                                                        <li>It's <span className="c-blue">FREE!</span></li>
                                                        <li>Save your favourites</li>
                                                        <li>Create your personal profile.</li>
                                                        <li>Access future special offers.</li>
                                                    </ul>
                                                }
                                                <Normal type="email" placeholder="Email" width="95%" marginBottom="30px"/>
                                                <Normal type="password" placeholder="Password" width="95%" marginBottom="30px"/>
                                                <Check label="Remember me" width="95%" marginBottom="30px"/>
                                                <button onClick={() => this.login()} className="login-button btn bg-blue" style={{fontWeight: "700"}}>Log in</button>
                                                <Link to={this.props.common.user_mode ? "/user" : "business"}><p className="text-center mt-3" style={{fontSize: "20px"}}>Forgot login details? </p></Link>
                                            </React.Fragment>
                                            : 
                                            <React.Fragment>
                                                <h3 className="c-blue mt-5 mb-3 text-center" style={{fontWeight: "700"}}>Register</h3>
                                                <ul className="mb-3" style={{fontSize: "20px"}}>
                                                    <li>It's <span className="c-blue">FREE!</span></li>
                                                    <li>Save your favourites</li>
                                                    <li>Create your personal profile.</li>
                                                    <li>Access future special offers.</li>
                                                </ul>
                                                <Normal type="email" placeholder="Email" width="95%" marginBottom="30px"/>
                                                <Normal type="email" placeholder="Confirm email" width="95%" marginBottom="30px"/>
                                                <Normal type="password" placeholder="Password" width="95%" marginBottom="30px"/>
                                                <Normal type="password" placeholder="Confirm password" width="95%" marginBottom="30px"/>
                                                <button className="login-button btn bg-blue" style={{fontWeight: "700"}}>Register</button>
                                            </React.Fragment>
                                        }
                                    </div>
                                    {this.props.common.user_mode && 
                                        <div className="col-sm-6 text-center">
                                            <div className="social">
                                                <p className="text-center mt-5 mb-5" style={{fontSize: "20px", fontWeight: "700"}}>Login with social media</p>
                                                <FacebookLoginButton className="social-button"/>
                                                <p className="text-center">or</p>
                                                <GoogleLoginButton className="social-button"/>
                                                {(this.state.action === "login") ? 
                                                    <button className="register-button btn bg-blue" style={{fontWeight: "700"}} onClick={this.handleToggle}>Create account</button>
                                                    :
                                                    <button className="register-button btn bg-blue" style={{fontWeight: "700"}} onClick={this.handleToggle}>Log in to account</button>
                                                }
                                            </div>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4"></div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = dispatch => ({
    onLogin: () => dispatch({ type: LOG_IN }),
    onUser: () => dispatch({ type: USER_MODE }),
    onBusiness: () => dispatch({ type: BUSINESS_MODE }),
});
export default connect(mapStateToProps, mapDispatchToProps)(Login);