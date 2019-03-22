import React, { Component } from 'react';
import { connect } from 'react-redux';

import Normal from '../../fragments/inputs/normal';
import Text from '../../fragments/inputs/text';
import Select from '../../fragments/inputs/select';
import './style.css';
class ContactUs extends Component {
    render() {
        return (
            <div className="container contactus mt-5 mb-5">
                <div className="row">
                    <div className="d-sm-none col-sm-6 mb-3">
                        <h1 className="text-center c-blue">Contact Us</h1>
                        <h4 className="text-center">Just like parenting, We here at sprog are continuously learning and trying to improve our service to our customers. </h4>
                        <h4 className="text-center">We welcome any feedback, idea or question you may have for us. Please fill out the form below and one of our team will get back to you. </h4>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <Normal type="text" placeholder="First Name" width="100%" marginBottom="30px"/>
                        <Normal type="text" placeholder="Last Name"  width="100%" marginBottom="30px"/>
                        <Normal type="email" placeholder="Email"  width="100%" marginBottom="30px"/>
                        <Select placeholder="Topics"  width="100%" marginBottom="30px" options={this.props.topics}/>
                        <Text placeholder="Question" rows="4" width="100%" marginBottom="30px"/>
                        <button className="btn bg-blue">Submit</button>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 d-sm-block d-none">
                        <h4 className="text-center">Just like parenting, We here at sprog are continuously learning and trying to improve our service to our customers. </h4>
                        <h4 className="text-center">We welcome any feedback, idea or question you may have for us. Please fill out the form below and one of our team will get back to you. </h4>
                    </div>
                    <div className="col-lg-4 pt-3 d-sm-none d-none d-md-none d-lg-block">
                        <img className="mt-5 rounded-sl" src="https://picsum.photos/360/240?random" aria-hidden alt="Contact us"/>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    ...state.contactus
});

const mapDispatchToProps = dispatch => ({
    
});
export default connect(mapStateToProps, mapDispatchToProps)(ContactUs);