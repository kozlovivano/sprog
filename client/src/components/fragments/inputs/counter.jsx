import React, { Component } from 'react';
import './style.css';
class Counter extends Component {
    render() {
        return (
            <div className="counter">
                <input type="text" placeholder={this.props.placeholder}/>
                <div className="control">
                    <span className="minus">-</span>
                    <span className="plus">+</span>
                </div>
            </div>
        );
    }
}

export default Counter;
