import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { BUSINESS_MODE } from '../../../../redux/constants/actionTypes';
import './style.css';
import logo from './business_logo.png';
class businessHome extends Component {
    componentWillMount(){
		this.props.onLoad();
	}
    render() {
        return (
            <div className="container business_home">
                <h2 style={{
                    fontWeight: '600',
                    padding: '30px 0px 10px 0px'
                }}>Business name here</h2>
                <div className="row">
                    <div className="col-sm-6">
                        <Link className="btn bg-blue" to="/business/account">View/Amend Entries</Link>
                        <Link className="btn bg-blue" to="/business/new">Create New Entries</Link>
                    </div>
                    <div className="col-sm-6 mt-3">
                        <Link to="/business/new" className="btn" style={{marginBottom: '10px', fontSize: '18px', fontWeight: '600', color: 'white', backgroundColor: '#3ca7d5', borderRadius: '10px', width: '100%'}}>Entry Submission</Link>
                    </div>
                </div>
                <div className="logo">
                    <img src={logo} width='100' height='100' aria-hidden alt="Logo company"/>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = dispatch => ({
    onLoad: () => 
		dispatch({ type: BUSINESS_MODE })
});
export default connect(mapStateToProps, mapDispatchToProps)(businessHome);