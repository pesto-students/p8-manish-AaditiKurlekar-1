function subArraySum(a) {
  let size = a.length;
  let maxint = 10000;
  let max_till = -10000;
  let max_ending_here = 0;

  for (var i = 0; i < size; i++) {
    max_ending_here = max_ending_here + a[i];
    if (max_till < max_ending_here){
         max_till = max_ending_here;
    }

    if (max_ending_here < 0){
         max_ending_here = 0;
    }
  }
  return max_till;
}

var a = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log("Max contiguous array sum is : ", subArraySum(a));

//Time complexity: O(n)
//Space complexity : O(1)
