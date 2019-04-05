import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './style.css';

class business extends Component {

    render() {
        return (
            <div className="business item">
                <Link to={"/detail/" + this.props.business.id}><p className="text">{ this.props.business.name + " (" + this.props.business.price_child + "~" + this.props.business.price_adult + ")"}</p></Link>
                <div className="position-relative">
                    <Link to={"/detail/" + this.props.business.id}><img className="rounded-xl" src={ this.props.business.face } aria-hidden alt="Business face"/></Link>
                    <p className="status position-absolute bg-blue rounded-sl text-white">{ this.props.business.status }</p>
                </div>
                <p className="text">Age range</p>
                <div className="row">
                    <div className="col-3">{ (this.props.business.age_range.indexOf("A") !== -1) && <p className="age">0-3</p> }</div>
                    <div className="col-3">{ (this.props.business.age_range.indexOf("B") !== -1) && <p className="age">4-7</p> }</div>
                    <div className="col-3">{ (this.props.business.age_range.indexOf("C") !== -1) && <p className="age">8-11</p> }</div>
                    <div className="col-3">{ (this.props.business.age_range.indexOf("D") !== -1) && <p className="age">12-16</p> }</div>
                </div>
                <p className="text">Distance</p>
                <p className="text">{ this.props.business.distance }</p>
                <div className="price text-center">
                    Child - {this.props.business.price_child}, Adult - {this.props.business.price_adult}
                </div>
                
            </div>
        );
    }
}

export default business;