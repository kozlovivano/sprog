import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { BUSINESS_MODE } from '../../../../redux/constants/actionTypes';
import { REMOVE_ENTRY } from '../../../../redux/constants/actionTypes';
import './style.css';
import logo from './business_logo.png';
class businessHome extends Component {
    componentWillMount(){
		this.props.onLoad();
    }
    removeEntry(id, props){
        props.removeEntry(id);
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
                        <Link className="btn bg-blue" to="/business/account">Account Settings</Link>
                        <Link className="btn bg-blue" to="/business/new">Create New Entry</Link>
                    </div>
                    <div className="col-sm-6 mt-3">
                        <Link to="/business/new" className="btn" style={{marginBottom: '10px', fontSize: '18px', fontWeight: '600', color: 'white', backgroundColor: '#3ca7d5', borderRadius: '10px', width: '100%'}}>Entry Submission</Link>
                        <div className="row">
                            {this.props.business.entries.map((item, index) => {
                                return (
                                    <div className="col-4" key={index} style={{position: 'relative'}}>
                                        <img style={{borderRadius: '8px'}} src={item.img} width="100%" height="200" aria-hidden alt="Entries"/>
                                        <div style={{
                                            position: 'absolute', 
                                            width: '130px', 
                                            height: '30px', 
                                            bottom: '0', 
                                            left: '15px', 
                                            background: 'rgba(255, 255, 255, 0.2)',
                                            borderBottomLeftRadius: '8px',
                                            borderBottomRightRadius: '8px'
                                        }}>
                                            <i onClick={() => this.removeEntry(item.id, this.props)} className="fa fa-times-circle c-blue" style={{fontSize: '20px', float: 'right', lineHeight: '30px', marginRight: '10px'}}></i>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
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
    onLoad: () => dispatch({ type: BUSINESS_MODE }),
    removeEntry: (id) => dispatch({ type: REMOVE_ENTRY, id: id }),
});
export default connect(mapStateToProps, mapDispatchToProps)(businessHome);