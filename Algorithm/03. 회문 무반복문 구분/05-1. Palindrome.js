// 회문이 맞으면 true, 아니라면 false 를 반환
// 전달되는 파라미터로는 단어 또는 문장이 올 수 있음.

function isPalindrome(str) {
  let test = str
    .split("")
    .filter((item) => item !== "," && item !== "." && item !== " ") // 특수기호, 공백을 제거
    .join("")
    .toLowerCase();

  let reverseTest = test.split("").reverse().join(""); // reverse는 Array에서만 가능

  if (test === reverseTest) {
    return true;
  } else {
    return false;
  }
}
console.log(isPalindrome("A man, a plan, a canal. Panama"));
