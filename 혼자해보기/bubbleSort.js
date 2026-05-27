// function bubbleSort(arr) {
//   const n = arr.length;
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       if (arr[j] > arr[j + 1]) {
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//       }
//     }
//   }
//   return arr;
// }

// console.log(bubbleSort([77, 42, 6, 4, 3, 6, 1, 35, 222]));

function bubbleSort(array) {
  const n = array.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }

  return array;
}

console.log(bubbleSort([77, 42, 6, 4, 3, 6, 1, 35, 222]));
