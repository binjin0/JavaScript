/*switch문 (if문과 비교하여 공부하기.)
조건식의 값이 case의 비교조건식과 일칲하면 해당 실행문이 실행된다.
switch(조건식){
     case 비교 조건식:
      //실행문 여러개 적어도 ok.if문과 다르게 중괄호 없어도 무방!!
        실행문;
}

switch문 특징
- 일치하는 case문을 만나도 아래 case문이 실행된다. 따라서 원하는 값만 얻으려먼 break을 지정해준다.
- if문에서 제일 마지막에 else문을 써서 앞에 조건들이 다 아니면 실행할 문장을 설정해주었던것처럼 
switch문에서도 default라는 특수한 예약어를 사용하면 모든 case문 일치하지 않을 때 실행할 문장을 설정할 수 있다.
그리고 else는 if나 if else 맨 뒤에 나와야하지만 switch문은 아무곳이나 써도 된다!
*/
let value = "B";
switch (value) {
  default:
    console.log("아무것도 일치하지않음");
  case "A":
    console.log("A");
    break;
  case "B": //break을 설정해주지않으면 B와 C가 같이 출력되겠죠?
    console.log("B");
    break;
  case "C":
    console.log("C");
    break;
}
