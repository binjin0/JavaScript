//자료형 : 문자열, 숫자, 불, undefined, null, object, symbol
//undefined, null ->빈값을 표현함.

//1. undefined
//콘솔창 속 undefined
console.log("Hello"); //console.log 명령어는 콘솔에 무언가를 출력하지만. 그 자체로는 결과값이 없기때문에 항상 콘솔에 undefined가 출력된다.
//undefined 타입
console.log(typeof undefined); //undefined
//undefined를 불값으로 형변환시키면?
console.log(!!undefined); //false
console.log(undefined == false); //undefined불형이 false라고해서 false와 같은 것은 아님
console.log(undefined === false); //undefined불형이 false라고해서 false와 같은 것은 아님

//2. null
//null과 undefined가 같을까?
console.log(null == undefined); //빈값이라는 점에서 같음
console.log(null === undefined); //값을 같지만 자료형이 같지않아 false를 반환한다.
//null을 불값으로 형변환시키면?
console.log(!!null); //fasle
console.log(null == false); //false
console.log(null == 0); //false
console.log(null == ""); //false
//null의 자료형 검사
console.log(typeof null); //object, 원래대로라면 null이나와야하지만 언어가 만들어진 초창기 실수 때문에 object가되었다. 즉 버그이다.
