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

    for (let i = k; i < arr.length; i++) {
      for (let j = 1; j < arr[i].length; j++) {
        if (arr[i][j] !== arr[i][j].toLowerCase()) {
          result.push(arr[i].slice(j));
        }
      }
    }

    k++;
    count++;
  }

  if (count > N) {
    for (let i = 0; i < result.length; i++) {
      console.log(result[i]);
    }
    rl.close();
  }
}).on("close", function () {
  process.exit();
});
