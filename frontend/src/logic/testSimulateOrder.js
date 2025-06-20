const { simulateOrder } = require('./simulateOrder.js');

const bids = [
  { price: 99.0, volume: 10 },
  { price: 98.5, volume: 15 },
];

const asks = [
  { price: 100.0, volume: 10 },
  { price: 100.5, volume: 20 },
];

// Test Market Buy
const result1 = simulateOrder('market', 'buy', 15, null, bids, asks);
console.log('Market Buy 15:', result1);

// Test Limit Buy (aggressive)
const result2 = simulateOrder('limit', 'buy', 15, 101, bids, asks);
console.log('Limit Buy at 101 (aggressive):', result2);

// Test Limit Buy (passive)
const result3 = simulateOrder('limit', 'buy', 15, 98, bids, asks);
console.log('Limit Buy at 98 (unfilled):', result3);