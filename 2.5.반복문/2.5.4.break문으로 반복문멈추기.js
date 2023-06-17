//break : 반복문을 멈춤
let i = 0;
while (true) {
  //원래대로라면 무한반복이지만 break을줘서 멈춘다.
  if (i == 5) break;
  i++;
}
console.log(i);

/*무한반복일 때 for문 vs while문
결론은 while문을 더 많이쓴다.!
--------------------------------------
let i=0;
while (true) {
    console.log(i)*;
    i++;
}
------------------------------------
for문을 이용할 수 있지만 보통 for문의 조건식을 생략하는 경우는 별로 없기때문에 어색한
형태로 코드를 작성해야한다. 따라서 무한반복일때는 while문을 더 많이 쓴다.
for(let i=0; ; i++){
   console.log(i)
}*/
