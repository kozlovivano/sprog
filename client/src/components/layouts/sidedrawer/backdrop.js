import React, { Component } from 'react'
import './style.css';

export default class backdrop extends Component {
    render() {
        return (
            <div className="backdrop" onClick={this.props.click}></div>
        )
    }
}
