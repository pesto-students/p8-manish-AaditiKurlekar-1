function threeSum(arr, target) {
  let thirdIndex = 0,
    sum,
    diff;
  let minDiff = 999;
  let minSum = 999;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (j == i) {
        continue;
      }

      if (j + 1 == i) {
        thirdIndex = i + 1;
      } else {
        thirdIndex = j + 1;
      }

      sum = arr[i] + arr[j] + arr[thirdIndex];

      diff = sum - target;
      if (diff >= 0 && diff < minDiff) {
        console.log("Elements : " + arr[i], arr[j], arr[thirdIndex]);
        minDiff = diff;
        minSum = sum;
      }

      diff = target - sum;
      if (diff >= 0 && diff < minDiff) {
        console.log("Elements : " + arr[i], arr[j], arr[thirdIndex]);
        minDiff = diff;
        minSum = sum;
      }
    }
  }

  return minSum;
}

console.log(threeSum([-1, 2, 1, -4], 1));

//Time complexity : O(n^2)
//Space complexity : O(1)