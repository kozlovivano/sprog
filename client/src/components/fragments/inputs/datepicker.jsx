import React, { Component } from 'react';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
class SprogDatepicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: null
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
            marginBottom: this.props.marginBottom
        }
        return (
            <div className="datepicker" style={style}>
                <DatePicker
                    placeholderText={this.props.placeholder}
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                    focusOnShow={false}
                    readonly={true}
                />
                <div className="control">
                    <span className="point">
                        <i className="fa fa-calendar-alt"></i>
                    </span>
                </div>
            </div>
        );
    }
}

export default SprogDatepicker;
