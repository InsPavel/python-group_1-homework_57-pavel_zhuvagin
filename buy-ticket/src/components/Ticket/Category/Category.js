import React from 'react';

function Category(props){
    const {name, price, label, amount, total} = props.category;
    let disabled = amount <= 0;

    return <div className="buy_ticket">
        <div className="category">
            <p>Категория: {label}</p>
            <p>Цена: {price}</p>
            <p>Количество: x{amount}</p>
        </div>
            <button onClick={() => props.changeCountTicket(name, -1)} disabled={disabled}>Убавить</button>
            <button onClick={() => props.changeCountTicket(name, +1)}>Купить</button>
            <p>Сумма: {total}</p>
    </div>
}

export default Category;