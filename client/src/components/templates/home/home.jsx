import React, { Component } from 'react';
import { connect } from 'react-redux';

import Counter from '../../fragments/inputs/counter';
import Position from '../../fragments/inputs/position';
import Business from '../../fragments/business/business';

import './home.css';
class Home extends Component {
    
    render() {
        console.log(this.props);
        return (
            <div className="container mt-5 home">
                <div className="row">
                    <div className="col-md-6 text-center mt-4">
                        <Counter placeholder="How much would you like to spend?"/>
                        <Counter placeholder="How many children do you have?"/>
                        <Position placeholder="Enter location/Geotag"/>
                        <button className="sprog-btn bg-blue">Sprog it</button>
                    </div>
                    <div className="col-md-6 text-center">
                        <iframe width="360" height="200" title="Our service" src="https://www.youtube-nocookie.com/embed/cMYasM_o2hU?rel=0&amp;controls=0&amp;showinfo=0&amp;autoplay=1" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                    </div>
                </div>
                <div className="businesses">
                    <div className="row">
                        { this.props.businesses.map(business => {
                            return <Business key={ this.props.businesses.indexOf(business) + 1 } business={ business }/>
                        }) }
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    ...state.home
});

const mapDispatchToProps = dispatch => ({
    
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);