import React, { Component } from 'react';

class AboutUs extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="container">
                <img className="d-none d-sm-block float-left mr-5 mb-2" src="https://picsum.photos/360/240?random" aria-hidden alt="This is alt for about us image"/>
                <h3 className="c-blue text-center mt-5 mb-4">Our story</h3>
                <h4>&nbsp;"We began in 2018, I had been reconnecting with my eldest son over the past few years and felt he was really struggling to from a relationship with him. I found he was often breaking the bank when seeing him and just doing the same things every time as I really didn't know the area well.</h4>
                <h4>I would discuss this frustration usually the next day at work with Courtney and we both questioned why there couldn't be something so simple? Something that could take all this into account and provide you with places to go?</h4>
                <h4>After months of working on various ideas we founded this platform and now hopefully sprog helps you like its helped us."</h4>
            </div>
        );
    }
}

export default AboutUs;