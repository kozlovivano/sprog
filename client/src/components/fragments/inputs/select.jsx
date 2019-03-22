import React, { Component } from 'react';
import './style.css';
class Select extends Component {
    render() {
        const style = {
            width: this.props.width,
            marginBottom: this.props.marginBottom
        }
        return (
            <div className="select" style={style}>
                <select>
                    <option value="-1">{this.props.placeholder}</option>
                    {this.props.options.map((option, index) => <option key={index}>{option.value}</option>)}
                </select>
            </div>
        );
    }
}

export default Select;
