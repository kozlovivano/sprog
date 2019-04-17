import React, { Component } from 'react';
import { connect } from 'react-redux';

import Question from '../../../fragments/faqs/question';
import './style.css';
class Faq extends Component {
    render() {
        return (
            <div className="container faq">
                <h5 className="text-center mt-3 mb-3" style={{fontWeight: "700"}}>A little lost? Hopefully you'll find the answers here. If not, please contact us directly. </h5>
                <div className="accordion" id="qa">
                    { 
                        this.props.faqs.map(faq => {
                            return <Question key={this.props.faqs.indexOf(faq)} faq={faq}/>
                        }) 
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    ...state.faq
});

const mapDispatchToProps = dispatch => ({
    
});
export default connect(mapStateToProps, mapDispatchToProps)(Faq);