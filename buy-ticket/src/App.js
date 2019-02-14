import React, { Component } from 'react';
import './App.css';
import Category from "./components/Ticket/Category/Category";
import Ticket from "./components/Ticket/Ticket";
import Buy from "./components/Buy/Buy";
import Alert from "./components/UI/Alert/Alert";


const AVAILABLE_CATEGORIES = [
    {name: 'vip', price: 250, label: 'VIP'},
    {name: '2', price: 200, label: 'Зона 2'},
    {name: '3', price: 150, label: 'Зона 3'},
];

class App extends Component {

    constructor(props){
        super(props);

        this.state = {};

        this.state.categories = AVAILABLE_CATEGORIES.map(item => {

            let category = {...item};

            category.amount = 0;
            category.total = 0;

            return category;
        });

        this.state.purchasable = true;
        this.state.purchasing = false;
    };

    changeCountTicket = (name, amount) => {

        let index = this.state.categories.findIndex(item => item.name === name);
        let category = {...this.state.categories[index]};

        category.amount += amount;
        if(category.amount < 0) category.amount = 0;
        category.total = category.price * category.amount;

        let categories = [...this.state.categories];

        categories[index] = category;

        let state = {...this.state, categories};

        this.setState(state);
    };

    purchaseHandler = () => {
        this.setState({purchasing: true});
    };

    closed = () => {
        this.setState({purchasing: false});
    };

    someHandler =() => {
        alert('Функция вызвана')
    };


    getTotal = () => {
        let total = 0;
        for(let i = 0; i < this.state.categories.length; i++) {
            total += this.state.categories[i].total;
        }
        return total;
    };

    render() {

        const buttons = [
            {type: 'primary', label: 'Continue', clicked: this.someHandler},
            {type: 'danger', label: 'Close', clicked: this.closed}
        ];

        return (
            <div className="container">
                <Ticket
                    total={this.getTotal()}
                >
                    {this.state.categories.map(item => <Category category={item} key={item.name}
                    changeCountTicket={this.changeCountTicket}
                    />)}
                    <Buy
                        closed={this.closed}
                        purchaseHandler={this.purchaseHandler}
                        modalShow={this.state.purchasing}
                        tickets={this.state.categories}
                        buttons={buttons}
                        total={this.getTotal()}
                    />
                </Ticket>

                <Alert
                    type="warning"
                    dismiss={this.someHandler}
                >This is a warning type alert</Alert>
                <Alert type="success">This is a success type alert</Alert>

            </div>
    );
    }
}

export default App;
