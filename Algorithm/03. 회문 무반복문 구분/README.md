# 회고

```javascript
 .filter((item) => item !== "," && item !== "." && item !== " ")
```
이부분에서 한동안...
```javascript
 .filter((item) => item !== "," || item !== "." || item !== " ")
```
이렇게 OR 연산자로 적어놓고 "왜 특수기호들을 못걸러주지?" 생각했ㄷ..ㅏ...~~(바보!)~~<br>
vsCode의 디버깅 기능을 통해 filter에서 요소들을 true로 반환해줄 때 무엇인가 잘못 됨을 알아차렸다.<br>
1. || 는 하나라도 true라면 true를 반환 <br>
2. && 는 하나라도 false라면 false를 반환<br>
3. 잊지말자.
***
```javascript  
let test = str
    .split("")
    .filter((item) => item !== "," && item !== "." && item !== " ") // 특수기호, 공백을 제거
    .join("")
    .toLowerCase();
```
이렇게 하나의 문자열에 연속되게 메서드를 적용할 수 있다는 점도 알게 되었다.<br>
※주의. 연속된 메서드를 사용할 때 습관처럼 세미콜론(;)을 찍으면 거기서 끝나고 밑의 메서드들은 실행되지 않는다..!
