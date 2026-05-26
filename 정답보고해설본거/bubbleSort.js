// function bubbleSort(arr) {
//   const n = arr.length;

//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j]; // 더 큰 값 잠시 저장
//         arr[j] = arr[j + 1]; // 기존 큰 값 작은 값으로 변경
//         arr[j + 1] = temp; // 원래 작은 자리는 잠시 저장해두었던 temp로변경
//       }
//     }
//   }

//   return arr;
// }

function bubbleSort(arr) {
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
}
