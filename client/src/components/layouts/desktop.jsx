import React, { Component } from 'react';

class Desktop extends Component {
    render() {
        return (
            <div 
                className="bg-blue d-none d-sm-none d-md-block" 
                style={{
                    width: "100%",
                    position: "fixed",
                    bottom: "0",
                    height: "270px",
                    zIndex: "0"
                }}
            >
            </div>
        );
    }
}

export default Desktop;