import React, { Component } from "react";
import { GET_CURRENCIES  } from "../../../graphql/queries";
import client from "../../../graphql/client";
import styled from "styled-components";
import UpArrow from "../../../assets/icons/up_arrow";
import DownArrow from "../../../assets/icons/down_arrow";


const Symbol = styled.div`
margin-right: 5px;
`;
const Currency = styled.div`
    font-size: 14px;
`;


export class CurrencyOptions extends Component {
    constructor(props){
        super(props);
        this.state = {
            //fecth currency list
            currencies: [],
            currentCurrencySymbol: "",
            popCurrencyList: false,
        };
    this.ref = React.createRef();
}

//listens for clicks outside the target element
componentDidMount(){
    document.addEventListener("click", this.handleClickOutside.bind(this));
    client
        .query({ query: GET_CURRENCIES})
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
        document.removeEventListener("click", this.handleClickOutside.bind(this));
    }
    //closes if clicks outside detected
    handleClickOutside(event){
        if (this.ref.current && !this.ref.current.contains(event.target)){
            if(this.state.popCurrencyList){
                this.setPopCurrencyList();
            }
        }
    }
    //user changed currency
    setCurrentCurrency = (currentCurrencySymbol) => {
        this.setState.apply((previous)=> {
            return{ ...previous, currentCurrencySymbol}
        })
    } 

    render(){
    const { popCurrencyList, currencies, currentCurrencySymbol} = this.state;
    return(
        <div className="choose" ref={this.ref}>
            <div className="chosenCurrency" onClick={this.setPopCurrencyList}>
                <Symbol>{currentCurrencySymbol}</Symbol>
                {popCurrencyList ? <UpArrow /> : <DownArrow />}
            </div>
            <div className={popCurrencyList ? "chooseList": "chooseClosed"}>
                {currencies.map((currency) => {
                    return(
                        <Currency 
                            className="chosen"
                            key={currency.label}
                            onClick={() => {
                                this.setPopCurrencyList()
                                this.setCurrentCurrency(currency.symbol);
                                this.props.setCurrency(currency.label)
                            }}
                        >
                        {currency.symbol + " " + currency.label}
                        </Currency>
                      
                    )
                })}
            </div>
        </div>
    )
    }
}

export default CurrencyOptions;
