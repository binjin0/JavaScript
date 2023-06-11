//else : 조건이 거짓인 값일때 실행

if (false) {
  console.log("Hello, if!");
} else {
  console.log("Hello,else!");
} //결과는 else문이 출력되겠죠?

let value = "사과";
let condition = false;
if (condition) {
  value = "바나나";
} else {
  value = "포도";
}
console.log(value);
