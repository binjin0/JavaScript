//continue문 :반복문이 특정 조건에서만 실행되기를 원할 때 사용. continue문을 넣으면 이후 코드는 건너뛰게 된다.
let i = 0;
while (i < 10) {
  console.log("i++전" + i);
  i++; //i가 들어오자마자 1증가시켜버림
  console.log("i++후:" + i);
  if (i % 2 === 0) {
    //즉 i가짝수일때는 continue문때문에 아래 console.log문을 실행하지 않음
    continue;
  }
  console.log(i);
}
