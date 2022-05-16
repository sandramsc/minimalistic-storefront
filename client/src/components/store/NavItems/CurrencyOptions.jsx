import React, { Component } from 'react';
import { GET_CURRENCIES  } from '../../../graphql/queries';
import client from '../../../graphql/client';
//import styled from 'styled-components';
import UpArrow from '../../../assets/icons/up_arrow';
import DownArrow from '../../../assets/icons/down_arrow';


export class CurrencyOptions extends Component {
    constructor(props){
        super(props);
        this.state = {
            //fecth currency list
            currencies: [],
            currentCurrencySymbol: "",
            popCurrencyList: false,
        };
        // assigning ref to instance property for referencing
    this.ref = React.createRef();
}

//listens for clicks outside the target element
componentDidMount(){
    document.addEventListener("click", this.handleClick.bind(this));
    client
        .query({ query: GET_CURRENCIES })
        .then((output)=>
            this.setState((previous)=> {
                const currencies = output.data.currencies;
                const currentCurrencySymbol = currencies[0].symbol;
                this.props.setCurrency(currencies[0].label);
                return{ ...previous, currencies, currentCurrencySymbol }
            })
        )
        .catch((error) => console.log(error));
}
    componentWillUnmount() {
        document.removeEventListener("click", this.handleClick.bind(this));
    }
    //closes if clicks outside detected
    handleClick(event){
        if (this.ref.current && !this.ref.current.contains(event.target)){
            if(this.state.popCurrencyList){
                //closes in set state
                this.setPopCurrencyList();
            }
        }
    }
    //user changed currency
    setChosenCurrency = (currentCurrencySymbol) => {
        this.setState((previous)=> {
            return{ ...previous, currentCurrencySymbol}
        })
    } 

    // toggle currency list
    setPopCurrencyList = () => {
        const popCurrencyList = !this.state.popCurrencyList;
        this.setState((previous)=> {
            return { ...previous, popCurrencyList };
        })
    }

    render(){
    const { popCurrencyList, currencies, currentCurrencySymbol} = this.state;
    return(
        <div className="choose" ref={this.ref}>
            <div className="chosenCurrency" onClick={this.setPopCurrencyList}>
                <p>{currentCurrencySymbol}</p>
                {popCurrencyList ? <UpArrow /> : <DownArrow />}
            </div>
            <div className={popCurrencyList ? "chooseList": "chooseClosed"}>
                {currencies.map((currency) => {
                    return(
                        <div 
                            className="chosen"
                            key={currency.label}
                            onClick={() => {
                                //close currency list
                                this.setPopCurrencyList();
                                //change curreny option
                                this.setChosenCurrency(currency.symbol);
                                //change curreny option in Main.js
                                this.props.setCurrency(currency.label)
                            }}
                        >
                        {currency.symbol + " " + currency.label}
                        </div>
                    )
                })}
            </div>
        </div>
    )
    }
}

export default CurrencyOptions;
