import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
    
    render() {
        console.log(this.props);
        return (
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-6 text-center">
                        Search params
                    </div>
                    <div className="col-md-6 text-center">
                        Our video
                    </div>
                </div>
                <div className="sprog">
                    Hi
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