import React from 'react';

function Ticket(props){
    return <div className='ticket'>
                <div className="card">
                    <div className="card-body">
                        <img src='http://www.t-mobilearena.com/assets/img/18-ENT-04399-0002-Metallica-TMA-Main-Event-1320x560-v02-b3cccf4926.jpg'
                        className="card-img-top"/>
                        <h5 className="card-title">Концерт группы "Metallica"</h5>
                        <div className='ticket'>{props.children}</div>
                        <p className="total">Итого: {props.total}</p>
                    </div>
                </div>
    </div>
}

export default Ticket;