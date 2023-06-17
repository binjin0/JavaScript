//중첩반복문 : 반복문 안에 반복문이 들어있는 경우
// for (let i = 0; i < 10; i++) {
//   for (let j = 0; j < 10; j++) {
//     console.log(i, j);
//   }
// }
//구구단을 출력하되, 결과에 짝수가 하나도 나오지 않게 해보세요.continue문을 사용하여
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    if ((i * j) % 2 != 0) {
      console.log(i + "*" + j + "=" + i * j);
    }
  }
}
