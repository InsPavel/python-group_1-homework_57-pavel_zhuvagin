import React from 'react';
import Button from '../../UI/Button/Button';


const BuyTicketResult = props => {
    const ticketResult = props.tickets.map(category => {
        return <div>
            <li key={category.name}>
                <p style={{textTransform: 'capitalize'}}>Категория: {category.name}</p>
                <p>Количество билетов: {category.amount}</p>
            </li>
        </div>
    });

    return (
        <div>
            <button className='close_button' onClick={props.closed}>X</button>
            <h3>Ваши билеты</h3>
            <ul>
                {ticketResult}
            </ul>
            <p><strong>Total Price: {props.total} USD</strong></p>
            {props.buttons.map((button, id) =>
            <Button {...button} key={id}/>
    )}
        </div>
    )
};


export default BuyTicketResult;