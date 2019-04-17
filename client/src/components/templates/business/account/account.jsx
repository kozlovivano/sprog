import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import Normal from '../../../fragments/inputs/normal';
import { BUSINESS_MODE } from '../../../../redux/constants/actionTypes';
import './style.css';

class account extends Component {
    componentWillMount(){
		this.props.onLoad();
	}
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <Normal type="text" placeholder="Business Name" width="100%" marginBottom="20px"/>
                        <Normal type="text" placeholder="Business Address" width="100%" marginBottom="20px"/>
                        <Normal type="text" placeholder="Post Code" width="100%" marginBottom="20px"/>
                        <Normal type="text" placeholder="Monthly Subscription" width="100%" marginBottom="20px"/>
                        <Normal type="text" placeholder="Phone Number" width="100%" marginBottom="20px"/>
                        <Normal type="email" placeholder="Email" width="100%" marginBottom="20px"/>
                        <Normal type="text" placeholder="Web Site" width="100%" marginBottom="20px"/>
                        <Link to="/business/home" className="btn" style={{marginBottom: '10px', width: '160px', fontSize: '18px', fontWeight: '600', color: 'white', backgroundColor: '#4cd53c', borderRadius: '10px'}}>Update</Link>
                        <button className="btn" style={{marginBottom: '10px', width: '160px', fontSize: '18px', fontWeight: '600', color: '#3ca7d5', backgroundColor: 'transparent', borderRadius: '10px', float: 'right'}}>Help & Support</button>
                    </div>
                    <div className="col-sm-6">
                        <Link to="/business/new" className="btn" style={{marginBottom: '10px', fontSize: '18px', fontWeight: '600', color: 'white', backgroundColor: '#3ca7d5', borderRadius: '10px', width: '100%'}}>Entry Submission</Link>
                    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(account);