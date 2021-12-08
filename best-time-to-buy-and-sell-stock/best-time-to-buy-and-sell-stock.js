/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // loop thru the array
        // two stock prices, buying price and selling price
            // buying price = prices[0]
                // change when the current element is smaller than                      prev price
            // maxProfit
    let buyingPrice = prices[0]
    let maxProfit = 0
    
    for (const priceToday of prices) {
        if (buyingPrice > priceToday) {
            buyingPrice = priceToday
        } 
        
        if (priceToday - buyingPrice > maxProfit) {
            maxProfit = priceToday - buyingPrice
        }
    }
    // return maxProfit
    return maxProfit
};