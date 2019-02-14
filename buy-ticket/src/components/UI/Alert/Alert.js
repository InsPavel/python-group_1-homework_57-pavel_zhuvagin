import React from 'react';
import './Alert.css'

const Alert = props => (
    <div className={['Alert', props.type].join(' ')}>
        {props.children}
        <button className={'Close' + (!props.dismiss ? ' Close-show' : '')} onClick={props.dismiss}>x</button>
    </div>
);

export default Alert;