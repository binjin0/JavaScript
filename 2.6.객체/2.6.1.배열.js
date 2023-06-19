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
