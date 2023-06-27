const arr = [4, 2, 3, 5, 1];

function mergeSort(arr) {
  const arr1 = arr.slice(0, Math.floor(arr.length / 2))
  if (arr1.length > 1) {
    mergeSort(arr1)
  } else {
    console.log(arr1)
  }
  const arr2 = arr.slice(Math.floor(arr.length / 2))
  if (arr2.length > 1) {
    mergeSort(arr2)
  } else {
    console.log(arr2)
  }
}

mergeSort(arr);
