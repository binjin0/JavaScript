//1분퀴즈. 매개변수로 x,y,z을 받아 곱한 값을 반환하는 multuply 함수를 만들어 보세요. 단, 화살표 함수로 만드세요
const multuply = (x, y, z) => {
  return x * y * z;
};
console.log(multuply(1, 2, 3));

//다른 변수 사용하기
//1. 함수 안에서 변수나 상수를 선언할 수 있다.
function minus1(x, y) {
  const a = 100;
  return (x - y) * a;
}
console.log(minus1(5, 3));
//2. 함수 밖에서 선언한 변수나 상수를 사용할 수 있다.
const b = 100;
function minus2(x, y) {
  return (x - y) * b;
}
console.log(minus2(5, 3));
