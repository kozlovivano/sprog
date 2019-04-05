import React, { Component } from 'react';
import './style.css';
class Footer extends Component {
    render() {
        return (
            <div 
                className="bg-blue footer" 
                style={{
                    width: "100%",
                    lineHeight: "50px",
                    color: "#ffffff",
                    textAlign: "center",
                    fontWeight: "600",
                    padding: "5px"
                }}
            >
                <p style={{lineHeight: "30px", fontSize: "15px", margin: "0", padding: "0"}}>&copy;2019 Sprog project.</p>
                <p style={{lineHeight: "30px", fontSize: "15px", margin: "0", padding: "0"}}>You can visite business page and terms & policy.</p>
            </div>
        );
    }
}

export default Footer;