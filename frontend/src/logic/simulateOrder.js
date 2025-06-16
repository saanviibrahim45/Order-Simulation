export function simulateOrder(orderType, side, size, price, bids, asks) {
  let filledPercent = 0;
  let avgPrice = 0;
  let slippage = 0;

  const bestBid = Math.max(...bids.map(b => b.price));
  const bestAsk = Math.min(...asks.map(a => a.price)); 

  //Decide what book to use and how to sort it
  let book = [];
  if (side == 'buy') {
    //sort from lowest to highest price
    //.slice() copies the entire array if it has no args
    book = asks.slice();
    for (let i = 0; i < book.length - 1; i++) {
      for (let j = i + 1; j < book.length; j++) {
        if (book[i].price > book[j].price) {
          let temp = book[i];
          book[i] = book[j];
          book[j] = temp;
        }
      }
    }
  } else {
    //sort from highest to lowest price
    book = bids.slice();
    for (let i = 0; i < book.length - 1; i++) {
      for (let j = i + 1; j < book.length; j++) {
        if (book[i].price < book[j].price) {
          let temp = book[i];
          book[i] = book[j];
          book[j] = temp;
        }
      }
    }
  }

  // Decide best price for slippage calc
  let bestPrice;
  if (side == 'buy') {
    bestPrice = bestAsk;
  } else {
    bestPrice = bestBid;
  }

  // Simulate the order
  if (orderType == 'market') {
    let remainingSize = size;
    let totalCost = 0;
    let totalFilled = 0;

    for (let i = 0; i < book.length; i++) {
      if (remainingSize <= 0) {
        break;
      }

      let level = book[i];
      let fillAmount = Math.min(remainingSize, level.volume);
      totalCost += fillAmount * level.price;
      totalFilled += fillAmount;
      remainingSize -= fillAmount;
    }

    if (totalFilled > 0) {
      avgPrice = totalCost / totalFilled;
      filledPercent = (totalFilled / size) * 100;
      slippage = Math.abs(avgPrice - bestPrice);
    }
  } 
  else if (orderType === 'limit') {
    let shouldFill = false;

    if (side === 'buy' && price >= bestAsk) {
      shouldFill = true;
    } else if (side === 'sell' && price <= bestBid) {
      shouldFill = true;
    }

    if (shouldFill) {
      let remainingSize = size;
      let totalCost = 0;
      let totalFilled = 0;

      for (let i = 0; i < book.length; i++) {
        if (remainingSize <= 0) {
          break;
        }

        let level = book[i];
        if ((side === 'buy' && level.price <= price) ||
            (side === 'sell' && level.price >= price)) {
          let fillAmount = Math.min(remainingSize, level.volume);
          totalCost += fillAmount * level.price;
          totalFilled += fillAmount;
          remainingSize -= fillAmount;
        }
      }

      if (totalFilled > 0) {
        avgPrice = totalCost / totalFilled;
        filledPercent = (totalFilled / size) * 100;
        slippage = Math.abs(avgPrice - bestPrice);
      }
    } else {
      //the order isn't filled
      filledPercent = 0;
      avgPrice = 0;
      slippage = 0;
    }
  }

  return {
    filledPercent: filledPercent,
    avgPrice: avgPrice,
    slippage: slippage,
  };
}
