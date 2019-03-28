import React, { Component } from 'react';

class Search extends Component {
    render() {
        const style = {
            width: this.props.width,
            marginBottom: this.props.marginBottom
        }
        return (
            <div className="search" style={style}>
                <input type="text" placeholder={this.props.placeholder}/>
                <div className="control">
                    <span className="point">
                        <i className="fas fa-search"></i>
                    </span>
                </div>
            </div>
        );
    }
}

export default Search;
