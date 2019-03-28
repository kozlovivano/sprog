import React, { Component } from 'react';
import { connect } from 'react-redux';

import './style.css';

class AboutUs extends Component {
    render() {
        const storyList = this.props.stories.map(story => (
            <div className="story" key={ story.id }>
                <img className="rounded-sl" src={ story.img } aria-hidden alt="This is alt for about us image"/>
                <h3 className="c-blue text-center mb-4">{ story.title }</h3>
                <div className="mb-5">
                    { story.content.map(val => (<h4 key={story.content.indexOf(val) + 1}>&nbsp;{val}</h4>)) }
                </div>
            </div>
        ))
        return (
            <div id="aboutus" className="container">
                { storyList }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    ...state.aboutus
});

const mapDispatchToProps = dispatch => ({
    
});

export default connect(mapStateToProps, mapDispatchToProps)(AboutUs);