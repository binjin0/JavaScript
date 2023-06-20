//과일변수나열 -> 변수로 나열 (하나하나 선언하기 힘듦)
const apple = "사과";
const orange = "오렌지";
const pear = "배";
const strawberry = "딸기";

//과일의 종류 너무나도 많음->배열이용하면 간단하게 표현가능
const fruits = ["사과", "오렌지", "배", "딸기"];

//배열의 값 불러오기 ->인덱스 이용
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);

/*<배열>
배열안의 값 : 요소
 */
//1. 배열 안의 값은 자료형이 같지않아도 무방
const variableArray = ["a", 20, 20, true]; //값이 중복되어도 상관없음

console.log(variableArray[0]);
console.log(variableArray[1]);
console.log(variableArray[2]);
console.log(variableArray[3]);

//2.이차원 배열
const arrayOfArray = [
  [1, 2, 3],
  [4, 5, 6],
];
console.log(arrayOfArray[0]);

//3.배열의 요소 개수 구하기 -> .length
const everything = ["사과", 1, undefined, true, "", NaN];
console.log(everything.length); //6 (빈값도 유효한 값이기때문에 요소개수 셀 때 포함됨)
console.log(everything[everything.length - 1]); //인덱스는 실제 요소의 위치에 -1한 것! 따라서 전체길이에서 -1을하면 마지막 요소 구할 수 있다.
//1분퀴즈. arr라는 배열이 있을 때, 배열의 마지막에서 세번째 요소를 찾아보세요
const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr[arr.length - 3]);

//4. 배열에 요소 추가하기
const target = ["a", "b", "c", "d", "e"];
console.log("요소 추가 전 배열:" + target);
//4-1.배열 마지막에 요소 추가
//<인덱스 이용하기>
target[5] = "f";
console.log("인덱스이용하여 배열 맨 뒤에 요소 추가: " + target);
//<length이용하기>
target[target.length] = "g";
console.log("length이용하여 배열 맨 뒤에 요소 추가: " + target);
//<push이용하기>
target.push("h");
console.log("push 이용하여 배열 맨 뒤에 요소 추가: " + target);
//4-2. 배열 처음에 요소 추가
//<인덱스 이용> ->X 이러면 추가가되는 것이 아니라 원래 있던 요소와 변경이 됨
target[0] = "1";
console.log("잘못된 예 ->" + target);

//<unshift 이용하기>
target.unshift("a");
console.log("unshifr이용하여 배열 맨 처음에 요소 추가:" + target);

//5.배열 요소 수정하기
target[5] = "z";
console.log("요소 수정한 배열: " + target);

//6.배열 요소 제거
//6-1. 마지막 요소 제거 pop
target.pop();
console.log("마지막 요소 제거한 배열: " + target);

//6-2. 첫번째 요소 제거 shift
target.shift();
console.log("첫번째 요소 제거한 배열: " + target);

//6-3. 중간 요소 제거 splice
//splice(시작인덱스, 제거할 요소의 개수)
//splice(시작인덱스, 제거할 요소의 개수, 제거한 곳에 넣은 새로운 요소)
target.splice(1, 2);
console.log("인덱스 1번부터 2개 요소 삭제: " + target);
target.splice(1, 2, "a", "b");
console.log("삭제한 자리에 요소 추가: " + target);

//7. 배열에서 요소 찾기
//<include - 존재하는지에 대한 여부를 true/flase로 나타냄>
const result = target.includes("a");
const result1 = target.includes("c");
console.log("a가 존재하나요? " + result);
console.log("c가 존재하나요? " + result1);

//indexOf - 검색하고 싶은 값이 몇 번째 인덱스에 위치하는지 알려줌(앞에서부터 검색)
//lastindexOf - 검색하고 싶은 값이 몇 번째 인덱스에 위치하는지 알려줌(뒤에서부터 검색)

const target1 = ["a", "a", "b", "c", "d", "e", "f", "c"];
const result2 = target1.indexOf("a");
const result3 = target1.lastIndexOf("c");
const result4 = target1.indexOf("w");
console.log("indexOf를 사용하여 a 위치 찾기->" + result2); //a는 인덱스0과1에 위치하지만 indexOf는 앞에서부터 검색하므로 0이 반환됨
console.log("lastindexOf를 사용하여 c위치 찾기->" + result3); //c는 인덱스 3과7에 위치하지만 lastindexOf는 뒤에서부터 검색하므로 7이반환됨
console.log("w 요소 찾기->" + result4); //존재하지 않으면 -1이 뜬다.
//8. 배열 반복하기
//배열은 while문과 for문을 같이 사용하는 경우가 많다.
let i = 0;
console.log("<while문을 이용한 출력> ");
while (i < target1.length) {
  console.log(target1[i]);
  i++;
}
console.log("<for문을 이용한 출력> ");
for (let i = 0; i < target1.length; i++) {
  console.log(target1[i]);
}
//1분퀴즈 - 다음 배열에서 '라'모두 제거하세요. indexOf와 splice를 사용하세요
const arrt = ["가", "라", "다", "라", "마", "라"];
for (let i = 0; i < arrt.length; i++) {
  if (i == arrt.indexOf("라")) {
    arrt.splice(i, 1);
  }
  console.log(arrt);
}
console.log("최종 결과 -> " + arrt);
