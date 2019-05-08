import React, { Component } from 'react';
import './style.css';
class Counter extends Component {
    constructor(props){
        super(props);
        this.state = {value: ''};
    }
    handleChange = (e) => {
        this.setState({value: e.target.value});
    }
    increament = (e) => {
        this.setState({
            value: (this.props.type === 'currency') ? ((this.state.value) !== '') ? parseFloat(this.state.value) + parseFloat(this.props.interval) : parseInt(this.props.interval) : ((this.state.value) !== '') ? parseInt(this.state.value) + parseInt(this.props.interval) : parseInt(this.props.interval)
        })
    }
    decreament = (e) => {
        this.setState({
            value: ((parseFloat(this.state.value) - parseFloat(this.props.interval)) > 0) ? (this.props.type === 'currency') ? ((this.state.value) !== '') ? parseFloat(this.state.value) - parseFloat(this.props.interval) : parseInt(this.props.interval) : ((this.state.value) !== '') ? parseInt(this.state.value) - parseInt(this.props.interval) : parseInt(this.props.interval) : 0
        })
    }
    render() {
        const style = {
            width: this.props.width,
            marginBottom: this.props.marginBottom
        }
        return (
            <div className="counter" style={style}>
                <input type='number' value={this.state.value} min='0' placeholder={this.props.placeholder} onChange={this.handleChange}/>
                <div className="control">
                    <span className="minus" onClick={this.decreament}><i className="fa fa-minus"></i></span>
                    <span className="plus" onClick={this.increament}><i className="fa fa-plus"></i></span>
                </div>
            </div>
        );
    }
}

export default Counter;
