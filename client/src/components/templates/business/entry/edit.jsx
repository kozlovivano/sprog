import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import Normal from '../../../fragments/inputs/normal';
import Text from '../../../fragments/inputs/text';
import Check from '../../../fragments/inputs/check';
import SprogDatepicker from '../../../fragments/inputs/datepicker';
import SprogTimepicker from '../../../fragments/inputs/timepicker';
import { BUSINESS_MODE } from '../../../../redux/constants/actionTypes';
import { ADD_CHILD_ADMISSION } from '../../../../redux/constants/actionTypes';

import './style.css';

class editEntry extends Component {
    
    componentWillMount(){
		this.props.onLoad();
    }
    add_child_admission(props){
        props.addChildAdmission();
    }
    render() {
        return (
            <div className="container">
                <h3 style={{fontWeight: '600', color: '#666666'}}>New Submission</h3>
                <div className="row">
                    <div className="col-md-6">
                        <Normal type="text" placeholder="Business Name" width="100%" marginBottom="20px"/>
                        <Text placeholder="Description" rows="6" width="100%" marginBottom="30px"/>
                        <h4>Child Admission <i onClick={() => this.add_child_admission(this.props)} className="fa fa-plus-circle c-blue" style={{fontSize: "30px", marginLeft: "10px"}}></i></h4>
                        <div className="row">
                            <div className="col-3"><h5>Price</h5></div>
                            <div className="col-9"><h5>Age range</h5></div>
                        </div>
                        {this.props.business.count_child_admission.map((item, index) => 
                            <div className="row" key={index}>
                                <div className="col-3"><Normal type="text" placeholder="$0.00" width="100%" marginBottom="20px"/></div>
                                <div className="col-3"><Normal type="text" placeholder="--" width="100%" marginBottom="20px" textAlign="center"/></div>
                                <div className="col-3">To</div>
                                <div className="col-3"><Normal type="text" placeholder="--" width="100%" marginBottom="20px" textAlign="center"/></div>
                            </div>
                        )}
                        <h4>Adult Admission</h4>
                        <div className="row">
                            <div className="col-3"><h5>Price</h5></div>
                        </div>
                        <div className="row">
                            <div className="col-3"><Normal type="text" placeholder="$0.00" width="100%" marginBottom="20px"/></div>
                        </div>
                        <h4>Group Deals</h4>
                        <div className="row">
                            <div className="col-3"><h5>Enable</h5></div>
                            <div className="col-3"><h5>Price</h5></div>
                            <div className="col-3"><h5>Adults</h5></div>
                            <div className="col-3"><h5>Children</h5></div>
                        </div>
                        <div className="row">
                            <div className="col-3"><Check width="100%" marginBottom="30px"/></div>
                            <div className="col-3"><Normal type="text" placeholder="$0.00" width="100%" marginBottom="20px"/></div>
                            <div className="col-3"><Normal type="text" placeholder="--" width="100%" marginBottom="20px" textAlign="center"/></div>
                            <div className="col-3"><Normal type="text" placeholder="--" width="100%" marginBottom="20px" textAlign="center"/></div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h4>Opening Hours</h4>
                        <div className="row">
                            <div className="col-3"><h5>Day</h5></div>
                            <div className="col-3"><h5>Work</h5></div>
                            <div className="col-3"><h5>Open</h5></div>
                            <div className="col-3"><h5>Close</h5></div>
                        </div>
                        {this.props.common.week_days.map((day, index) => 
                            <div className="row mb-2" key={index}>
                                <div className="col-3" style={{lineHeight: '35px', fontSize: '18px'}}>{day}</div>
                                <div className="col-3"><Check width="100%" marginBottom="30px"/></div>
                                <div className="col-3"><SprogTimepicker position="left"/></div>
                                <div className="col-3"><SprogTimepicker position="left"/></div>
                            </div>
                        )}
                        <h4 className="mt-4">Special Event</h4>
                        <div className="row">
                            <div className="col-3"><h5>Enable</h5></div>
                            <div className="col-9"><h5>Start/End date and time</h5></div>
                        </div>
                        <div className="row">
                            <div className="col-3"><Check width="100%" marginBottom="30px"/></div>
                            <div className="col-6"><SprogDatepicker placeholder="Start date" width="100%" marginBottom="20px"/></div>
                            <div className="col-3"><SprogTimepicker position="left"/></div>
                        </div>
                        <div className="row">
                            <div className="col-3"></div>
                            <div className="col-6"><SprogDatepicker placeholder="End date" width="100%" marginBottom="20px"/></div>
                            <div className="col-3"><SprogTimepicker position="left"/></div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-12">
                                <Normal type="text" placeholder="Keyword (10 max)" width="100%" marginBottom="20px"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <h4 className="mt-4">Facilities Available</h4>
                        <div className="row">
                            {this.props.common.facilities.map((facility, index) => 
                                <div className="col-3 mb-3" key={index}>
                                    <div>{facility}</div>
                                    <Check width="100%" marginBottom="30px"/>
                                </div>    
                            )}
                        </div>
                    </div>
                    <div className="col-md-6">
                        <Normal type="text" placeholder="Address Search" width="100%" marginBottom="20px"/>
                        <Normal type="text" placeholder="Post Code" width="100%" marginBottom="20px"/>
                        <Normal type="text" placeholder="Phone Number" width="100%" marginBottom="20px"/>
                        <Normal type="text" placeholder="Direct URL for 'BOOK NOW' button" width="100%" marginBottom="20px"/>
                    </div>
                </div>
                <h4 className="mt-4">Image Upload</h4>
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-3">
                        <div className="bg-blue" style={{
                            width: '200px',
                            height: '200px',
                            margin: '10px auto',
                            cursor: 'pointer',
                            borderRadius: '10px',
                            textAlign: 'center'
                        }}><i className="fa fa-plus-circle" style={{
                            color: 'white',
                            fontSize: '80px',
                            lineHeight: '200px'
                        }}></i></div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3">
                        <div className="bg-blue" style={{
                            width: '200px',
                            height: '200px',
                            margin: '10px auto',
                            cursor: 'pointer',
                            borderRadius: '10px',
                            textAlign: 'center'
                        }}><i className="fa fa-plus-circle" style={{
                            color: 'white',
                            fontSize: '80px',
                            lineHeight: '200px'
                        }}></i></div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3">
                        <div className="bg-blue" style={{
                            width: '200px',
                            height: '200px',
                            margin: '10px auto',
                            cursor: 'pointer',
                            borderRadius: '10px',
                            textAlign: 'center'
                        }}><i className="fa fa-plus-circle" style={{
                            color: 'white',
                            fontSize: '80px',
                            lineHeight: '200px'
                        }}></i></div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3">
                        <div className="bg-blue" style={{
                            width: '200px',
                            height: '200px',
                            margin: '10px auto',
                            cursor: 'pointer',
                            borderRadius: '10px',
                            textAlign: 'center'
                        }}><i className="fa fa-plus-circle" style={{
                            color: 'white',
                            fontSize: '80px',
                            lineHeight: '200px'
                        }}></i></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <Link to="/business/preview" className="btn" style={{marginTop: '20px', marginBottom: '10px', fontSize: '18px', fontWeight: '600', color: 'white', backgroundColor: '#3ca7d5', borderRadius: '10px', width: '100%'}}>Preview Submission</Link>
                    </div>
                    <div className="col-6">
                        <Link to="/business/home" className="btn" style={{marginTop: '20px', marginBottom: '10px', fontSize: '18px', fontWeight: '600', color: 'white', backgroundColor: '#3ca7d5', borderRadius: '10px', width: '100%'}}>Cancel</Link>
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
    onLoad              : () => dispatch({ type: BUSINESS_MODE }),
    addChildAdmission  : () => dispatch({ type: ADD_CHILD_ADMISSION })
});
export default connect(mapStateToProps, mapDispatchToProps)(editEntry);

