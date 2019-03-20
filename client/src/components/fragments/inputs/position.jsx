import React, { Component } from 'react';

class Position extends Component {
    render() {
        return (
            <div className="position">
                <input type="text" placeholder={this.props.placeholder}/>
                <div className="control">
                    <span className="point c-blue">
                        <i className="fas fa-map-marker-alt"></i>
                    </span>
                </div>
            </div>
        );
    }
}

export default Position;
