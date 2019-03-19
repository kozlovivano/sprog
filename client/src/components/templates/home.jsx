import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
    render() {
        console.log(this.props);
        return (
            <div className="container">
                <h1>Home</h1>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = dispatch => ({
    
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);