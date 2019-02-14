import React from 'react';
import Modal from "../UI/Modal/Modal";
import BuyTicketButton from "./BuyTicketButton/BuyTicketButton";
import BuyTicketResult from "./BuyTicketResult/BuyTicketResult";


function Buy(props) {
    return <div className="Order">
                <BuyTicketButton click={props.purchaseHandler}/>
                <Modal
                    closed={props.closed}
                    show={props.modalShow}
                >
                    <BuyTicketResult
                        tickets={props.tickets}
                        price={props.total}
                        closed={props.closed}
                        buttons={props.buttons}
                        total={props.total}
                    />
                </Modal>
    </div>
}


export default Buy;