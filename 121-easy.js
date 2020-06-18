function maxProfit(prices) {
  let largestTradeValue = 0;
  let smallest = prices[0];
  for (let i = 0, j = i + 1; j <= prices.length; j++) {
    if (smallest < prices[j]) {
      if (smallest - prices[j] < largestTradeValue) {
        largestTradeValue = smallest - prices[j];
        continue;
      }
    } else {
      if (smallest > prices[j]) {
        smallest = prices[j];
      } else {
        i + 1 < prices.length ? i++ : i;
      }
    }
  }

  return -1 * largestTradeValue;
}

console.log(maxProfit([3, 3, 5, 0, 0, 3, 1, 4]));
