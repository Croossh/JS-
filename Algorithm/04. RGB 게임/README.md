# 회고

사실 문제를 이해하는게 더 어려웠다.<br>
문제를 많이 풀어봐야 규칙을 빠르게 찾을 수 있겠구나.. 싶었다. 많이 풀어보자~!<br>

```javascript
function triangle(row) {
  while (row.length > 1) {
    let con = "";
    for (let i = 0; i < row.length - 1; i++) {
      con += color(row[i], row[i + 1]);
    }
    row = con;
  }
  return row;
}
```
1. `while문`을 통해 `row`문자열의 길이가 1이 될때까지 밑의 `for문`을 실행 해준다.<br> 
2. `let con = "";` 으로 변수를 초기화 해준다.<br>
3. `for문`은 `row`의 길이까지
4. `for문`이 끝나면 `row`문자열에 `con`을 할당해서 길이를 축소 시켜준다. (`color` 함수가 두개를 비교 후 한개로 반환하는 함수이다.)
5. `while문`을 통해 길이가 1개 일때 끝난다면 `row`를 `return`한다.
