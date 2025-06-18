import React from 'react';

// 1. Build OrderForm.jsx (30%)
// You need the UI where the user:

// selects orderType (market/limit)
// selects side (buy/sell)
// enters size
// enters price
// hits Submit (which calls your handleSubmit)

//function OrderForm is receiving one object as
//its argument, and then extracting these keys from it directly.
function OrderForm(props){
        const orderType = props.orderType;
        const setOrderType = props.setOrderType;
        const size = props.setSize;
        const price = props.setPrice;
        const handleSubmit = props.handleSubmit;

}

return (
    <form onSubmit={handleSubmit} className="order-form">
      <h3>Order Entry</h3>

      <label>
        Order Type:
        <select value={orderType} onChange={e => setOrderType(e.target.value)}>
          <option value="market">Market</option>
          <option value="limit">Limit</option>
        </select>
      </label>

      <label>
        Side:
        <select value={side} onChange={e => setSide(e.target.value)}>
          <option value="buy">Buy</option>
          <option value="sell">Sell</option>
        </select>
      </label>

      <label>
        Size:
        <input
          type="number"
          value={size}
          onChange={e => setSize(Number(e.target.value))}
          required
        />
      </label>

      <label>
        Price:
        <input
          type="number"
          value={price}
          onChange={e => setPrice(Number(e.target.value))}
          required={orderType === 'limit'}
          disabled={orderType === 'market'}
        />
      </label>

      <button type="submit">Submit Order</button>
    </form>
  );
}

export default OrderForm;

