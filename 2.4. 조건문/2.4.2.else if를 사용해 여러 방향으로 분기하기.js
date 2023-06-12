//else if :  조건문의 조건식이 여러 경우의 수가 있을 때 사용
/* if (조건식) {
     실행문;
   } else if (조건식) {
     실행문;
   } else {
     실행문;
 }*/
const score = 90;
if (score >= 90) {
  console.log("A+");
} else if (score >= 80 && score < 90) {
  console.log("A");
} else if (score >= 70 && score < 80) {
  console.log("B+");
} else if (scroe >= 60 && scroe < 70) {
  console.log("B");
} else {
  console.log("F");
}
//위 코드를 더 간단하게 쓰면
if (score >= 90) {
  console.log("A+");
} else if (score >= 80) {
  console.log("A");
} else if (score >= 70) {
  console.log("B+");
} else if (score >= 60) {
  console.log(B);
} else {
  console.log("F");
}
