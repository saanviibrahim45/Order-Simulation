import React from 'react'; 

function OrderForm({
  orderType, setOrderType,
  side, setSide,
  size, setSize,
  price, setPrice,
  handleSubmit
}) {
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
