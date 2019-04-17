import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import Normal from '../../../fragments/inputs/normal';
import { BUSINESS_MODE } from '../../../../redux/constants/actionTypes';
import './style.css';
class entry extends Component {
    componentWillMount(){
		this.props.onLoad();
	}
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-3"></div>
                    <div className="col-sm-6 text-center">
                        <h3 style={{fontWeight: '600', color: '#666666'}}>"Almost Finished"</h3>
                        <Normal type="text" placeholder="Business Main Address" width="100%" marginBottom="20px"/>
                        <Normal type="text" placeholder="How many business sites?" width="100%" marginBottom="20px"/>
                        <Normal type="text" placeholder="Monthly Subscription" width="100%" marginBottom="20px"/>
                        <Link to="/business/home" className="btn" style={{marginTop: '10px', marginBottom: '10px', width: '160px', fontSize: '18px', fontWeight: '600', color: 'white', backgroundColor: '#4cd53c', borderRadius: '10px'}}>Submit</Link>
                    </div>
                    <div className="col-sm-3"></div>
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
export default connect(mapStateToProps, mapDispatchToProps)(entry);