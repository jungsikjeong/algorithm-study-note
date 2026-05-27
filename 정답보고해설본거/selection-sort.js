function selectionSort(array) {
  const n = array.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i; // 현재 인덱스부터 시작

    for (let j = i + 1; j < n; j++) {
      //현재 최소값보다 더 작은 값을 발견하면
      if (array[j] < array[minIndex]) {
        minIndex = j; // 최소값을 갱신시켜주고
      }
    }

    // 만약 최소값이 현재 위치가아니라면 서로 교환
    if (minIndex !== i) {
      // let temp = array[i]; // 잠시 기존 자리는 템프로 저장
      // array[i] = array[minIndex]; // 기존 값을 최소값으로 변경
      // array[minIndex] = temp; // 최소 값은 잠시 저장해두었던 템프로 다시 변경

      [array[i], array[minIndex]] = [array[minIndex], array[i]];
    }
  }

  return array;
}

console.log(selectionSort([77, 41, 6, 4, 3, 2, 5, 222]));

/**
 * 느낀점 26년5월27일 오후 10시35분
 * 아이패드를 잘 산거같다.
 * 아이패드에 그림그려가면서 하나하나 for문이 왜 두개여야하는지, 이 값일땐 중첩 for문이 어떻게되고 if문 값이 어떻게되고 minIndex값은 어떻게 되고를
 * 하나하나 머리에 그려가면서 때려넣어서 이해시키니까 얼추 이해가갔다.
 * 진짜 기초중의 기초인데 이러고있는게 좀 어이가없고, 지금은 이해하는데 시간이걸리지만 프로그래밍적 사고를 기르는 과정이라 생각하고 이 시간이 지나면 이해하는데에 더 빨라질것이라 생각한다.
 */
