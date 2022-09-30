// 코로나 확진자 수가 100명 이상인 도시를 반환 (단, 내림차순)

function getSeriousCity(arr) {
  let result = arr.filter((item) => item.coronaCount >= 100);
  let sortResult = result.sort((a, b) => b["coronaCount"] - a["coronaCount"]);

  return sortResult;
}

// 예시 (출처: Kaggle 사이트)
const coronaData = [
  { name: "seoul", coronaCount: 240 },
  { name: "gyeonggi", coronaCount: 200 },
  { name: "busan", coronaCount: 98 },
  { name: "chungnam", coronaCount: 229 },
  { name: "gyeongnam", coronaCount: 78 },
  { name: "ulsan", coronaCount: 27 },
  { name: "gangwon", coronaCount: 28 },
  { name: "jeju", coronaCount: 4 },
  { name: "daejeon", coronaCount: 22 },
  { name: "incheon", coronaCount: 28 },
  { name: "gwangju", coronaCount: 13 },
];

console.log(getSeriousCity(coronaData));
