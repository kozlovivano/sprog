import React, { Component } from 'react';

import './business.css';

class business extends Component {
    render() {
        console.log(this.props.business);
        return (
            <div className="business item">
                <p className="text">{ this.props.business.name }</p>
                <img className="rounded-xl" src={ this.props.business.face } aria-hidden alt="Business face"/>
                <p className="text">Age range</p>
                <div className="row">
                    <div className="col-3">{ (this.props.business.age_range.indexOf("A") !== -1) && <p className="age">0-3</p> }</div>
                    <div className="col-3">{ (this.props.business.age_range.indexOf("B") !== -1) && <p className="age">4-7</p> }</div>
                    <div className="col-3">{ (this.props.business.age_range.indexOf("C") !== -1) && <p className="age">8-11</p> }</div>
                    <div className="col-3">{ (this.props.business.age_range.indexOf("D") !== -1) && <p className="age">12-16</p> }</div>
                </div>
                <p className="text">Distance</p>
                <p className="text">{ this.props.business.distance }</p>
                <p className="description">{ this.props.business.description }</p>
            </div>
        );
    }
}

export default business;