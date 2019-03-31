import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Readmore from '../../utils/readmore';
import './style.css';

class Businessbig extends Component {

    render() {
        return (
            <div className="business-big item">
                <Link to={"/detail/" + this.props.business.id}><p className="text">{ this.props.business.name }</p></Link>
                <div className="position-relative">
                    <Link to={"/detail/" + this.props.business.id}><img className="rounded-xl" src={ this.props.business.face } aria-hidden alt="Business face"/></Link>
                    <p className="status position-absolute bg-blue rounded-sl text-white">{ this.props.business.status }</p>
                </div>
                <p className="text">Age range</p>
                <div className="row age-range">
                    <div className="col-3">{ (this.props.business.age_range.indexOf("A") !== -1) && <p className="age">0-3</p> }</div>
                    <div className="col-3">{ (this.props.business.age_range.indexOf("B") !== -1) && <p className="age">4-7</p> }</div>
                    <div className="col-3">{ (this.props.business.age_range.indexOf("C") !== -1) && <p className="age">8-11</p> }</div>
                    <div className="col-3">{ (this.props.business.age_range.indexOf("D") !== -1) && <p className="age">12-16</p> }</div>
                </div>
                <p className="text">Distance</p>
                <p className="text">{ this.props.business.distance }</p>
                <div className="description">
                    <Readmore
                        className="read-more-content"
                        charLimit={120}
                        readMoreText="see more"
                        readLessText="less"
                    >
                        { this.props.business.description }
                    </Readmore>
                </div>
                
            </div>
        );
    }
}

export default Businessbig;