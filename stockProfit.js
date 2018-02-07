var stockPricesYesterday = [10, 7, 5, 8, 11, 9];
function getMaxProfit(price) {
  var sorted = price.sort(function(a, b) {
    return a - b;
  });
  var buy = sorted[0];
  var sell = sorted[price.length - 1];
  return `buy for $${buy} and sell for $${sell}`;
}
getMaxProfit(stockPricesYesterday);
