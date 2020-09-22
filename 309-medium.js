function maxProfit(prices) {
  let buy = [];
  let sell = [];

  if (prices.length < 2) {
    return 0;
  }

  for (let i = 0; i < prices.length; i++) {
    buy[i] = Math.max(
      // yesterday buy
      i > 0 ? buy[i - 1] : -prices[0],
      // cooldown period sell skip
      (i > 1 ? sell[i - 2] : 0) - prices[i]
    );
    sell[i] = Math.max(
      // yesterday sell
      i > 0 ? sell[i - 1] : 0,
      // price + if sold er
      (i > 0 ? buy[i - 1] : -prices[0]) + prices[i]
    );
  }

  console.log("buy", buy, "sell", sell);
  return sell[sell.length - 1];
}

console.log(maxProfit([1, 2, 3, 0, 2]));
// console.log(maxProfit([1, 2, 4]));
