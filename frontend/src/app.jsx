import React, { useState } from 'react';
import OrderForm from './components/OrderForm';
import OrderBook from './components/OrderBook';
import ExecutionResult from './components/ExecutionResult';
import './styles.css';

//-----------------------------------------Mock data------------------------------------------------

const bids = [
  { price: 99.0, volume: 10 },
  { price: 98.5, volume: 15 },
  { price: 98.0, volume: 20 }
];

const asks = [
  { price: 100.0, volume: 10 },
  { price: 100.5, volume: 15 },
  { price: 101.0, volume: 20 }
];
// the "..." is spread operator: spreads all the key-value pairs into the component
//ex: const props = { size: "large", disabled: true };
//   <Button {...props} /> is shorthand for <Button size="large" disabled={true} />
//(basically a copy) and then you add what you need to
const bestBid = Math.max(...bids.map(b => b.price));
const bestAsk = Math.min(...asks.map(a => a.price));

const formData;
const result;

//middle of highest bid price and lowest ask price (best bid and ask prices)
const midPrice = (bestBid + bestAsk) / 2;
function handleSubmit(){

        }