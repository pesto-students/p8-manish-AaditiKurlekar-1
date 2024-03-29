/* You are given an array prices where prices[i] is the price of a given stock on the ith day.
You want to maximize your profit by choosing a single day to buy one stock andchoosing a different day 
in the future to sell that stock.Return the maximum profit youcan achieve from this transaction. 
If you cannot achieve any profit, return 0.

Example 1: Input: prices = [7,1,5,3,6,4] Output: 5 
Explanation: Buy on day 2 (price = 1)and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling onday 1 is not allowed because you must buy before you sell. 
 
Example 2: Input: prices =[7,6,4,3,1] Output: 0 
Explanation: In this case, no transactions are done and 
the maxprofit = 0 Constraints: 1 <= prices.length <= 105 0 <= prices[i] <= 104
*/

function profit(arr) {
  let profit = 0;
  let tempProfit = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {

      if (arr[j] > arr[i]) {

        tempProfit = arr[j] - arr[i];
        if (tempProfit > profit) {
          profit = tempProfit;
        }
        
      }

    }
  }

  return profit;
}

console.log(profit([7, 1, 5, 3, 6, 4, 10, 2, 20]));

//Time complexity : O(n^2)
//Space complexity : O(1)
