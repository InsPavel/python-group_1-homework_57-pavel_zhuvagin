import React from "react";
import './Button.css';

const Button = props => (
    <button
        type='button'
        className={'btn btn-' + props.type}
        onClick={() => props.clicked()}
    >{props.label}</button>
);

export default Button;