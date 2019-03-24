import React, { Component } from 'react';
import './style.css';
class Check extends Component {
    render() {
        const style = {
            width: this.props.width,
            marginBottom: this.props.marginBottom
        }
        return (
            <label htmlFor="Checkbox" className="check" style={ style }>{this.props.label}
                <input type="checkbox"></input>
                <span className="checkmark"></span>
            </label>
        );
    }
}

export default Check;
