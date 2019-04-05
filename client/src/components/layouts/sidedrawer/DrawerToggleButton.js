import React from 'react';
import HamburgerMenu from 'react-hamburger-menu';
import './style.css';
const drawerToggleButton = props => (
    <HamburgerMenu
        isOpen={props.status}
        menuClicked={props.click}
        width={32}
        height={20}
        strokeWidth={2}
        rotate={0}
        color='white'
        borderRadius={0}
        animationDuration={0.5}
    />
);

export default drawerToggleButton;