import React, { useState } from 'react';
import OrderForm from './components/OrderForm';
import OrderBook from './components/OrderBook';
import ExecutionResult from './components/ExecutionResult';
import { simulateOrder } from './logic/simulateOrder';
import './styles.css';

function App() {

//------------------------------------------------------- Mock Data ---------------------------------------------------------------------
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

  const bestBid = Math.max(...bids.map(b => b.price));
  const bestAsk = Math.min(...asks.map(a => a.price));
  const midPrice = (bestBid + bestAsk) / 2;

  const [orderType, setOrderType] = useState('market'); 
  const [side, setSide] = useState('buy'); 
  const [size, setSize] = useState(10); 
  const [price, setPrice] = useState(100); 
  const [result, setResult] = useState(null); 

  //the callback function that will run when the form is submitted (so the UI doesn't clear and the app doesn't 
  //reset everytime form submitted)
  function handleSubmit(e) {
    e.preventDefault();
    const output = simulateOrder(orderType, side, size, price, bids, asks);
    setResult(output);
  }

  return (
    <div>
    <h1 className="page-title">Order Simulator</h1>
    <div className="card">

      <OrderForm
        orderType={orderType}
        setOrderType={setOrderType}
        side={side}
        setSide={setSide}
        size={size}
        setSize={setSize}
        price={price}
        setPrice={setPrice}
        handleSubmit={handleSubmit}
      />
      <div className="card">
        <OrderBook bids={bids} asks={asks} midPrice={midPrice} />
      </div>

      {result && (
        <div className="card">
          <ExecutionResult result={result} />
        </div>
      )}
    </div>
    </div>
  );
}

export default App;
