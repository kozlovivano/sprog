import React, { Component } from 'react';
import HamburgerMenu from 'react-hamburger-menu';
import './style.css';
export default class drawerToggleButton extends Component {
    render() {
        return (
            <HamburgerMenu
                isOpen={this.props.status}
                menuClicked={this.props.click}
                width={32}
                height={20}
                strokeWidth={2}
                rotate={0}
                color='white'
                borderRadius={0}
                animationDuration={0.5}
            />
        )
    }
}
