//2.2.2 숫자
//지수 표기법
console.log(5e4); //5*10000
console.log(5e4); //5*10000
console.log(5e-3); //5*(1/1000)

//숫자자료형 역시 typeof사용가능
console.log(typeof 5); //number

//parseInt, parseFloat : 문자열을 숫자로 바꾸기
console.log(parseInt("5")); //문자열 5를 숫자로 바꿈
console.log(parseFloat("3.14"));
//parseInt : 숫자로 자료형을 바꿔줄 뿐만아니라 다른 기수법을 적용하는데에도 쓰인다.
console.log(parseInt(111, 2)); //111은 2진법이다. 따라서 int로 나타내면 7!

//NaN : 숫자가 아니지만 자료형을 검사해보면 숫자라고 나옴!

//무한 값 : Inginity
console.log(typeof Infinity); //자료형은 숫자라고 나옴
console.log(Infinity - Infinity); //무한-무한은 숫자가 아님 NaN
console.log(Infinity - 100); //Infinity

//문자와 숫자 더하기
console.log("문자열" + 0); //문자 + 숫자 -> 문자형
console.log("문자열" - 0); //NaN, 한글에서 숫자를 빼는 형태는 존재할 수 없음
console.log("10" - 9); //숫자가 들어간 문자열은 숫자로 여겨져 계산되어 나옴(자료형 숫자로 바뀌겠쥬?)

//실수계산 시 주의할 점
console.log(0.5 + 0.5); //1
console.log(0.1 + 0.2); //0.3이아니라 0.30000000000000004가나옴 왜그럴까? 바로 부동소수점 문제 때문이다.
//부동소수점 문제 해결방법 : 정수로 바꿔서 계산하기
console.log((0.3 * 10 - 0.1 * 10) / 10); //요련식으로 바꿔서 계산하면 우리가 원하는 답이 나와용
