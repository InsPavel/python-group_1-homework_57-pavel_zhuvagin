import React, { Component } from 'react';
import './App.css';
import Category from "./components/Ticket/Category/Category";
import Ticket from "./components/Ticket/Ticket";


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


    getTotal = () => {
        let total = 0;
        for(let i = 0; i < this.state.categories.length; i++) {
            total += this.state.categories[i].total;
        }
        return total;
    };

    render() {
        return (
            <div className="container">
                <Ticket
                    total={this.getTotal()}
                >
                    {this.state.categories.map(item => <Category category={item} key={item.name}
                    changeCountTicket={this.changeCountTicket}
                    />)}
                </Ticket>
            </div>
    );
    }
}

export default App;
