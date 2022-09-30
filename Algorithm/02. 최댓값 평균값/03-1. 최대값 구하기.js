// 배열의 최대값을 구하라
function getMaxFromArray(arr) {
  let getMax = Math.max(...arr);
  return getMax;
}

const input = [1, 2, 3, 5, 10, 9];

console.log(getMaxFromArray(input));
