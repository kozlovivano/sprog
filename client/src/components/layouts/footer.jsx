import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div 
                className="bg-blue d-sm-none" 
                style={{
                    width: "100%",
                    lineHeight: "50px",
                    color: "#ffffff",
                    textAlign: "center",
                    zIndex: "1",
                    fontWeight: "600",
                    position: "fixed",
                    bottom: "0",
                    boxShadow: "0px -2px 4px 0px rgba(0,0,0,0.45)"
                }}
            >
                &copy;2019 Sprog project.
            </div>
        );
    }
}

export default Footer;