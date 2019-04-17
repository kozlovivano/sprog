import React, { Component } from 'react'
import { connect } from 'react-redux';
import { BUSINESS_MODE } from '../../../../redux/constants/actionTypes';
import './style.css';
class mission extends Component {
    componentWillMount(){
		this.props.onLoad();
	}
    render() {
        const storyList = this.props.aboutus.stories.map(story => (
            <div className="story" key={ story.id }>
                <img className="rounded-sl" src={ story.img } aria-hidden alt="This is alt for about us image"/>
                <h3 className="c-blue text-center mb-4" style={{fontWeight: '600'}}>{ story.title }</h3>
                <div className="mb-5">
                    { story.content.map(val => (<h4 key={story.content.indexOf(val) + 1}>&nbsp;{val}</h4>)) }
                </div>
            </div>
        ))
        return (
            <div id="mission" className="container">
                { storyList }
                <div className="row">
                    <div className="col-md-4">
                        <div className="bg-blue mb-5" style={{width: '240px', height: '240px', borderRadius: '50%', margin: '0 auto'}}></div>
                    </div>
                    <div className="col-md-4">
                        <div className="bg-blue mb-5" style={{width: '240px', height: '240px', borderRadius: '50%', margin: '0 auto'}}></div>
                    </div>
                    <div className="col-md-4">
                        <div className="bg-blue mb-5" style={{width: '240px', height: '240px', borderRadius: '50%', margin: '0 auto'}}></div>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = dispatch => ({
    onLoad: () => 
		dispatch({ type: BUSINESS_MODE })
});

export default connect(mapStateToProps, mapDispatchToProps)(mission);