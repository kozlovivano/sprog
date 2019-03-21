import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div 
                className="bg-blue" 
                style={{
                    width: "100%",
                    lineHeight: "60px",
                    color: "#ffffff",
                    textAlign: "center",
                    zIndex: "1",
                    fontWeight: "600"
                }}
            >
                &copy;2019 Sprog project.
            </div>
        );
    }
}

export default Footer;