import React, { Component } from 'react'
import './style.css';

export default class backdrop extends Component {
    render() {
        console.log(this.props);
        return (
            <div className="backdrop" onClick={this.props.click}></div>
        )
    }
}
