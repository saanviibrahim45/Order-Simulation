import React from 'react';

function OrderBook({ bids, asks, midPrice }) {
  return (
    <div className="order-book">
      <h3>Order Book</h3>
      <p><strong>Mid Price:</strong> ${midPrice.toFixed(2)}</p>

      <div className="order-book-rows">
        <div className="order-book-section">
          <h4>Bids</h4>
          <ul>
            {bids.map((bid, index) => (
              <li key={index}>
                Price: ${bid.price} — Volume: {bid.volume}
              </li>
            ))}
          </ul>
        </div>

        <div className="order-book-section">
          <h4>Asks</h4>
          <ul>
            {asks.map((ask, index) => (
              <li key={index}>
                Price: ${ask.price} — Volume: {ask.volume}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default OrderBook;




