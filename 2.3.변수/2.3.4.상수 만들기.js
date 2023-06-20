//상수 : 변하지 않는 수
//상수는 cosnt로 표현 그러나 cosnt는 꼭 상수는 아님. const에 객체(배열,함수,객체 리터럴)가 대입되면 객체 내부의 속성이나 배열의 요소는 수정할 수 있다.
const value = "상수입니다.";
value = "바꿀 수 없습니다.";
console.log(value); //error
//const value="다시 선언도 불가능"
