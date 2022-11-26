function solution(balls, share) {
  const factorial = (num) => {
    let res = 1;
    for (let i = num; i >= 2; i--) {
      res *= i;
    }
    return res;
  };

  return Math.round(
    factorial(balls) / (factorial(balls - share) * factorial(share))
  );
}
