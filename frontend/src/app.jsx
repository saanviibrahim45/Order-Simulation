import React, { useState } from 'react';
import OrderForm from './components/OrderForm';
import OrderBook from './components/OrderBook';
import ExecutionResult from './components/ExecutionResult';
import { simulateOrder } from './logic/simulateOrder';
import { executionProb } from './logic/executionProb';
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
// <Button {...props} /> is shorthand for <Button size="large" disabled={true} />
//(basically a copy) and then you add what you need to
const bestBid = Math.max(...bids.map(b => b.price));
const bestAsk = Math.min(...asks.map(a => a.price));

// initializing the input field with a starting/default value (the user can still change it)
const [orderType, setOrderType] = useState('market'); 
const [side, setSide] = useState('buy'); 
const [size, setSize] = useState(10); // number of shares
const [price, setPrice] = useState(100); // limit price (optional for market)
const [result, setResult] = useState(null); // simulation result


//middle of highest bid price and lowest ask price (best bid and ask prices)
const midPrice = (bestBid + bestAsk) / 2;
function handleSubmit(e) {
  e.preventDefault(); // prevent page reload

  const output = simulateOrder(orderType, side, size, price, bids, asks);
  setResult(output);
}
