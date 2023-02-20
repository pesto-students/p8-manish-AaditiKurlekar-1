function printNGE(arr, n) {
  var s = [];
  s.push(arr[0]);

  for (let i = 1; i < n; i++) {
    if (s.length == 0) {
      s.push(arr[i]);
      continue;
    }

    while (!(s.length == 0) && s[s.length - 1] < arr[i]) {
      console.log(s[s.length - 1] + " --> " + arr[i]);
      s.pop();
    }

    s.push(arr[i]);
  }

  while (s.length != 0) {
    console.log(s[s.length - w01] + " --> " + -1);
    s.pop();
  }
}

var arr = [1, 3, 2, 4];
var n = arr.length;
printNGE(arr, n);
