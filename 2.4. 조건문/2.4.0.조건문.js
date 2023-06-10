/*조건문 : 주어진 조건에 따라 코드를 실행하거나 실행하지 않는 문
------------------------
if(조건식)
 조건식이 참일때 실행될 실행문;
-----------------------
if뒤에 나오는 소괄 안에 조건식을 넣고, 다음줄에 실행문을 넣으면 된다. 
실행문이 둘 이상이면 중괄호로 감싼다. 
  */
if (true) {
  //true니깐 실행문 실행
  console.log("Hello,if!");
}
if (false) {
  //false는 거짓이므로 실행문 실행하지 않음 ->불값이 거짓인 값은 false,'',0,NaN,null,undefined이다. 나머지는 다 true
  console.log("Hello,if!");
}
//조건식을 이용하여 변수의 값을 바꿀 수 있다.
let value = "사과";
let condition = "true";
if (condition) {
  value = "바나나";
}
console.log(value); //바나나
