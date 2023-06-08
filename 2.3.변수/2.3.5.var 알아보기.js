//var : variable변수의 줄임말. 예쩐에는 많이 사용했지만 다소 이해하기 어려운 특성때문에 const와 let을 사용해 변수를 선언하는 방식으로 옮겨가고 있음
//과거에 작성된 코드에서 var을 많이 사용하므로 특성정도는 알아두어야한다.
var variable = "다시 선언할 수 있습니다."; //var로 변수를 선언하면 특별이 변수문이라고 함
console.log(variable);
var variable2; //값을 초기화하지 않으면 출력했을때 undefined가 대입된다.
console.log(variable2);
//-----------------------------------
//let과 var의 차이점
//1. let은 다시선언 불가능 var은 다시 선언 가능
let x = "다시선언불가능";
//let x="다시선언불가능2" 똑같은 변수이름으로 다시선언하려면 오류가 뜸
var variable = "다시 선언 가능"; //var은 똑같은 이름으로 다시선언해도 오류가 뜨지않음

//2.일부 예약어로 변수명 지정가능
var undefined = "defined";
var Infinity = 0;
var let = "const";
console.log(undefined);
console.log(Infinity);
console.log(let);

//이렇게하면 오류뜸
// let undefined="defined"
// let Infinty=0;
// let let="const";
// console.log(undefined)
// console.log(Infinity)
// console.log(let)

//1분퀴즈.a와b라는 변수에 어떠한 값이 들어 있습니다.두 변수의 값을 서로 바꿔 보세요
let a = 1;
let b = 2;
let c = a;
a = b;
b = c;
console.log(a);
console.log(b);
