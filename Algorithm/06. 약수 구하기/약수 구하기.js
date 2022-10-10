// num의 약수를 모두 구하여 출력
// num > 0 인 자연수

function divisor(num) {
  let numArr = [];

  for (i = 1; i <= num; i++) {
    if (num % i === 0) {
      numArr.push(i);
    }
  }
  return numArr.forEach((item) => console.log(item));
}
