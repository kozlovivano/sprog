import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import './style.css';
class SprogTimepicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: new Date()
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(date) {
        this.setState({
            startDate: date
        });
    }
    render() {
        const style = {
            width: this.props.width,
            marginBottom: this.props.marginBottom,
            float: this.props.position
        }
        return (
            <div className="timepicker" style={style}>
                <DatePicker
                    placeholderText={this.props.placeholder}
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={15}
                    dateFormat="HH:mm"
                    timeCaption="Time"
                />
            </div>
        );
    }
}

export default SprogTimepicker;
