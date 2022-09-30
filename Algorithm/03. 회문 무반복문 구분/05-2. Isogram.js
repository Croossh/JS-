// 무반복어가 맞으면 true, 아니라면 false 를 반환
// 전달되는 파라미터로는 단어 또는 문장이 올 수 있음.

function isIsogram(str) {
  // 첫번째 방법
  // let test = str
  //   .toLowerCase()
  //   .split('')
  //   .filter(item => item !== ',' && item !== '.' && item !== ' ');
  //
  // // 이중 for문을 통해 배열 원소들을 비교
  // for (let i = 0; i < test.length; i++) {
  //   for (let j = i + 1; j < test.length; j++) {
  //     if (test[i] === test[j]) {
  //       return false;
  //     }
  //   }
  // }

  // 두번째 방법
  let test = str.toLowerCase().split("").sort(); // sort로 알파벳 순으로 정렬

  for (let i = 0; i < test.length; i++) {
    // 다음 원소가 같은게있다면? 탈락!
    if (test[i] === test[i + 1]) {
      return false;
    }
  }

  return true;
}

console.log(isIsogram("subdermatoglyphic"));
