import React, { Component } from 'react';
import './style.css';
class Age extends Component {
    
    render() {
        const Item = () => {
            return <React.Fragment>
                <div>
                {
                    [...Array(8)].map((e, i) => {
                        return <span key={i} className="year">{i + 1}</span>
                    })
                }
                </div>
                <div>
                {
                    [...Array(8)].map((e, i) => {
                        return <span key={i + 8} className="year">{i + 9}</span>
                    })
                }
                </div>
            </React.Fragment>
        }
        const style = {
            width: this.props.width,
            marginBottom: this.props.marginBottom
        }
        
        return (
            <div className="age" style={ style }>
                <Item></Item>
            </div>
        );
    }
}

export default Age;
