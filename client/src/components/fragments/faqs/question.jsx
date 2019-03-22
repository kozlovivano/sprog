import React, { Component } from 'react';

import './style.css';

class Question extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="question bg-blue rounded-sl row ml-1 mr-1">
                    <div className="col-10"><span>{ this.props.faq.question }</span></div>
                    <div className="col-2"><button 
                        className="btn collapsed float-right" 
                        data-toggle="collapse" 
                        data-target={ "#answer_" + this.props.faq.id }
                        aria-expanded="false" 
                        aria-controls={ "answer_" + this.props.faq.id }
                    ><p>+</p></button></div>
                </div>
                <div className="answer collapse" id={ 'answer_' + this.props.faq.id} data-parent="#qa">
                    <p>{ this.props.faq.answer }</p>
                </div>
            </React.Fragment>
        );
    }
}

export default Question;