function pairWithGivenDifference(arr, expectedDiff) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (Math.abs(arr[i] - arr[j]) == expectedDiff) {
        console.log(
          "Pair : " + arr[i] + ", " + arr[j],
          "having difference " + expectedDiff
        );
        return 1;
      }
    }
  }

  return 0;
}

console.log(pairWithGivenDifference([5, 10, 3, 2, 50, 80], 70));

//Time complexity : O(n^2)
//Space complexity : O(1)