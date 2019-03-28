import React, { Component } from 'react';
import './style.css';
class Label extends Component {
    render() {
        const style = {
            width: this.props.width,
            marginBottom: this.props.marginBottom,
            float: this.props.position
        }
        return (
            <div className="label" style={style}>
                <span>{this.props.text}</span>
            </div>
        );
    }
}

export default Label;
