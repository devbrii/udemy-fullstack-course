function fibonacciGenerator(n) {
  var fibonacciArray = [0, 1];
  if (n === 1) return [0];
  else if (n == 2) return fibonacciArray;
  else {
    for (var i = 2; i < n; i++) {
      var sum = fibonacciArray[i - 2] + fibonacciArray[i - 1];
      fibonacciArray.push(sum);
    }

    return fibonacciArray;
  }
}
