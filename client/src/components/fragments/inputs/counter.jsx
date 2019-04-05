import React, { Component } from 'react';
import './style.css';
class Counter extends Component {
    render() {
        const style = {
            width: this.props.width,
            marginBottom: this.props.marginBottom
        }
        return (
            <div className="counter" style={style}>
                <input type="text" placeholder={this.props.placeholder}/>
                <div className="control">
                    <span className="minus"><i className="fa fa-minus"></i></span>
                    <span className="plus"><i className="fa fa-plus"></i></span>
                </div>
            </div>
        );
    }
}

export default Counter;
