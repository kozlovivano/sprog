import React, { Component } from 'react';
import { connect } from 'react-redux';
import Desktop  from "../../layouts/desktop";
import { Link } from "react-router-dom";
import Businessbig from '../../fragments/business/businessbig';
import Gmap from '../../fragments/inputs/gmap';
import './style.css';

class Result extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container result mb-5">
                    <div className="row">
                        <div className="col-lg-7 text-center mt-3">
                            <h2 className="c-blue">Results</h2>
                            <Link to="/filter" className="bg-blue btn filter-btn">Filter</Link>
                            <div className="business-list">
                                { this.props.businesses.map((business, index) => {
                                    return <Businessbig key={ index } business={ business }/>
                                }) }
                            </div>
                        </div>
                        <div className="col-lg-1"></div>
                        <div className="col-lg-4">
                            <div className="map">
                                <Gmap/>
                            </div>
                        </div>
                    </div>
                </div>
                <Desktop></Desktop>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    ...state.result
});

const mapDispatchToProps = dispatch => ({
    
});
export default connect(mapStateToProps, mapDispatchToProps)(Result);