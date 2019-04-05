import React from 'react';
import './style.css';
const backdrop = props => (
    <div className="backdrop" onClick={props.click}></div>
);

export default backdrop;