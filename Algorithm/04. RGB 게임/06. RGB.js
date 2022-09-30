/*
 기존의 행보다 1만큼 짧아진 행을 생성하고 color()함수로 대체된 문자열 최종 색상을 반환
 ※ 최종색상 = 1개
 예시 R R G B R >> R B R G >> G G B >> G R >> B(답!)
*/
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

/*
  입력 문자열에는 대문자 ‘B’, ‘G’ 또는 ‘R’만 포함
  두 쌍의 색을 비교해서 새로운 색상을 반환하는 코드를 작성
*/
function color(c1, c2) {
  let colors = ["B", "G", "R"];
  if (c1 === c2) {
    return c1;
  } else {
    let selectColor = colors.filter((item) => item !== c1 && item !== c2);
    return selectColor[0];
  }
}

console.log(triangle("RBRGB"));
