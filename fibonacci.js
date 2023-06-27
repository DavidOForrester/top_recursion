/*function fibs(n) {
  array = [];
  let j = 0;

  for (let i = 0; i < n; i++) {
    if (i <= 1) {
      array.push(i);
    } else {
      array.push(array[i - 1] + array[i - 2]);
    }
  }
  return array;
}

console.log(fibs(8));*/

function fibsRec(n, arr) {
  // Base cases
  if (n === 0) {
    return [0];
  } else if (n === 1) {
    return [0, 1];
  }

  // Recursive case
  const previousFibonacciNumbers = fibsRec(n - 1, arr);
  const nextFibonacciNumber = previousFibonacciNumbers[previousFibonacciNumbers.length - 1] + previousFibonacciNumbers[previousFibonacciNumbers.length - 2];
  return previousFibonacciNumbers.concat([nextFibonacciNumber]);
}

const fibSeq = [];

console.log(fibsRec(8, fibSeq));
