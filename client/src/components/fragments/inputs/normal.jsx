import React, { Component } from 'react';
import './style.css';
class Normal extends Component {
    render() {
        const style = {
            width: this.props.width,
            marginBottom: this.props.marginBottom
        }
        return (
            <div className="normal" style={style}>
                <input 
                    type={this.props.type} 
                    placeholder={this.props.placeholder}
                    style={{textAlign: this.props.textAlign}}
                />
            </div>
        );
    }
}

export default Normal;
