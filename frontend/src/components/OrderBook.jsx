import React from 'react';

function OrderBook({ bids, asks, midPrice }) {
  return (
    <div>
      <h3>Order Book</h3>
      <p><strong>Mid Price:</strong> ${midPrice.toFixed(2)}</p>

      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '20px' }}>
        <div>
          <h4>Bids</h4>
          <ul>
            {bids.map((bid, index) => (
              <li key={index}>
                Price: ${bid.price} — Volume: {bid.volume}
              </li>
            ))}
          </ul>
        </div>

        <div>
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



