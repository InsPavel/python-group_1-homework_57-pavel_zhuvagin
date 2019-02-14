import React from 'react';


function BuyTicketButton(props) {
    return <button
        className="OrderButton"
        disabled={props.disabled}
        onClick={props.click}
    >BUY NOW</button>
}


export default BuyTicketButton;