export function simulateOrder(orderType, side, size, price, bids, asks) {
  let filledPercent = 0;
  let avgPrice = 0;
  let slippage = 0;

  const bestBid = Math.max(...bids.map(b => b.price));
  const bestAsk = Math.min(...asks.map(a => a.price));

  if (orderType === 'market') {
    // TODO: loop through book (asks for buy, bids for sell)
    // match size, compute cost and slippage
  }
  else if (orderType === 'limit') {
    if ((side === 'buy' && price >= bestAsk) ||
        (side === 'sell' && price <= bestBid)) {
      // TODO: same logic as market fill (aggressive limit)
    } else {
      // order sits in book and does not fill
      filledPercent = 0;
      avgPrice = 0;
      slippage = 0;
    }
  }

  return {
    filledPercent,
    avgPrice,
    slippage,
  };
}
