import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import Normal from '../../../fragments/inputs/normal';
import { BUSINESS_MODE } from '../../../../redux/constants/actionTypes';
import './style.css';
class landing extends Component {
    componentWillMount(){
		this.props.onLoad();
	}
    render() {
        return (
            <React.Fragment>
                <div className="container mb-3">
                    <div className="row">
                        <div className="col-12 col-sm-6 col-md-5 text-center">
                            <h3 className="text-center" style={{fontWeight: '600', color: '#666666'}}>"Insert Text Box"</h3>
                            <div className="form bg-blue" style={{borderRadius: '20px', padding: '10px'}}>
                                <h4 className="text-center" style={{color: 'white', fontWeight: '600'}}>Join Us!</h4>
                                <Normal type="text" placeholder="Business Name" width="100%" marginBottom="10px"/>
                                <Normal type="address" placeholder="Business Address" width="100%" marginBottom="10px"/>
                                <Normal type="text" placeholder="Post Code" width="100%" marginBottom="10px"/>
                                <Normal type="text" placeholder="Person of Contract" width="100%" marginBottom="10px"/>
                                <Normal type="email" placeholder="Contact Email" width="100%" marginBottom="10px"/>
                                <Normal type="text" placeholder="Contact Number" width="100%" marginBottom="20px"/>
                                <Link to="/business/submit" className="btn" style={{marginBottom: '10px', width: '160px', fontSize: '18px', fontWeight: '600', color: 'white', backgroundColor: '#4cd53c', borderRadius: '8px'}}>Start</Link>
                            </div>
                        </div>
                        <div className="col-md-1 d-sm-none d-md-block"></div>
                        <div className="col-sm-6 col-md-6">
                            <iframe style={{marginTop: '60px'}} width="100%" height="355" title="Our service" src="https://www.youtube-nocookie.com/embed/A55YtAKsQW8?rel=1&amp;controls=1&amp;showinfo=0&amp;autoplay=1" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
                <hr style={{borderTop: '10px solid rgba(60, 167, 213, 0.5)', margin: '40px 0'}}/>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 mb-5">
                            <div className="bg-blue" style={{width: '180px', height: '180px', borderRadius: '10px', margin: '0 auto'}}></div>
                        </div>
                        <div className="col-md-4 mb-5">
                            <div className="bg-blue" style={{width: '180px', height: '180px', borderRadius: '10px', margin: '0 auto'}}></div>
                        </div>
                        <div className="col-md-4 mb-5">
                            <div className="bg-blue" style={{width: '180px', height: '180px', borderRadius: '10px', margin: '0 auto'}}></div>
                        </div>
                    </div>
                    <h3 className="text-center mb-5" style={{fontWeight: '600', color: '#666666'}}>"Join us in 3 easy steps"</h3>
                    <div className="row">
                        <div className="col-md-4 mb-5">
                            <div className="bg-blue" style={{width: '240px', height: '240px', borderRadius: '50%', margin: '0 auto'}}></div>
                        </div>
                        <div className="col-md-4 mb-5">
                            <div className="bg-blue" style={{width: '240px', height: '240px', borderRadius: '50%', margin: '0 auto'}}></div>
                        </div>
                        <div className="col-md-4 mb-5">
                            <div className="bg-blue" style={{width: '240px', height: '240px', borderRadius: '50%', margin: '0 auto'}}></div>
                        </div>
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
    onLoad: () => 
		dispatch({ type: BUSINESS_MODE })
});


export default connect(mapStateToProps, mapDispatchToProps)(landing);