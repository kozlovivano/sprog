import React, { Component } from 'react';
import './style.css';
class Text extends Component {
    render() {
        const style = {
            width: this.props.width,
            marginBottom: this.props.marginBottom
        }
        return (
            <div className="textarea" style={style}>
                <textarea cols={this.props.cols} rows={this.props.rows} placeholder={this.props.placeholder}></textarea>
            </div>
        );
    }
}

export default Text;
