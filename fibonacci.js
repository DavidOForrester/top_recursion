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

function fibsRec(n) {
  if(n === 0) {
    return
  } 
  console.log(n)
  fibsRec(n - 1)
}

console.log(fibsRec(8));
