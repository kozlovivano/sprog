import React, { Component } from 'react';
import { connect } from 'react-redux';
import windowSize from 'react-window-size';
import { Link } from "react-router-dom";

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import Counter from '../../fragments/inputs/counter';
import Position from '../../fragments/inputs/position';
import Business from '../../fragments/business/business';

import './style.css';
class Home extends Component {
    
    render() {
        return (
            <React.Fragment>
                <div className="container mt-5 home">
                    <div className="row">
                        <div className="col-md-6 mt-4">
                            <Counter placeholder="How much would you like to spend?" width={(this.props.windowWidth > 992) ? "60%": "95%"} marginBottom="10px"/>
                            <Counter placeholder="How many children do you have?" width={(this.props.windowWidth > 992) ? "60%": "95%"} marginBottom="10px"/>
                            <Position placeholder="Enter location/Geotag" width={(this.props.windowWidth > 992) ? "60%": "95%"} marginBottom="10px"/>
                            <div className="button-group">
                                <button className="sprog-btn bg-blue">Sprog it</button>
                                <Link to="/filter" className="filter-btn bg-blue">Filter</Link>
                            </div>
                        </div>
                        <div className="col-md-6 text-center">
                            <iframe width="360" height="200" title="Our service" src="https://www.youtube-nocookie.com/embed/cMYasM_o2hU?rel=0&amp;controls=0&amp;showinfo=0&amp;autoplay=1" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
                <div className="businesses-landscape">
                    <OwlCarousel
                        className="owl-theme"
                        loop
                        margin={10}
                        nav
                        items={ (this.props.windowWidth > 992) ? 4 : ((this.props.windowWidth < 768) ? 2 : 3) }
                    >
                        { this.props.businesses.map((business, index) => {
                            return <Business key={ index } business={ business }/>
                        }) }
                    </OwlCarousel>
                </div>
                <div className="businesses-portrait container">
                    <p className="result c-blue">Top picks</p>
                    { this.props.businesses.map((business, index) => {
                        return <Business key={ index } business={ business }/>
                    }) }
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    ...state.home
});

const mapDispatchToProps = dispatch => ({
    
});

export default connect(mapStateToProps, mapDispatchToProps)(windowSize(Home));