import React, { Component } from 'react';
import StickyFooter from 'react-sticky-footer';

class Footer extends Component {
    render() {
        return (
            <StickyFooter
                bottomThreshold={100}
                normalStyles={{
                    backgroundColor: "#3ca7d5",
                    paddingLeft: "20px",
                    paddingRight: "20px",
                    lineHeight: "60px",
                    color: "white",
                    textAlign: "center",
                    fontWeight: "600",
                    zIndex: "2"
                }}
                stickyStyles={{
                    backgroundColor: "#3ca7d5",
                    width: "100%",
                    paddingLeft: "20px",
                    paddingRight: "20px",
                    lineHeight: "60px",
                    color: "white",
                    textAlign: "center",
                    fontWeight: "600",
                    zIndex: "2"
                }}
            >
                &copy;2019 Sprog project
            </StickyFooter>
        );
    }
}

export default Footer;