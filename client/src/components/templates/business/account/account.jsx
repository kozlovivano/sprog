import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import Normal from '../../../fragments/inputs/normal';
import { BUSINESS_MODE } from '../../../../redux/constants/actionTypes';
import { REMOVE_ENTRY } from '../../../../redux/constants/actionTypes';
import './style.css';
import logo from '../home/business_logo.png';
class account extends Component {
    componentWillMount(){
		this.props.onLoad();
    }
    removeEntry(item, props){
        confirmAlert({
            title: 'Remove entry',
            message: 'Are you sure to remove this entry?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => props.removeEntry(item.id)
                },
                {
                    label: 'No'
                }
            ]
        });
    }
    editItem(item, props){
        props.history.push('/business/edit_entry/' + item.id);
    }
    previewItem(item, props){
        props.history.push('/business/preview/');
    }
    render() {
        return (
            <div className="container account">
                <h2 className="title" style={{fontWeight: '600', color: 'rgb(102, 102, 102)'}}>Business name here</h2>
                <div className="row">
                    <div className="col-sm-6 mt-3">
                        <Normal type="text" placeholder="Business Name" width="100%" marginBottom="10px"/>
                        <Normal type="address" placeholder="Business Address" width="100%" marginBottom="10px"/>
                        <Normal type="number" placeholder="Post Code" width="100%" marginBottom="10px"/>
                        <Normal type="number" placeholder="Monthly Subscription" width="100%" marginBottom="10px"/>
                        <Normal type="number" placeholder="Phone Number" width="100%" marginBottom="10px"/>
                        <Normal type="email" placeholder="Email" width="100%" marginBottom="10px"/>
                        <Normal type="text" placeholder="Web Site" width="100%" marginBottom="10px"/>
                        <Link to="/business/home" className="btn" style={{marginBottom: '10px', width: '160px', fontSize: '18px', fontWeight: '600', color: 'white', backgroundColor: '#4cd53c', borderRadius: '10px'}}>Update</Link>
                        <button className="btn" style={{margin: '15px 0px', marginBottom: '10px', width: '160px', fontSize: '18px', fontWeight: '600', color: '#3ca7d5', backgroundColor: 'transparent', borderRadius: '10px', float: 'right'}}>Help & Support</button>
                    </div>
                    <div className="col-sm-6 mt-3">
                        <div style={{marginBottom: '10px', fontSize: '22px', fontWeight: '600', width: '100%', textAlign: 'center'}}>Live entries</div>
                        <div className="row">
                            {this.props.business.entries.map((item, index) => {
                                return (
                                    <div className="col-6 col-sm-4" key={index} style={{position: 'relative'}}>
                                        <img 
                                            style={{
                                                borderRadius: '8px', 
                                                marginTop: '10px',
                                                cursor: 'pointer'
                                            }} 
                                            src={item.img} 
                                            width="100%" 
                                            height="150" 
                                            aria-hidden alt="Entries"
                                            onClick={() => this.previewItem(item, this.props)}
                                        />
                                        <div style={{
                                            position: 'absolute', 
                                            width: 'calc(100% - 30px)', 
                                            height: '30px', 
                                            bottom: '0',
                                            borderBottomLeftRadius: '8px',
                                            borderBottomRightRadius: '8px',
                                            background: 'rgba(0, 0, 0, 0.5)'
                                        }}>
                                            <i onClick={() => this.editItem(item, this.props)} className="fa fa-edit" style={{fontSize: '20px', float: 'left', lineHeight: '30px', marginLeft: '10px', color: 'white', cursor: 'pointer'}}></i>
                                            <i onClick={() => this.removeEntry(item, this.props)} className="fa fa-times" style={{fontSize: '20px', float: 'right', lineHeight: '30px', marginRight: '10px', color: 'white', cursor: 'pointer'}}></i>
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

export default connect(mapStateToProps, mapDispatchToProps)(account);