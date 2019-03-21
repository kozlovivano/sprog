import React, { Component } from 'react';
import ReadMoreAndLess from 'react-read-more-less';

import './business.css';

class business extends Component {
    render() {
        return (
            <div className="business item">
                <p className="text">{ this.props.business.name }</p>
                <div className="position-relative">
                    <img className="rounded-xl" src={ this.props.business.face } aria-hidden alt="Business face"/>
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
                <div className="description">
                    <ReadMoreAndLess
                        ref={this.ReadMore}
                        className="read-more-content description"
                        charLimit={120}
                        readMoreText="see more"
                        readLessText="less"
                    >
                        { this.props.business.description }
                    </ReadMoreAndLess>
                </div>
            </div>
        );
    }
}

export default business;