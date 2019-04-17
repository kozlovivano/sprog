import React, { Component } from 'react';
import './style.css';
class Check extends Component {
    render() {
        const style = {
            width: this.props.width,
            marginBottom: this.props.marginBottom
        }
        return (
            <React.Fragment>
                {this.props.label && <label htmlFor="Checkbox" className="check" style={ style }>{this.props.label}
                    <input type="checkbox"></input>
                    <span className="checkmark"></span>
                </label>}
                {!this.props.label && <React.Fragment>
                    <label className="check_without_label">
                        <input type="checkbox"></input>
                        <span className="checkmark"></span>
                    </label>
                </React.Fragment>}
            </React.Fragment>
        );
    }
}

export default Check;
