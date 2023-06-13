//중첩 if : if나 else, else if문의 중괄호 안에 조거문을 넣을 수 있다.
let first = true;
let second = false;
if (first) {
  console.log("첫번째 조건충족!");
  if (second) {
    console.log("두번째 조건도 충족");
  } else {
    console.log("두번째 조건은 불충족");
  }
} else {
  console.log("첫번째 조건 불충족");
}
/*중첩if문은 피하는 것이 좋다. 중첩if문은 논리적으로 if-else if-else 문으로 변환할수있다.
따라서 중첩해서 쓰기보단 if-else if-else로 변환하여 가독성을 높이자.*/
if (first && second) {
  console.log("첫번째 조건 충족");
  console.log("두번째 조건 충족");
} else if (first) {
  console.log("첫번째 조건 충족");
  console.log("두번째 조건은 불충족");
} else {
  console.log("첫번째 조건 불충족");
}
