# Spread Operater

스프레드 연산자를 통해 반복가능한 객체(Iterale Object)를 개별 요소로 분리 할 수 있다. (ES6)
```javascript
let arr = [1, 2, 3, 4];
let arr2 = [...arr, 5, 6, 7];

console.log(arr2); // [1, 2, 3, 4, 5, 6, 7]
```

※ 그냥 배열 안에 배열을 뿌리려고 하면 이중배열이 되버린다.

```javascript
let arr = [1, 2, 3, 4];
let arr2 = [arr, 5, 6, 7];
console.log(arr2); // [[1, 2, 3, 4] 5, 6 ,7]
```

스프레드 연산자를 통해 배열을 join() 하지 않고도, 요소를 직접적으로 쓸 수 있는점이 매우 유용하다.<br>
***
# reduce

배열을 하나하나 접근하여 각 요소에대해 함수를 실행하고 누적된 값을 출력할 때 용이한 메서드이다. (더할때만 쓰는거아님!)<br>
콜백함수의 인자로 누적값, 현재값, 인덱스을 정할수 있고, 초깃값을 정해주는 편이 좋다.<br>

```javascript
Array.reduce((acc, curr, index) => {
  // 반환할 연산
  }, 0)
```
