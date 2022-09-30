// 배열의 평균값을 구하라
function getAvgFromArray(arr) {
  let aver = arr.reduce((acc, curr) => acc + curr, 0);
  console.log(aver);
  return Math.ceil(aver / arr.length);
  // round 는 반올림
  // ceil 은 올림
  // floor 은 내림
}

const input = [2022, 333, 5511, 39, 1045, 12, 349, 2];

// 실행 혹은 제출을 위한 코드입니다. 지우거나 수정하지 말아주세요.
console.log(getAvgFromArray(input));
