/* 문제 : 입력받은 풀네임의 이름만 출력
1. 첫번째 입력값은 명단 갯수.
ex) 4 입력 => 이후 다음 line 부터 4명의 이름 입력됨
2. 두번째 입력값부터 영문으로 된 성+이름 형태 (한줄에 한개씩)
ex)
- 입력
2
ParkWoochan
JohnWhtie
- 출력
Woochan
White
*/
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N = 0; // 주어진 line 갯수
let count = 0; //  line 카운트 다운
let arr = []; // line 을 담아둘 배열
let result = []; // 결과를 담아둘 배열
let k = 0; // 배열의 다음부터 검사해야하기 때문에 바깥에서 초기화를 한것!

rl.on("line", function (x) {
  // 시작시 N을 할당
  if (count === 0) {
    N = x;
    count++;
  } else {
    arr.push(x); // 1번째줄 다음부터 arr에 집어넣기

    // 첫번째 for문은 배열의 각 요소 접근
    for (let i = k; i < arr.length; i++) {
      // 두번째 for문은 i번째 요소의 각 문자열 접근
      for (let j = 1; j < arr[i].length; j++) {
        if (arr[i][j] !== arr[i][j].toLowerCase()) {
          // 두번째 대문자 발견시 slice
          result.push(arr[i].slice(j));
        }
      }
    }

    k++;
    count++;
  }

  if (count > N) {
    // 기존의 최대입력 줄 갯수가 현재 count를 넘어갈 때 결과 출력 및 종료
    for (let i = 0; i < result.length; i++) {
      console.log(result[i]);
    }
    rl.close();
  }
}).on("close", function () {
  process.exit();
});
